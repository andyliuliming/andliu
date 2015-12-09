using System;
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

        public bool SingleEqualRequired(ODataQueryOptions queryOptions, string propertyName)
        {
            // check we must use the shop id to filter.
            if (queryOptions != null && queryOptions.Filter != null)
            {
                BinaryOperatorNode binaryOperator = queryOptions.Filter.FilterClause.Expression as BinaryOperatorNode;
                if (binaryOperator != null)
                {
                    SingleValuePropertyAccessNode property = binaryOperator.Left as SingleValuePropertyAccessNode;
                    if (property != null && binaryOperator.OperatorKind == BinaryOperatorKind.Equal
                        && property.Property.Name == propertyName)
                    {
                        return true;
                    }
                }
            }
            return false;
        }

        // GET: odata/TerminalFiles
        public async Task<IHttpActionResult> GetTerminalFiles(ODataQueryOptions<TerminalFile> queryOptions)
        {
            IEnumerable<string> accessTokens = this.ActionContext.Request.Headers.GetValues("Authorization");
            string accessToken = accessTokens.FirstOrDefault();
            if (accessToken != null)
            {
                if (this.SingleEqualRequired((ODataQueryOptions)queryOptions, "ParentPath"))
                {
                    string parentPath = "";
                    BinaryOperatorNode binaryOperator = queryOptions.Filter.FilterClause.Expression as BinaryOperatorNode;

                    ConstantNode valueNode = binaryOperator.Right as ConstantNode;
                    parentPath = (string)valueNode.Value;
                    // list the files

                    TokenValidator validator = new TokenValidator();
                    TokenValidationResult code = await validator.Validate(accessToken);

                    SshClient authorization = SSHSessionRepository.Instance().TerminalAuthorizations[code.ClaimsPrincipal.Identity.Name];

                    SftpClient sftpClient = new SftpClient(authorization.ConnectionInfo);
                    sftpClient.Connect();
                    parentPath = sftpClient.Get(parentPath).FullName;
                    IEnumerable<SftpFile> files = sftpClient.ListDirectory(parentPath);

                    List<TerminalFile> terminalFiles = new List<TerminalFile>();
                    foreach (SftpFile file in files)
                    {
                        TerminalFile tf = new TerminalFile();
                        tf.Path = file.FullName;
                        tf.IsDirectory = file.IsDirectory;
                        terminalFiles.Add(tf);
                    }
                    sftpClient.Disconnect();
                    TerminalFileBag terminalFileBag = new TerminalFileBag();
                    terminalFileBag.TerminalFiles = terminalFiles;
                    terminalFileBag.CurrentDirectory = parentPath;
                    return Json<TerminalFileBag>(terminalFileBag);
                }
                else
                {
                    return BadRequest();
                }
            }
            return Unauthorized();
        }
    }
}
