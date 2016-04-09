define(function (require) {
    var $ = require("jquery");
    var jcookie = require("jcookie");
    var ko = require('knockout');
    var util = require("common/shared/util");
    var list = require("common/listview/listview");
    var imageItem = require("manage/imagemanagement/image-item");

    var imageModule = {};

    var tmplId = imageModule.tmplId = "imagemanagement-tmpl";
    var itemTmplId = imageModule.itemTmplId = "image-item-tmpl";

    var tmpl = require("text!manage/imagemanagement/imagemanagement.html");
    util.loadTmpl(tmplId, tmpl);

    var itemTmpl = require("text!manage/imagemanagement/image-item.html");
    util.loadTmpl(itemTmplId, itemTmpl);

    var css = require("text!manage/imagemanagement/imagemanagement.css");
    util.loadCss(css);

    imageModule.ImageListViewModel = function () {
        var self = this;
        self.tips = ko.observable("");
        this.listTmplId = list.tmplId;
        this.listViewModel = new list.ListViewModel({
            url: util.productEndpoint + "odata/AzureImages",
            headers: [{
                name: "Id"
            }, {
                name: "Image"
            }, {
                name: "BucketName"
            }, {
                name: "Name"
            }, {
                name: "Url"
            }, {
                name: "Operation"
            }],
            tags: [{
                "name": "All",
                "filter": ""
            }, {
                "name": "Thumbnail",
                "filter": encodeURI("(Type eq 'small')")
            }, {
                "name": "Watermark",
                "filter": encodeURI("(Type eq 'watermark')")
            }, {
                "name": "Hot Image",
                "filter": encodeURI("(HotScore gt 80)")
            }, {
                "name": "Porn Image",
                "filter": encodeURI("(PornScore gt 90)")
            }],
            itemTmplId: itemTmplId,
            DataItemViewModel: imageItem.ImageItemViewModel
        });
    };

    imageModule.ImageListViewModel.prototype.uploadImage = function () {
        console.dir("upload image");
        var elem = $("#add-image-file")[0];
        var file = elem.files[0];
        var self = this;
        self.tips("uploading");
        if (file != undefined) {
            //clear file input
            elem.type = "text";
            elem.type = "file";
            util.PostImage(file, 'azureimage', function () {
                console.dir("succeeded.");
                self.tips("done");
            }, function () {
                console.dir("failed.");
                self.tips("done");
            });
        }
    };

    imageModule.ImageListViewModel.prototype.refresh = function () {
        this.listViewModel.refresh();
    };

    imageModule.ImageListViewModel.prototype.cancel = function () {
        this.listViewModel.cancel();
    };

    return imageModule;
});