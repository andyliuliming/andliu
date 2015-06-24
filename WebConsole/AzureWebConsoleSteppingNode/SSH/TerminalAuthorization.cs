using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebConsoleSteppingNode.SSH
{
    public enum AuthorizationType { Password, PrivateKey, AccessToken }
    public class TerminalAuthorization
    {
        public object Identity { get; set; }
        public AuthorizationType AuthorizationType { get; set; }
    }
}