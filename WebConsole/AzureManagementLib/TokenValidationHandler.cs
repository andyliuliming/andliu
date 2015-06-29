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
       
        //
        // SendAsync checks that incoming requests have a valid access token, and sets the current user identity using that access token.
        //
        protected async override Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
        {
            //TODO: skip the sign up action.

            TokenValidator validator = new TokenValidator();
            HttpStatusCode code = validator.Validate(request);
            if (code == HttpStatusCode.OK)
            {
                return await base.SendAsync(request, cancellationToken);
            }
            else
            {
                return validator.BuildResponseErrorMessage(code);
            }
            //string authHeader = null;
            //string jwtToken = null;
            //string issuer;
            //string stsDiscoveryEndpoint = string.Format("{0}/.well-known/openid-configuration", authority);

            //List<SecurityToken> signingTokens;

            //// The header is of the form "bearer <accesstoken>", so extract to the right of the whitespace to find the access token.
            //authHeader = HttpContext.Current.Request.Headers["Authorization"];
            //if (authHeader != null)
            //{
            //    int startIndex = authHeader.LastIndexOf(' ');
            //    if (startIndex > 0)
            //    {
            //        jwtToken = authHeader.Substring(startIndex).Trim();
            //    }
            //}

            //if (jwtToken == null)
            //{
            //    HttpResponseMessage response = BuildResponseErrorMessage(HttpStatusCode.Unauthorized);
            //    return response;
            //}

            //try
            //{
            //    // The issuer and signingTokens are cached for 24 hours. They are updated if any of the conditions in the if condition is true.            
            //    if (DateTime.UtcNow.Subtract(_stsMetadataRetrievalTime).TotalHours > 24
            //        || string.IsNullOrEmpty(_issuer)
            //        || _signingTokens == null)
            //    {
            //        // Get tenant information that's used to validate incoming jwt tokens
            //        ConfigurationManager<OpenIdConnectConfiguration> configManager = new ConfigurationManager<OpenIdConnectConfiguration>(stsDiscoveryEndpoint);
            //        OpenIdConnectConfiguration config = await configManager.GetConfigurationAsync();
            //        _issuer = config.Issuer;
            //        _signingTokens = config.SigningTokens.ToList();

            //        _stsMetadataRetrievalTime = DateTime.UtcNow;
            //    }

            //    issuer = _issuer;
            //    signingTokens = _signingTokens;
            //}
            //catch (Exception)
            //{
            //    return new HttpResponseMessage(HttpStatusCode.InternalServerError);
            //}

            //JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();

            //TokenValidationParameters validationParameters = new TokenValidationParameters
            //{
            //    ValidAudience = audience,
            //    ValidIssuer = issuer,
            //    IssuerSigningTokens = signingTokens,
            //    CertificateValidator = X509CertificateValidator.None
            //};

            //try
            //{
            //    // Validate token.
            //    SecurityToken validatedToken = new JwtSecurityToken();
            //    ClaimsPrincipal claimsPrincipal = tokenHandler.ValidateToken(jwtToken, validationParameters, out validatedToken);

            //    // Set the ClaimsPrincipal on the current thread.
            //    Thread.CurrentPrincipal = claimsPrincipal;

            //    // Set the ClaimsPrincipal on HttpContext.Current if the app is running in web hosted environment.
            //    if (HttpContext.Current != null)
            //    {
            //        HttpContext.Current.User = claimsPrincipal;
            //    }

            //    // If the token is scoped, verify that required permission is set in the scope claim.
            //    if (ClaimsPrincipal.Current.FindFirst(scopeClaimType) != null && ClaimsPrincipal.Current.FindFirst(scopeClaimType).Value != "user_impersonation")
            //    {
            //        HttpResponseMessage response = BuildResponseErrorMessage(HttpStatusCode.Forbidden);
            //        return response;
            //    }

            //    return await base.SendAsync(request, cancellationToken);
            //}
            //catch (SecurityTokenValidationException e)
            //{
            //    HttpResponseMessage response = BuildResponseErrorMessage(HttpStatusCode.Unauthorized);
            //    return response;
            //}
            //catch (Exception)
            //{
            //    return new HttpResponseMessage(HttpStatusCode.InternalServerError);
            //}
        }

        
    }
   
}
