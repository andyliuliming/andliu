using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Microsoft.Owin.Security.OAuth;
using Newtonsoft.Json.Serialization;
using System.Web.OData.Builder;
using System.Web.OData.Extensions;
using AzureTerminalWebConsole.Model;
namespace AzureTerminalWebConsole
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
            //builder.EntitySet<Logistic>("Logistics");
            //builder.EntitySet<MicroShop>("MicroShops");
            //builder.EntitySet<VendorSupport>("VendorSupports");
            //builder.EntitySet<MicroShopCertification>("MicroShopCertifications");
            //builder.EntitySet<Order>("Orders");
            //builder.EntitySet<ProductCategory>("ProductCategories");
            //builder.EntitySet<ProductInShop>("ProductInShops");
            //builder.EntitySet<Product>("Products");
            //builder.EntitySet<ProductSku>("ProductSkus");
            //builder.EntitySet<Refund>("Refunds");
            //builder.EntitySet<UserCertification>("UserCertifications");
            //builder.EntitySet<UserPickupAddress>("UserPickupAddresses");
            //builder.EntitySet<UserShow>("UserShows");
            //builder.EntitySet<ProductImage>("ProductImages");
            //builder.EntitySet<SaleRegion>("SaleRegions");
            //builder.EntitySet<ProductSaleRegion>("ProductSaleRegions");
            //builder.EntitySet<VendorBankInfo>("VendorBankInfoes");
            builder.EntitySet<Token>("Tokens");
            builder.EntitySet<Subscription>("Subscriptions");
            //builder.EntitySet<LinuxVM>("LinuxVMs");
            //builder.EntitySet<TerminalAction>("TerminalActions");
            //// Wrap Ups
            //builder.EntitySet<ProductDetail>("ProductDetails");

            config.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());

            config.AddODataQueryFilter();
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
