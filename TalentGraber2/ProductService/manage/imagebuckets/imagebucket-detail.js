define(function (require) {
    var $ = require("jquery");
    var jcookie = require("jcookie");
    var ko = require('knockout');
    var util = require("common/shared/util");
    var komapping = require('komapping');
    var css = require("text!manage/imagebuckets/imagebucket-detail.css")
    util.loadCss(css);
    var imageBucketDetail = {};

    var tmplId = imageBucketDetail.tmplId = "imagebucket-detail-tmpl";
    var tmpl = require("text!manage/imagebuckets/imagebucket-detail.html");
    util.loadTmpl(tmplId, tmpl);

    imageBucketDetail.ImageBucketDetailViewModel = function (isAdd) {
        var self = this;
        self.loading = ko.observable(true);
        self.error = ko.observable("");
        self.imageBucket = komapping.fromJS({
            Id: 0, Name: ""
        });

        self.loading(false);
    };

    imageBucketDetail.ImageBucketDetailViewModel.prototype.saveImageBucket = function () {
        console.dir("save image bucket");
        var self = this;
        util.ajax({
            url: util.productEndpoint + "odata/ImageBuckets",
            type: "POST",
            data: JSON.stringify(self.imageBucket),
            success: function (data) {
                if (!data) {
                    alert("Failed to create image bucket.");
                }
            },
            error: function (e) {
                console.log("Failed to submit image bucket code: " + e.status);
            }
        });
    };
    return imageBucketDetail;
})