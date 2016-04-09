define(function (require) {
    var $ = require("jquery");
    var jcookie = require("jcookie");
    var ko = require('knockout');
    var util = require("common/shared/util");
    var list = require("common/listview/listview");
    var imageBucketItem = require("manage/imagebuckets/imagebucket-item");

    var imageBucketModule = {};

    var tmplId = imageBucketModule.tmplId = "imagebuckets-tmpl";
    var itemTmplId = imageBucketModule.itemTmplId = "imagebucket-item-tmpl";

    var tmpl = require("text!manage/imagebuckets/imagebuckets.html");
    util.loadTmpl(tmplId, tmpl);

    var itemTmpl = require("text!manage/imagebuckets/imagebucket-item.html");
    util.loadTmpl(itemTmplId, itemTmpl);

    var css = require("text!manage/imagebuckets/imagebuckets.css");
    util.loadCss(css);

    imageBucketModule.ImageBucketListViewModel = function () {
        this.listTmplId = list.tmplId;
        this.listViewModel = new list.ListViewModel({
            url: util.productEndpoint + "odata/ImageBuckets",
            headers: [{
                name: "Id"
            }, {
                name: "Name"
            }, {
                name: "Operation"
            }],
            tags: [{
                "name": "All",
                "filter": ""
            }],
            itemTmplId: itemTmplId,
            DataItemViewModel: imageBucketItem.imageBucketItemViewModel
        });
    };

    imageBucketModule.ImageBucketListViewModel.prototype.refresh = function () {
        this.listViewModel.refresh();
    };

    imageBucketModule.ImageBucketListViewModel.prototype.cancel = function () {
        this.listViewModel.cancel();
    };

    imageBucketModule.ImageBucketListViewModel.prototype.addImageBucket = function () {
        window.location.href = "#imagebuckets/new";
    };

    return imageBucketModule;
});