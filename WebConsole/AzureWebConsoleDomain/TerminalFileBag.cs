using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AzureWebConsoleDomain
{
    public class TerminalFileBag
    {
        public string CurrentDirectory { get; set; }
        public List<TerminalFile> TerminalFiles { get; set; }
    }
}
