using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GithubGraberLib.Domain
{
    public class Budget
    {
        public GithubAccount Account { get; set; }
        public int Left { get; set; }
    }
}
