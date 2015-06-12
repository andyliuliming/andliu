using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace AzureTerminalWebConsole.Model
{
    public class TerminalAction
    {
        [Key]
        public long Id { get; set; }
        public string Name { get; set; }
        public string Result { get; set; }
    }
}