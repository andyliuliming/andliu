using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace AzureTerminalWebConsole.Model
{
    public class AzureSubscription
    {
        [Key]
        public long Id { get; set; }
        public string SubscriptionId { get; set; }
        public string AADTenant { get; set; }
    }
}