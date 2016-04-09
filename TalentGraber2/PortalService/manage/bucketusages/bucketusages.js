define(function (require) {
    var $ = require("jquery");
    var jcookie = require("jcookie");
    var ko = require('knockout');
    var util = require("common/shared/util");
    var list = require("common/listview/listview");
    var bucketUsageItem = require("manage/bucketusages/bucketusage-item");

    var bucketUsagesModule = {};

    var tmplId = bucketUsagesModule.tmplId = "bucketusages-tmpl";
    var itemTmplId = bucketUsagesModule.itemTmplId = "bucketusage-item-tmpl";

    var tmpl = require("text!manage/bucketusages/bucketusages.html");
    util.loadTmpl(tmplId, tmpl);

    var itemTmpl = require("text!manage/bucketusages/bucketusage-item.html");
    util.loadTmpl(itemTmplId, itemTmpl);

    var css = require("text!manage/bucketusages/bucketusages.css");
    util.loadCss(css);

    bucketUsagesModule.BucketUsagesListViewModel = function () {
        this.listTmplId = list.tmplId;
        this.listViewModel = new list.ListViewModel({
            url: util.productEndpoint + "odata/ImageBucketUsages",
            headers: [{
                name: "Id"
            }, {
                name: "BucketName"
            }, {
                name: "Timestamp"
            }, {
                name: "Operation"
            }],
            tags: [{
                "name": "All",
                "filter": ""
            }],
            itemTmplId: itemTmplId,
            DataItemViewModel: bucketUsageItem.BucketUsageItemViewModel
        });
    };

    bucketUsagesModule.BucketUsagesListViewModel.prototype.refresh = function () {
        this.listViewModel.refresh();
    };

    bucketUsagesModule.BucketUsagesListViewModel.prototype.cancel = function () {
        this.listViewModel.cancel();
    };

    return bucketUsagesModule;
});