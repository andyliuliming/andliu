define(function (require) {
    var $ = require("jquery");
    var jcookie = require("jcookie");
    var ko = require('knockout');
    var util = require("common/shared/util");

    var list = {};
    var tmplId = list.tmplId = "listview-tmpl";

    var tmpl = require("text!common/listview/listview.html");
    util.loadTmpl(list.tmplId, tmpl);

    var css = require("text!common/listview/listview.css");
    util.loadCss(css);

    list.ListViewModel = function (option) {
        var self = this;
        this.url = option.url;
        this.headers = option.headers;
        this.itemTmplId = option.itemTmplId || "";
        this.tags = option.tags || [];
        this.DataItemViewModel = option.DataItemViewModel || Object;

        this.list = ko.observableArray([]);
        this.top = 20;
        this.skip = 0;

        this.defaultFilter = option.filter;
        this.filter = ko.observable(null);
        this.filter.subscribe(function () {
            var selfFilter = self.filter();
            var filterInQuery = util.getQuery("$filter");
            if (selfFilter != filterInQuery) {
                window.location.href = "#" + util.getHash() + self.getQueryStr();
            }
        });

        this.loading = ko.observable(false);
        this.error = ko.observable("");
        this.xhr = null;
    };

    list.ListViewModel.prototype.getQueryStr = function () {
        var query = "?";
        query += "$top=" + this.top;
        query += "&$skip=" + this.skip;
        if (this.filter()) {
            query += "&$filter=" + this.filter();
        }
        return query;
    };

    list.ListViewModel.prototype.refresh = function () {
        var self = this;
        this.loading(true);
        this.top = (util.getQuery("$top") || 10);
        this.top = parseInt(this.top);
        this.skip = (util.getQuery("$skip") || 0);
        this.skip = parseInt(this.skip);

        var filterInUri = util.getQuery("$filter");
        if (!filterInUri) {
            if (self.defaultFilter) {
                self.filter(self.defaultFilter);
            }
        }

        var query = this.getQueryStr();

        this.xhr = util.ajax({
            url: this.url + query,
            type: "GET",
            success: function (data) {
                self.loading(false);
                if (!data) {
                    console.log(data);
                    throw "Service returned invalid data";
                }
                self.list.removeAll();
                if (data.value) {
                    for (var i = 0; i < data.value.length; i++) {
                        self.list.push(new self.DataItemViewModel(data.value[i]));
                    }
                } else {
                    for (var i = 0; i < data.length; i++) {
                        self.list.push(new self.DataItemViewModel(data[i]));
                    }
                }
            },
            error: function (e) {
                if (e.status !== 0) {
                    self.loading(false);
                    console.log(e);
                    self.error("服务暂不可用, 请稍后再试");
                }
            }
        });
    };

    list.ListViewModel.prototype.nextPage = function (data, event) {
        this.skip += this.top;
        window.location.href = "#" + util.getHash() + this.getQueryStr();
    }

    list.ListViewModel.prototype.previousPage = function (data, event) {
        this.skip -= this.top;
        window.location.href = "#" + util.getHash() + this.getQueryStr();
    }

    list.ListViewModel.prototype.del = function (data, event) {
        this.list.remove(data);
    }

    list.ListViewModel.prototype.cancel = function () {
        if (this.xhr) {
            this.xhr.abort();
            this.xhr = null;
        }
    }
    
    return list;
});