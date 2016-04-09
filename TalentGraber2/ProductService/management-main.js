(function () {
    require.config({
        baseUrl: '.',
        paths: {
            knockout: "./lib/knockout",
            komapping: "./lib/knockout.mapping-latest",
            text: "./lib/text",
            ztree: "lib/jquery.ztree.all-3.5",
            jquery: "./lib/jquery",
            jcookie: "./lib/jquery.cookie"
        },
        shim: {
            "jcookie": { "deps": ['jquery'] },
            "ztree": { "deps": ['jquery'] }
        }
    });

require(["jquery",
    "common/shared/util",
    "jcookie",
    "ztree",
    "knockout",
    "komapping",
    "text",
    "manage/managementlayout/managementlayout",
    "manage/imagemanagement/imagemanagement",
    "manage/imagebuckets/imagebuckets",
    "manage/bucketusages/bucketusages",
    "manage/imagebuckets/imagebucket-detail",
    "manage/servicestatus/servicestatus"],
    function ($,
        util,
        jcookie,
        ztree,
        ko,
        komapping,
        text,
        managementlayout,
        imagemanagement,
        imagebuckets,
        bucketusages,
        imagebucketdetail,
        servicestatus) {

        util.checkAccess();

        managementlayout.vm.LayoutTitle("AzureImage Management");
        managementlayout.route("imagebuckets", "Image Buckets", imagebuckets.tmplId, new imagebuckets.ImageBucketListViewModel);
        managementlayout.route("imagebuckets/new", "Add ImageBucket", imagebucketdetail.tmplId, new imagebucketdetail.ImageBucketDetailViewModel(true), "imagebuckets");
        managementlayout.route("bucketusages", "Bucket Usages", bucketusages.tmplId, new bucketusages.BucketUsagesListViewModel);
        managementlayout.route("servicestatus", "Service Status", servicestatus.tmplId, new servicestatus.ServiceStatusViewModel);
        managementlayout.route("imagemanagement", "Image Sample App", imagemanagement.tmplId, new imagemanagement.ImageListViewModel);
        managementlayout.init();

    });
})()