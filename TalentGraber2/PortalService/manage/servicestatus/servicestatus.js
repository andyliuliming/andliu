define(function (require) {
    var $ = require("jquery");
    var jcookie = require("jcookie");
    var ko = require('knockout');
    var util = require("common/shared/util");
    var chart = require("lib/Chart.min");

    var css = require("text!lib/bootstrap/css/bootstrap.min.css");
    util.loadCss(css);

    var serviceStatusModule = {};

    var tmplId = serviceStatusModule.tmplId = "servicestatus-tmpl";

    var tmpl = require("text!manage/servicestatus/servicestatus.html");
    util.loadTmpl(tmplId, tmpl);

    var css = require("text!manage/servicestatus/servicestatus.css");
    util.loadCss(css);

    serviceStatusModule.ServiceStatusViewModel = function () {
        var self = this;
        self.startTime = {};
        self.pingHistory = {};
        self.label = []
        self.locations = {
            "stardust_676K": "Stardust - 676K - East China",
            "stardust_74K": "Stardust - 74K - East China",
            "stardust_69K": "Stardust - 69K - East China",
            "stardust_66K": "Stardust - 66K - East China",
            "stardust_7K": "Stardust - 7K - East China",

            "blob_676K": "blob - 676K - East China",
            "blob_74K": "blob - 74K - East China",
            "blob_69K": "blob - 69K - East China",
            "blob_66K": "blob - 66K - East China",
            "blob_7K": "blob - 7K - East China"
        };

        self.colours = {
            "stardust_676K": "#FF6600",
            "stardust_74K": "#FFCC00",
            "stardust_69K": "#CC7700",
            "stardust_66K": "#77FF00",
            "stardust_7K": "#00FF66",
            "blob_676K": "#FF6677",
            "blob_74K": "#FFCCDD",
            "blob_69K": "#CCCC00",
            "blob_66K": "#EEFF00",
            "blob_7K": "#22FF66"
        };
        self.i = 0;
        self.allUrls = {
            "stardust_676K":
                "http://stardustproductazureservice.chinacloudapp.cn/api/ImageDatas?blobName=676K.bmp&bucketName=azureimagebucket",
            "stardust_74K":
                "http://stardustproductazureservice.chinacloudapp.cn/api/ImageDatas?blobName=74K.jpg&bucketName=azureimagebucket",
            "stardust_69K":
                "http://stardustproductazureservice.chinacloudapp.cn/api/ImageDatas?blobName=69K.jpg&bucketName=azureimagebucket",
            "stardust_66K":
                "http://stardustproductazureservice.chinacloudapp.cn/api/ImageDatas?blobName=66K.jpg&bucketName=azureimagebucket",
            "stardust_7K":
               "http://stardustproductazureservice.chinacloudapp.cn/api/ImageDatas?blobName=7K.png&bucketName=azureimagebucket",

            "blob_676K":
                "http://stardustimages.blob.core.chinacloudapi.cn/testcontainer/676K.bmp",
            "blob_74K":
                "http://stardustimages.blob.core.chinacloudapi.cn/testcontainer/74K.jpg",
            "blob_69K":
                "http://stardustimages.blob.core.chinacloudapi.cn/testcontainer/69K.jpg",
            "blob_66K":
                "http://stardustimages.blob.core.chinacloudapi.cn/testcontainer/66K.jpg",
            "blob_7K":
               "http://stardustimages.blob.core.chinacloudapi.cn/testcontainer/7K.png",
        };
    };


    serviceStatusModule.ServiceStatusViewModel.prototype.refresh = function () {
        var self = this;
        setInterval(self.run, 5000,self);
    };

    serviceStatusModule.ServiceStatusViewModel.prototype.run = function (self) {
        //var self = this;
        if (self.ctx == undefined) {
            var chartElement = document.getElementById("myChart");
            if (chartElement != undefined) {
                self.ctx = chartElement.getContext("2d");
            }
        } else {
            if (self.i > 2) {
                $("#wait").fadeOut("slow", function () {
                    $(".results").fadeIn("slow");
                });
                self.drawChart(self);
                self.drawTables(self);
            }
            self.label.push(self.i.toString());
            while (self.label.length > 20) {
                self.label.shift();
            }
            self.i += 1;

            for (var x in self.locations) {
                if (!self.startTime[x]) {
                    self.startTime[x] = new Date().getTime();
                    var fnClosure = self.downloadPicture;
                    fnClosure(self, x);
                }
            }
        }
    };

    serviceStatusModule.ServiceStatusViewModel.prototype.downloadPicture = function (self, x) {
        console.log("tag:" + x);
        $.ajax({
            url: self.allUrls[x],
            cache: false,
            processData: false,
            success: function () {
                console.log(x);
                if (!self.pingHistory[x]) {
                    self.pingHistory[x] = [];
                }
                self.pingHistory[x].push((new Date().getTime() - self.startTime[x]));
                self.startTime[x] = undefined;
                while (self.pingHistory[x].length > 20) {
                    self.pingHistory[x].shift();
                }
            }
        });
    };

    serviceStatusModule.ServiceStatusViewModel.prototype.drawChart = function (self) {

        var data = {
            labels: self.label,
            datasets: []
        }

        for (var x in self.pingHistory) {
            console.log(x);
            console.log(self.pingHistory[x]);
            data.datasets.push({
                fillColor: "rgba(255,255,255,0)",
                strokeColor: self.colours[x],
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: self.colours[x],
                data: self.pingHistory[x]
            });
        }
        self.ctx.canvas.width = 970;
        self.ctx.canvas.height = 400;
        //console.log(data);
        new Chart(self.ctx).Line(data, { animation: false, responsive: true, maintainAspectRatio: false });
    };

    serviceStatusModule.ServiceStatusViewModel.prototype.drawTables = function (self) {
        var avg = [];
        for (var x in self.pingHistory) {
            var total = 0;
            self.pingHistory[x].forEach(function (y) { total += y });
            avg.push(
                {
                    dc: self.locations[x], colour: self.colours[x],
                    avg: total / self.pingHistory[x].length
                });
        }
        //console.log(avg);
        var html = "";
        avg.sort(function (a, b) { return a.avg - b.avg });

        avg.forEach(function (x) {
            html += "<tr><td style='border-left: 5px " + x.colour + " solid;'>" + x.dc + "</td><td>" + Math.round(x.avg) + "ms</td></tr>"
        });
        $("#table").html("<table width='970' class='table table-bordered'><tr><th>Data Center</th><th>Average Latency</th></tr>" + html + "</table>");

        var cdnCloser = (avg[0].dc === self.locations.cdn);
        avg = avg.filter(function (x) { return x.dc !== self.locations.cdn });
    };

    serviceStatusModule.ServiceStatusViewModel.prototype.cancel = function () {

    };

    return serviceStatusModule;
});