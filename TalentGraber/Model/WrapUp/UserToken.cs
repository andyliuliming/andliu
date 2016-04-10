using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Macrodeek.Model.WrapUp
{
    public partial class UserToken
    {
        public long Id { get; set; }
        public string Token { get; set; }
        public string RefreshToken { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
