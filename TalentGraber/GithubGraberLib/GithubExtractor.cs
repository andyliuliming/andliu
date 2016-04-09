using ExtractBase.RestApi;
using GithubGraberLib.Domain;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading;
using System.Threading.Tasks;

namespace GithubGraberLib
{
    public class GithubExtractor
    {
        private GithubFeed Parse(string url)
        {
            GithubFeed githubFeed = new GithubFeed();
            string[] array = url.Split('/');
            githubFeed.owner = array[3];
            githubFeed.repo = array[4].Split('.')[0];
            return githubFeed;
        }

        public void ExtractUserLogin(ExtractRequest extractRequest, HashSet<string> user_logins)
        {
            GithubFeed githubFee = this.Parse(extractRequest.Url);
            RestApiCaller<List<CommitDetail>> commitInfoCaller = new RestApiCaller<List<CommitDetail>>(ApiFormats.BaseUri);

            string repoBaseUri = string.Format(ApiFormats.CommitRelativePathPattern, githubFee.owner, githubFee.repo);
            while (true)
            {
                string urlParameters = repoBaseUri + "?page=" + extractRequest.StartPage + "&per_page=" + extractRequest.PerPage;
                try
                {
                    List<CommitDetail> pagedDetails = commitInfoCaller.CallApi("get", extractRequest.AccessToken, urlParameters, null);
                    if (pagedDetails == null || pagedDetails.Count == 0)
                    {
                        break;
                    }
                    else
                    {
                        for (int i = 0; i < pagedDetails.Count; i++)
                        {
                            if (pagedDetails[i].author != null)
                            {
                                user_logins.Add(pagedDetails[i].author.login);
                            }
                        }
                        extractRequest.StartPage++;
                    }
                }
                catch (HttpException e)
                {
                    if(e.StatusCode==System.Net.HttpStatusCode.Forbidden)
                    {
                        throw e;
                    }
                    else
                    {
                        // retry it.
                        Thread.Sleep(1000);
                        continue;
                    }
                }
            }
        }

        // pagenation is ?page=2&per_page=100
        /// <summary>
        /// the url is like this: https://github.com/andyliuliming/WALinuxAgent.git
        /// </summary>
        /// <param name="url"></param>
        /// <returns></returns>
        public List<User> Extract(ExtractRequest extractRequest, List<string> user_logins)
        {
            GithubFeed githubFee = this.Parse(extractRequest.Url);
            List<User> users = new List<User>();
            RestApiCaller<User> userInfoCaller = new RestApiCaller<User>(ApiFormats.BaseUri);
            // 3. extract the commit info ("login") 

            int leftUserLength = user_logins.Count - extractRequest.StartIndex;

            for (int i = 0; i < user_logins.Count; i++)
            {
                Console.WriteLine("getting the user's info: " + user_logins[extractRequest.StartIndex + i]);
                string urlParameters = string.Format(ApiFormats.UserApi, user_logins[extractRequest.StartIndex + i]);
                User user = userInfoCaller.CallApi("get", extractRequest.AccessToken, urlParameters, null);

                users.Add(user);
            }

            return users;
        }
    }
}
