using AzureManagementLib;
using Microsoft.Web.WebSockets;
using Renci.SshNet;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using WebConsoleSteppingNode.Controllers;
using WebConsoleSteppingNode.SSH;

namespace AzureTerminalWebConsole.Controllers
{
    public class PasswordTerminalSessionController : TokenValidationApiController
    {
        public async Task<HttpResponseMessage> Get(String hostName, String userName, String passWord, String port, String columns, String rows, String accessToken)
        {
            if (HttpContext.Current.IsWebSocketRequest)
            {
                TokenValidationResult result = await this.ValidateToken(accessToken);

                TerminalAuthorization authorization = new TerminalAuthorization();
                authorization.AuthorizationType = AuthorizationType.Password;
                authorization.Identity = passWord;
                authorization.HostName = hostName;
                authorization.UserName = userName;
                authorization.Port = int.Parse(port);

                SSHSessionRepository.Instance().TerminalAuthorizations[result.ClaimsPrincipal.Identity.Name] = authorization;

                PasswordSSHSocketHandler handler = new PasswordSSHSocketHandler(hostName, userName, passWord, port, columns, rows, accessToken);
                handler.Connect();
                HttpContext.Current.AcceptWebSocketRequest(handler);
            }

            return new HttpResponseMessage(HttpStatusCode.SwitchingProtocols);
        }
    }
}