using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AzureManagementLib
{
    public class AzureVirtualMachine
    {
        [Key]
        public long Id { get; set; }
        public string HostServiceName { get; set; }
        public string Url { get; set; }
        public int? Port { get; set; }
        public string OS { get; set; }
    }
}
