using AzureManagementLib;
using AzureWebConsoleDomain;
using Microsoft.Azure.ActiveDirectory.GraphClient;
using Microsoft.IdentityModel.Clients.ActiveDirectory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Test
{
    public class GraphTest
    {

        public void CreateUser()
        {
            AzureGraphUtil util = new AzureGraphUtil();
            AzureWebConsoleUser user = new AzureWebConsoleUser();
            user.UserName = "aa";
            user.Password = "User@123";
            util.CreateUser(user);
        }
    }
}
