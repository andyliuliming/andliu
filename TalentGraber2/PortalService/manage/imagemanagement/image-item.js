define(function (require) {
    var $ = require("jquery");
    var jcookie = require("jcookie");
    var ko = require('knockout');
    var util = require("common/shared/util");
    var komapping = require('komapping');
    var css = require("text!manage/imagemanagement/image-item.css")
    util.loadCss(css);
    var imageItem = {};

    imageItem.ImageItemViewModel = function (data) {
        var self = this;
        self.error = ko.observable("");
        var imageToShow = {
            "Id": data.Id,
            "BucketName": data.BucketName,
            "Name": data.Name,
            "ImageUrl": "http://stardustproductazureservice.chinacloudapp.cn/api/ImageDatas?blobName=" + data.Name + "&bucketName=" + data.BucketName
        };

        self.azureImage = komapping.fromJS(imageToShow);
    };

    imageItem.ImageItemViewModel.prototype.removeImage = function (user) {
        console.dir("remove image.");
    };

    return imageItem;
})