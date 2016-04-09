define(function (require) {
    var $ = require("jquery");
    var jcookie = require("jcookie");
    var ko = require('knockout');

    //Uncomment the following line to enable mock
    //require("test/mock");

    ko.extenders.required = function (target, overrideMessage) {
        //add some sub-observables to our observable
        target.hasError = target.hasError || ko.observable();
        target.validationMessage = target.validationMessage || ko.observable();

        //define a function to do validation
        function validate(newValue) {
            target.hasError(newValue ? false : true);
            target.validationMessage(newValue ? "" : overrideMessage || "This field is required");
        }

        //validate whenever the value changes
        target.subscribe(validate);

        //return the original observable
        return target;
    };

    //
    //Usage: var confirm = ko.observable().extend({equalsto: {ref:"password", validationMessage:"Confirm is different with password"}});
    //
    ko.extenders.match = function (target, option) {
        //add some sub-observables to our observable
        target.hasError = ko.observable();
        target.validationMessage = ko.observable();

        //define a function to do validation
        function validate(newValue) {
            var targetVal = target();
            var referedVal = option.ref();
            if (typeof targetVal === "undefined") {//Not intialized
                return;
            }
            result = target() == referedVal;
            target.hasError(result ? false : true);
            target.validationMessage(result ? "" : option.msg || "Not match");
        }

        //validate whenever the value changes
        target.subscribe(validate);
        if (option.ref) {
            option.ref.subscribe(validate);
        }

        //return the original observable
        return target;
    };

    ko.extenders.digitOnly = function (target, precision) {
        function validate(newValue) {
            if (newValue == null) {
                newValue = 0;
            } else {
                newValue = newValue.replace(/[^0-9\.]/g, '');
                if (newValue === "") {
                    newValue = 0;
                }
            }

            //TODO disable update event
            target(parseFloat(newValue).toFixed(precision));
        }

        //validate whenever the value changes
        target.subscribe(validate);

        //return the original observable
        return target;
    };

    var util = util || {};
    var loadCss = util.loadCss = function (css) {
        var style = document.createElement("style");
        style.type = "text/css";
        style.innerHTML = css;
        document.getElementsByTagName("head")[0].appendChild(style);
    };

    var loadTmpl = util.loadTmpl = function (id, tmpl) {
        var script = document.createElement("script");
        script.id = id;
        script.type = "text/html";
        script.innerText = tmpl;
        document.getElementsByTagName("head")[0].appendChild(script);
    };

    var contains = util.contains = function (arr, itm) {
        for (var k in arr) {
            if (itm == arr[k]) {
                return true;
            }
        }
        return false;
    }

    //this is used to get the query value from the browser uri
    var getQuery = util.getQuery = function (name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]").replace(/[\$]/, "\\$");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.href);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    };

    var getHash = util.getHash = function () {
        var hash = location.hash.replace("#", "");
        var index = hash.indexOf('?');
        return index >= 0 ? hash.substr(0, index) : hash;
    };

    var _unauthorizedHandler;

    var setUnauthorizedHandler = util.setUnauthorizedHandler = function (handler) {
        _unauthorizedHandler = handler;
    };

    var checkAccess = util.checkAccess = function () {
        var returnUri = encodeURI(window.location.pathname + window.location.hash);
        $.cookie("returnuri", returnUri);

        util.setUnauthorizedHandler(function () {
            //TODO we should adgd the parameters too.
            window.location.href = "/common/login/login.html";
        });

        var token = $.cookie("token");
        console.dir(token);
        //if (!token) {
        //    _unauthorizedHandler && _unauthorizedHandler("请重新登录");
        //}
    };

    var ajax = util.ajax = function (option) {
        var headers = {};
        // we should not require every api to have the token.
        var token = $.cookie("token");
        var userId = $.cookie("userId");
        if (!token) {
            if (!option.skipauth) {
                _unauthorizedHandler && _unauthorizedHandler("请重新登录");
            }
        } else {
            headers = {
                "AuthorizationType": "Token",
                "Token": token,
                "UserId": userId,
                "Prefer": "return=representation"
            };
        }

        $.extend(headers, option.headers);

        return $.ajax({
            url: option.url,
            type: option.type,
            headers: headers,
            data: option.data,
            dataType: "json",
            contentType: "application/json",
            success: function (data) {
                option.success && option.success(data);
            },
            error: function (e) {
                if (e.status === 401) {
                    $.removeCookie("token");
                    _unauthorizedHandler && _unauthorizedHandler("请重新登录");
                }
                option.error && option.error(e)
            }
        });
    };

    var countdown = util.countdown = function (count, progress, complete) {
        if (count == 0) {
            complete();
        } else {
            progress(count);
            setTimeout(function () {
                countdown(count - 1, progress, complete)
            }, 1000);
        }
    }

    var toPrice = util.toPrice = function (price) {
        return (parseFloat(price) / 100).toFixed(2)
    };

    var reversePrice = util.reversePrice = function (price) {
        return (parseFloat(price) * 100);
    };

    util.PostImage = function (file, bucketName, successFunc, failFunc) {
        var data = new FormData();
        data.append('file', file);
        data.append('imageName', file.name);
        data.append('bucketName', bucketName);
        var request = new XMLHttpRequest();
        request.open('POST', util.imageEndpoint + '/api/ImageDatas');
        request.onload = function (e) {
            resp = JSON.parse(request.response);
            if (resp.code == 200) {
                successFunc();
            } else {
                failFunc();
            }
        };
        try {
            request.send(data);
        } catch (e) {
            self.imageError("could not upload image");
        }
    };
    //util.productEndpoint = "http://localhost:64130/";
    //util.imageEndpoint = "http://localhost:64130";
    util.productEndpoint = "http://stardustproductazureservice.chinacloudapp.cn/";
    util.imageEndpoint = "http://stardustproductazureservice.chinacloudapp.cn";

    return util;
});