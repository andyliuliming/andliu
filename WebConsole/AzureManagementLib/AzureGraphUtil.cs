using AzureWebConsole;
using AzureWebConsoleDomain;
using Microsoft.Azure.ActiveDirectory.GraphClient;
using Microsoft.IdentityModel.Clients.ActiveDirectory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AzureManagementLib
{
    public class AzureGraphUtil
    {
       // const string authString = "https://login.windows.net/azurewebconsole.onmicrosoft.com";

        // These are the credentials the application will present during authentication
        // and were retrieved from the Azure Management Portal.
        // *** Don't even try to use these - they have been deleted.
      //  const string clientID = "e5740bbf-07d0-4e4c-b174-94ff7d6adbcd";
        //const string clientSecret = "G3mnk95Y29vRcOPeKc36nuarYrNj5JdWbF2HXqzatbw=";

        // The Azure AD Graph API is the "resource" we're going to request access to.
       // const string resAzureGraphAPI = "https://graph.windows.net";

        // The Azure AD Graph API for my directory is available at this URL.
        //const string serviceRootURL = "https://graph.windows.net/azurewebconsole.onmicrosoft.com";

        public string GetAppTokenAsync()
        {
            // Instantiate an AuthenticationContext for my directory (see authString above).

            // This is the URL the application will authenticate at.
            string authString = AppSettingsProvider.GetSetting("AuthString");
            AuthenticationContext authenticationContext = new AuthenticationContext(authString, false);

            string clientID = AppSettingsProvider.GetSetting("ClientID"); 
            // Create a ClientCredential that will be used for authentication.
            // This is where the Client ID and Key/Secret from the Azure Management Portal is used.
            string clientSecret = AppSettingsProvider.GetSetting("ClientSecret");
            ClientCredential clientCred = new ClientCredential(clientID, clientSecret);

            string resAzureGraphAPI = AppSettingsProvider.GetSetting("AzureGraphAPI");
            // Acquire an access token from Azure AD to access the Azure AD Graph (the resource)
            // using the Client ID and Key/Secret as credentials.
            AuthenticationResult authenticationResult = authenticationContext.AcquireToken(resAzureGraphAPI, clientCred);

            Console.WriteLine(authenticationResult);
            return authenticationResult.AccessToken;
        }

        public void CreateUser(AzureWebConsoleUser azureWebConsoleUser)
        {
            string serviceRootURL = AppSettingsProvider.GetSetting("ServiceRootAPI");
            Uri serviceRoot = new Uri(serviceRootURL);
            ActiveDirectoryClient adClient = new ActiveDirectoryClient(
                serviceRoot,
                async () =>   GetAppTokenAsync());

            var newUser = new User()
            {
                // Required settings
                DisplayName = azureWebConsoleUser.UserName,
                UserPrincipalName = azureWebConsoleUser.UserName + "@azurewebconsole.onmicrosoft.com",
                PasswordProfile = new PasswordProfile()
                {
                    Password = azureWebConsoleUser.Password,
                    ForceChangePasswordNextLogin = false
                },
                MailNickname = azureWebConsoleUser.UserName,
                AccountEnabled = true,

                // Some (not all) optional settings
            };

            // Add the user to the directory
            adClient.Users.AddUserAsync(newUser).Wait();
        }
    }
}
