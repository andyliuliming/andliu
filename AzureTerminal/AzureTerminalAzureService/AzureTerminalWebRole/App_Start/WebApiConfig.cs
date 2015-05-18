using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Microsoft.Owin.Security.OAuth;
using Newtonsoft.Json.Serialization;
using System.Web.Http.OData;
using System.Web.Http.OData.Builder;
using System.Web.Http.OData.Extensions;
using System.Web.Http.OData.Routing;
using System.Web.Http.OData.Routing.Conventions;

namespace OTerm2Role
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            // Configure Web API to use only bearer token authentication.
            config.SuppressDefaultHostAuthentication();
            config.Filters.Add(new HostAuthenticationFilter("Bearer"));

            // Web API routes
            config.MapHttpAttributeRoutes();

            ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
            //builder.EntitySet<AlipayNotify>("AlipayNotifies");
            //builder.EntitySet<TaagiImage>("TaagiImages");
            //builder.EntitySet<TaskMomentImage>("TaskMomentImages");
            //builder.EntitySet<Token>("Tokens");
            //builder.EntitySet<Company>("Companies");
            //builder.EntitySet<UserObserving>("UserObservings");
            //builder.EntitySet<SystemMessage>("SystemMessages");
            //builder.EntitySet<Command>("Commands");
            //builder.EntitySet<TaskObserving>("TaskObservings");
            //builder.EntitySet<TaskMomentComment>("TaskMomentComments");
            //builder.EntitySet<TaskMomentLiking>("TaskMomentLikings");
            //builder.EntitySet<TaskMoment>("TaskMoments");
            //builder.EntitySet<Task>("Tasks");
            //builder.EntitySet<User>("Users");
            //builder.EntitySet<TaskMomentShare>("TaskMomentShares");
            //builder.EntitySet<PerfCounter>("PerfCounters");
           
            config.Routes.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());

            config.AddODataQueryFilter();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
