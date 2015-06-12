using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace AzureTerminalWebConsole.Model
{
    public class Token
    {
        [Key]
        public string id_token { get; set; }
        public string access_token { get; set; }
    }
}