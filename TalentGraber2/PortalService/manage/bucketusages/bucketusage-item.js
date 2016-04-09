define(function (require) {
    var $ = require("jquery");
    var jcookie = require("jcookie");
    var ko = require('knockout');
    var util = require("common/shared/util");
    var komapping = require('komapping');
    var css = require("text!manage/bucketusages/bucketusage-item.css")
    util.loadCss(css);
    var bucketUsageItem = {};

    bucketUsageItem.BucketUsageItemViewModel = function (data) {
        var self = this;
        self.error = ko.observable("");
        self.bucketUsage = komapping.fromJS(data);
    };

    bucketUsageItem.BucketUsageItemViewModel.prototype.removeBucket = function (user) {
        console.dir("remove bucket.");
    };

    return bucketUsageItem;
})