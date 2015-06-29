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
using System.Threading.Tasks;
using System.Web;
using Tamir.SharpSsh.java.lang;

namespace AzureManagementLib
{
    public class TokenValidator
    {
        public HttpResponseMessage BuildResponseErrorMessage(HttpStatusCode statusCode)
        {

            string aadInstance = AppSettingsProvider.GetSetting("idaAADInstance");
            string tenant = AppSettingsProvider.GetSetting("idaTenant");
            string audience = AppSettingsProvider.GetSetting("idaAudience");
            string authority = String.Format(CultureInfo.InvariantCulture, aadInstance, tenant);

            HttpResponseMessage response = new HttpResponseMessage(statusCode);

            //
            // The Scheme should be "Bearer", authorization_uri should point to the tenant url and resource_id should point to the audience.
            //
            AuthenticationHeaderValue authenticateHeader = new AuthenticationHeaderValue("Bearer", "authorization_uri=\"" + authority + "\"" + "," + "resource_id=" + audience);

            response.Headers.WwwAuthenticate.Add(authenticateHeader);

            return response;
        }
        public HttpStatusCode Validate(HttpRequestMessage request)
        {
            string aadInstance = AppSettingsProvider.GetSetting("idaAADInstance");
            string tenant = AppSettingsProvider.GetSetting("idaTenant");
            string audience = AppSettingsProvider.GetSetting("idaAudience");
            string authority = String.Format(CultureInfo.InvariantCulture, aadInstance, tenant);

            string _issuer = string.Empty;
            List<SecurityToken> _signingTokens = null;
            DateTime _stsMetadataRetrievalTime = DateTime.MinValue;
            string scopeClaimType = "http://schemas.microsoft.com/identity/claims/scope";


             string authHeader = null;
            string jwtToken = null;
            string issuer;
            string stsDiscoveryEndpoint = string.Format("{0}/.well-known/openid-configuration", authority);

            List<SecurityToken> signingTokens;

            // The header is of the form "bearer <accesstoken>", so extract to the right of the whitespace to find the access token.
            authHeader = HttpContext.Current.Request.Headers["Authorization"];
            if (authHeader != null)
            {
                int startIndex = authHeader.LastIndexOf(' ');
                if (startIndex > 0)
                {
                    jwtToken = authHeader.Substring(startIndex).Trim();
                }
            }

            if (jwtToken == null)
            {
                return (HttpStatusCode.Unauthorized);
            }

            try
            {
                // The issuer and signingTokens are cached for 24 hours. They are updated if any of the conditions in the if condition is true.            
                if (DateTime.UtcNow.Subtract(_stsMetadataRetrievalTime).TotalHours > 24
                    || string.IsNullOrEmpty(_issuer)
                    || _signingTokens == null)
                {
                    // Get tenant information that's used to validate incoming jwt tokens
                    ConfigurationManager<OpenIdConnectConfiguration> configManager = new ConfigurationManager<OpenIdConnectConfiguration>(stsDiscoveryEndpoint);
                    Task<OpenIdConnectConfiguration> connectionConfiguration = configManager.GetConfigurationAsync();//.Wait();
                    connectionConfiguration.Wait();
                    OpenIdConnectConfiguration config = connectionConfiguration.Result;
                    _issuer = config.Issuer;
                    _signingTokens = config.SigningTokens.ToList();

                    _stsMetadataRetrievalTime = DateTime.UtcNow;
                }

                issuer = _issuer;
                signingTokens = _signingTokens;
            }
            catch (Exception)
            {
                return (HttpStatusCode.InternalServerError);
            }

            JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();

            TokenValidationParameters validationParameters = new TokenValidationParameters
            {
                ValidAudience = audience,
                ValidIssuer = issuer,
                IssuerSigningTokens = signingTokens,
                CertificateValidator = X509CertificateValidator.None
            };

            try
            {
                // Validate token.
                SecurityToken validatedToken = new JwtSecurityToken();
                ClaimsPrincipal claimsPrincipal = tokenHandler.ValidateToken(jwtToken, validationParameters, out validatedToken);

                // Set the ClaimsPrincipal on the current thread.
                System.Threading.Thread.CurrentPrincipal = claimsPrincipal;

                // Set the ClaimsPrincipal on HttpContext.Current if the app is running in web hosted environment.
                if (HttpContext.Current != null)
                {
                    HttpContext.Current.User = claimsPrincipal;
                }

                // If the token is scoped, verify that required permission is set in the scope claim.
                if (ClaimsPrincipal.Current.FindFirst(scopeClaimType) != null && ClaimsPrincipal.Current.FindFirst(scopeClaimType).Value != "user_impersonation")
                {
                   return HttpStatusCode.Forbidden;
                }

                return HttpStatusCode.OK;
            }
            catch (SecurityTokenValidationException e)
            {
                return HttpStatusCode.Unauthorized;
                //HttpResponseMessage response = BuildResponseErrorMessage(HttpStatusCode.Unauthorized);
                //return response;
            }
            catch (Exception)
            {
                return (HttpStatusCode.InternalServerError);
            }
        }
    }
}
