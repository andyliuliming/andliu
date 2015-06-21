using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AzureWebConsoleDomain
{
    public class SteppingNode
    {
        [Key]
        public long Id { get; set; }
        public string Address { get; set; }
    }
}
