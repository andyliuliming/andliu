﻿using ExtractBase.RestApi;
using GithubGraberLib.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
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

        // pagenation is ?page=2&per_page=100
        /// <summary>
        /// the url is like this: https://github.com/andyliuliming/WALinuxAgent.git
        /// </summary>
        /// <param name="url"></param>
        /// <returns></returns>
        public List<User> Extract(string url, Budget budget)
        {
            GithubFeed githubFee = this.Parse(url);

            HashSet<string> user_logins = new HashSet<string>();
            List<User> users = new List<User>();
            // 1. first get the branches https://api.github.com/repos/torvalds/linux

            // 2. get the commits from the branches. https://api.github.com/repos/torvalds/linux/commits?page=3&per_page=100
            RestApiCaller<List<CommitDetail>> commitInfoCaller = new RestApiCaller<List<CommitDetail>>(ApiFormats.BaseUri);

            string repoBaseUri = string.Format(ApiFormats.CommitRelativePathPattern, githubFee.owner, githubFee.repo);
            string accessToken = AuthorizeUtil.GetToken(budget.Account.UserName, budget.Account.Password);

            long per_page = 100;
            long page_index = 0;
            while (true)
            {
                string urlParameters = repoBaseUri + "?page=" + page_index + "&per_page=" + per_page;
                List<CommitDetail> pagedDetails = commitInfoCaller.CallApi("get", accessToken, urlParameters, null);
                if (pagedDetails == null || pagedDetails.Count == 0)
                {
                    break;
                }
                else
                {
                    for(int i = 0; i < pagedDetails.Count; i++)
                    {
                        if (pagedDetails[i].author != null)
                        {
                            user_logins.Add(pagedDetails[i].author.login);
                        }
                    }
                    page_index++;
                    break;
                }
            }

            RestApiCaller<User> userInfoCaller = new RestApiCaller<User>(ApiFormats.BaseUri);
            // 3. extract the commit info ("login") 
            var userLoginEnu = user_logins.GetEnumerator();
            do
            {
                string urlParameters = string.Format(ApiFormats.UserApi, userLoginEnu.Current);
                User user = userInfoCaller.CallApi("get", accessToken, urlParameters, null);
                users.Add(user);
                break;
            } while (userLoginEnu.MoveNext());
            // 4. extract the User

            return users;
        }
    }
}
