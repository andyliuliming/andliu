using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AzureManagementLib
{
    public class Token
    {
        [Key]
        public string id_token { get; set; }
        public string access_token { get; set; }
    }
}
