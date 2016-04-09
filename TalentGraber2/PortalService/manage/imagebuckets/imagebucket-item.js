define(function (require) {
    var $ = require("jquery");
    var jcookie = require("jcookie");
    var ko = require('knockout');
    var util = require("common/shared/util");
    var komapping = require('komapping');
    var css = require("text!manage/imagebuckets/imagebucket-item.css")
    util.loadCss(css);
    var imageBucketItem = {};

    imageBucketItem.ImageBucketItemViewModel = function (data) {
        var self = this;
        self.error = ko.observable("");
        self.imageBucket = komapping.fromJS(data);
    };

    imageBucketItem.ImageBucketItemViewModel.prototype.removeImageBucket = function (user) {
        console.dir("remove image bucket.");
    };

    return imageBucketItem;
})