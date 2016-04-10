define(function (require) {
    var $ = require("jquery");
    var jcookie = require("jcookie");
    var ko = require('knockout');
    var util = require("common/shared/util");
    var komapping = require('komapping');
    var css = require("text!manage/githubrepo/githubrepo-detail.css")
    util.loadCss(css);
    var githubRepoDetail = {};

    var tmplId = githubRepoDetail.tmplId = "githubrepo-detail-tmpl";
    var tmpl = require("text!manage/githubrepo/githubrepo-detail.html");
    util.loadTmpl(tmplId, tmpl);

    githubRepoDetail.GithubRepoDetailViewModel = function (isAdd) {
        var self = this;
        self.loading = ko.observable(true);
        self.error = ko.observable("");
        self.githubRepo = komapping.fromJS({
            Id: 0,
            Url: ""
        });

        self.loading(false);
    };

    githubRepoDetail.GithubRepoDetailViewModel.prototype.saveGithubRepo = function () {
        console.dir("save github repo");
        var self = this;
        util.ajax({
            url: util.productEndpoint + "odata/GithubRepoes",
            type: "POST",
            data: JSON.stringify(self.githubRepo),
            success: function (data) {
                if (!data) {
                    alert("Failed to create github repo.");
                }
            },
            error: function (e) {
                console.log("Failed to submit github repo code: " + e.status);
            }
        });
    };
    return githubRepoDetail;
})