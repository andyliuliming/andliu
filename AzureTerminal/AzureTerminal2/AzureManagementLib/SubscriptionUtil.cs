using AzureTerminalWebConsole.Model;
using Microsoft.WindowsAzure;
using Microsoft.WindowsAzure.Subscriptions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AzureManagementLib
{
    public class SubscriptionUtil
    {
        public List<Subscription> GetSubscriptions(string accessToken)
        {
            List<Subscription> subscriptionToReturn = new List<Subscription>();
            using (var azure = new SubscriptionClient(new TokenCloudCredentials(accessToken)))
            {
                var subResponse = azure.Subscriptions.List();
                var subscriptions = subResponse.Subscriptions;
                
                foreach (var subscription in subscriptions)
                {
                    Subscription sub = new Subscription();
                    sub.SubscriptionId = subscription.SubscriptionId;
                    subscriptionToReturn.Add(sub);
                }
            }
            return subscriptionToReturn;
        }
    }
}
