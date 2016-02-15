using GithubGraberLib;
using GithubGraberLib.Domain;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TalentGraber
{
    class Program
    {
        static void Main(string[] args)
        {
            List<GithubAccount> githubAccounts = GithubAccountsLoader.Load();

            string githubAddress = args[0];
            string userName = args[1];
            string passWord = args[2];
            GithubExtractor githubExtractor = new GithubExtractor();
            List<User> users = githubExtractor.Extract(githubAddress, userName, passWord);
            string exportFile = githubAddress + ".csv";
            exportFile = exportFile.Replace("/", "_");
            exportFile = exportFile.Replace(":", "_");
            using (StreamWriter streamWriter = new StreamWriter(exportFile, false, Encoding.Default))
            {
                foreach (User user in users)
                {
                    StringBuilder sb = new StringBuilder();
                    sb.Append(user.name).Append(","); //没一个字段后面都加逗号，表示是一列，因为这是第一行    因此也是列标题
                    sb.Append(user.followers).Append(",");
                    sb.Append(user.email).Append(",");
                    sb.Append(user.company).Append(",");
                    sb.Append(user.location).Append(",");
                    streamWriter.WriteLine(sb.ToString());
                }
            }
        }
    }
}
