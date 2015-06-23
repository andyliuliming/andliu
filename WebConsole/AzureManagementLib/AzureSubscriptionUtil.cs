using AzureWebConsoleDomain;
using Microsoft.WindowsAzure;
using Microsoft.WindowsAzure.Subscriptions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AzureManagementLib
{
    public class AzureSubscriptionUtil
    {
        public List<AzureSubscription> GetSubscriptions(string accessToken)
        {
            List<AzureSubscription> subscriptionToReturn = new List<AzureSubscription>();
            using (var azure = new SubscriptionClient(new TokenCloudCredentials(accessToken)))
            {
                var subResponse = azure.Subscriptions.List();
                var subscriptions = subResponse.Subscriptions;

                foreach (var subscription in subscriptions)
                {
                    AzureSubscription sub = new AzureSubscription();
                    sub.SubscriptionId = subscription.SubscriptionId;
                    sub.AADTenant = subscription.ActiveDirectoryTenantId;
                    subscriptionToReturn.Add(sub);
                }
            }
            return subscriptionToReturn;
        }
    }
}
