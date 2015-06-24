using Renci.SshNet;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebConsoleSteppingNode.SSH
{
    public class SSHSessionRepository
    {
        Dictionary<string, SshClient> sshSessions = new Dictionary<string, SshClient>();
        public SSHSessionRepository()
        {

        }
    }
}