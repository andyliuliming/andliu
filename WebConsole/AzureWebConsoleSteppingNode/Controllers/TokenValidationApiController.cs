using AzureManagementLib;
using AzureWebConsoleDomain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace WebConsoleSteppingNode.Controllers
{
    public class TokenValidationApiController : ApiController
    {
        protected AzureWebConsoleModelContainer db = new AzureWebConsoleModelContainer();
        public async Task<TokenValidationResult> ValidateToken(string accessToken)
        {
            TokenValidator validator = new TokenValidator();
            TokenValidationResult code = await validator.Validate("Bearer " + accessToken);
            return code;
        }
    }
}