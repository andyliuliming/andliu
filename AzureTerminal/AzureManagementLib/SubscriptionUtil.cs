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
        public void DoIt(string accessToken)
        {
            using (var azure = new SubscriptionClient(new TokenCloudCredentials(accessToken)))
            {
                var subResponse = azure.Subscriptions.List();
                var subscriptions = subResponse.Subscriptions;
            }
        }
    }
}
