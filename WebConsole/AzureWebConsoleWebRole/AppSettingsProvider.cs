using Microsoft.Azure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AzureTerminalWebConsole
{
    public class AppSettingsProvider
    {
        public static string GetSetting(string Name)
        {
            string connectionString = CloudConfigurationManager.GetSetting(Name);

            return connectionString;
        }
    }
}