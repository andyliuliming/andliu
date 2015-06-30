using AzureWebConsole;
using Microsoft.IdentityModel.Protocols;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IdentityModel.Selectors;
using System.IdentityModel.Tokens;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Web;

namespace AzureManagementLib
{
    public class TokenValidationHandler : DelegatingHandler
    {
        //
        // The AAD Instance is the instance of Azure, for example public Azure or Azure China.
        // The Tenant is the name of the tenant in which this application is registered.
        // The Authority is the sign-in URL of the tenant.
        // The Audience is the value the service expects to see in tokens that are addressed to it.
        //
        List<string> skipCheck;
        public TokenValidationHandler(List<string> skipCheck)
        {
            this.skipCheck = skipCheck;
        }

        //
        // SendAsync checks that incoming requests have a valid access token, and sets the current user identity using that access token.
        //
        protected async override Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
        {
            //TODO: skip the sign up action.
            foreach (var skip in skipCheck)
            {
                if (request.RequestUri.LocalPath == skip)
                {
                    return await base.SendAsync(request, cancellationToken); 
                }
            }
            TokenValidator validator = new TokenValidator();
            string authHeader = HttpContext.Current.Request.Headers["Authorization"];
            TokenValidationResult code = await validator.Validate(authHeader);
            if (code.StatusCode == HttpStatusCode.OK)
            {
                return await base.SendAsync(request, cancellationToken);
            }
            else
            {
                return validator.BuildResponseErrorMessage(code.StatusCode);
            }
        }
    }
   
}
