using AzureManagementLib;
using AzureWebConsole.App_Start;
using Microsoft.IdentityModel.Protocols;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Globalization;
using System.IdentityModel.Selectors;
using System.IdentityModel.Tokens;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Routing;

namespace AzureWebConsole
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            AppConfig.ConfigApp();
            List<string> skips = new List<string>();
            skips.Add("/odata/AzureWebConsoleUsers");
            TokenValidationHandler skipCheck = new TokenValidationHandler(skips);
            GlobalConfiguration.Configuration.MessageHandlers.Add(skipCheck);
        }

    }
}
