﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.ModelBinding;
using System.Web.OData;
using System.Web.OData.Query;
using Microsoft.OData.Core;
using AzureWebConsoleDomain;
using Microsoft.OData.Core.UriParser.Semantic;
using Microsoft.OData.Core.UriParser.TreeNodeKinds;
using WebConsoleSteppingNode.SSH;
using Renci.SshNet;
using Renci.SshNet.Sftp;
using System.Threading.Tasks;
using AzureManagementLib;

namespace WebConsoleSteppingNode.Controllers
{
    /*
    The WebApiConfig class may require additional changes to add a route for this controller. Merge these statements into the Register method of the WebApiConfig class as applicable. Note that OData URLs are case sensitive.

    using System.Web.Http.OData.Builder;
    using System.Web.Http.OData.Extensions;
    using AzureWebConsoleDomain;
    ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
    builder.EntitySet<TerminalFile>("TerminalFiles");
    config.Routes.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());
    */
    public class TerminalFilesController : ODataController
    {
        private static ODataValidationSettings _validationSettings = new ODataValidationSettings();

        // GET: odata/TerminalFiles
        public async Task<IHttpActionResult> GetTerminalFiles(ODataQueryOptions<TerminalFile> queryOptions)
        {
            // list the files
            IEnumerable<string> accessTokens = this.ActionContext.Request.Headers.GetValues("Authorization");
            string accessToken = accessTokens.FirstOrDefault();
            if (accessToken != null)
            {
                TokenValidator validator = new TokenValidator();
                TokenValidationResult code = await validator.Validate(accessToken);

                SshClient authorization = SSHSessionRepository.Instance().TerminalAuthorizations[code.ClaimsPrincipal.Identity.Name];

                SftpClient scpClient = new SftpClient(authorization.ConnectionInfo);
                scpClient.Connect();
                IEnumerable<SftpFile> files = scpClient.ListDirectory(".");

                List<TerminalFile> terminalFiles = new List<TerminalFile>();
                foreach (SftpFile file in files)
                {
                    TerminalFile tf = new TerminalFile();
                    tf.Path = file.FullName;
                    tf.IsDirectory = file.IsDirectory;
                    terminalFiles.Add(tf);
                }
                scpClient.Disconnect();

                return Ok<IEnumerable<TerminalFile>>(terminalFiles);
            }
            else
            {
                return Unauthorized();
            }
        }
    }
}
