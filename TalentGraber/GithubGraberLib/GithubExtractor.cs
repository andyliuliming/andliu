using ExtractBase.RestApi;
using GithubGraberLib.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GithubGraberLib
{
    public class GithubExtractor
    {
        // pagenation is ?page=2&per_page=100
        /// <summary>
        /// the url is like this: https://github.com/andyliuliming/WALinuxAgent.git
        /// </summary>
        /// <param name="url"></param>
        /// <returns></returns>
        public List<User> Extract(string url,string userName,string passWord)
        {
            List<User> users = new List<User>();
            // 1. first get the branches https://api.github.com/repos/torvalds/linux

            // 2. get the commits from the branches. https://api.github.com/repos/torvalds/linux/commits?page=3&per_page=100
            RestApiCaller<List<CommitDetail>> commitInfoCaller = new RestApiCaller<List<CommitDetail>>(ApiFormats.BaseUri);
            string accessToken = AuthorizeUtil.GetToken(userName, passWord);

            long per_page = 100;
            long page_index = 0;
            while (true)
            {
                string urlParameters = "page=" + page_index + "&per_page=" + per_page;
                List<CommitDetail> pagedDetails = commitInfoCaller.CallApi("get", accessToken, urlParameters, null);
                if (pagedDetails == null || pagedDetails.Count == 0)
                {
                    break;
                }
                else
                {
                    page_index++;
                }
            }
            // 3. extract the commit info ("login") 


            // 4. extract the User

            return users;
        }
    }
}
