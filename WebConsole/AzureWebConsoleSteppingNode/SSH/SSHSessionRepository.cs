using Renci.SshNet;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebConsoleSteppingNode.SSH
{
    public class SSHSessionRepository
    {
        // string is the access token
        private Dictionary<string, SshClient> terminalAuthorizations = null;
        // string is the access token
        //private Dictionary<string, SshClient> sshSessions = null;

        private SSHSessionRepository()
        {
            //sshSessions = new Dictionary<string, SshClient>();
            terminalAuthorizations = new Dictionary<string, SshClient>();
        }

        private static SSHSessionRepository instance = null;
        static object instanceLock = new object();
        public static SSHSessionRepository Instance()
        {
            if (instance == null)
            {
                lock (instanceLock)
                {
                    if (instance == null)
                    {
                        instance = new SSHSessionRepository();
                    }
                }
            }
            return instance;
        }

        public Dictionary<string, SshClient> TerminalAuthorizations { get { return terminalAuthorizations; } }
    }
}