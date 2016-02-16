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

        public HashSet<string>  ExtractUserLogin(ExtractRequest extractRequest)
        {
            GithubFeed githubFee = this.Parse(extractRequest.URL);
            HashSet<string> user_logins = new HashSet<string>();
            // 1. first get the branches https://api.github.com/repos/torvalds/linux

            // 2. get the commits from the branches. https://api.github.com/repos/torvalds/linux/commits?page=3&per_page=100
            RestApiCaller<List<CommitDetail>> commitInfoCaller = new RestApiCaller<List<CommitDetail>>(ApiFormats.BaseUri);

            string repoBaseUri = string.Format(ApiFormats.CommitRelativePathPattern, githubFee.owner, githubFee.repo);
            string accessToken = AuthorizeUtil.GetToken(extractRequest.Account.UserName, extractRequest.Account.Password);

            while (extractRequest.Left > 0)
            {
                string urlParameters = repoBaseUri + "?page=" + extractRequest.StartPage + "&per_page=" + extractRequest.PerPage;
                List<CommitDetail> pagedDetails = commitInfoCaller.CallApi("get", accessToken, urlParameters, null);
                extractRequest.Left--;
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
            return user_logins;
        }

        // pagenation is ?page=2&per_page=100
        /// <summary>
        /// the url is like this: https://github.com/andyliuliming/WALinuxAgent.git
        /// </summary>
        /// <param name="url"></param>
        /// <returns></returns>
        public List<User> Extract(ExtractRequest extractRequest, List<string> user_logins)
        {
            GithubFeed githubFee = this.Parse(extractRequest.URL);
            List<User> users = new List<User>();
            string accessToken = AuthorizeUtil.GetToken(extractRequest.Account.UserName, extractRequest.Account.Password);

            RestApiCaller<User> userInfoCaller = new RestApiCaller<User>(ApiFormats.BaseUri);
            // 3. extract the commit info ("login") 

            int leftUserLength = user_logins.Count - extractRequest.StartIndex;

            int numberToRetrieve = leftUserLength > extractRequest.Left ? extractRequest.Left : leftUserLength;

            for (int i = 0; i < numberToRetrieve; i++)
            {
                string urlParameters = string.Format(ApiFormats.UserApi, user_logins[extractRequest.StartIndex + i]);
                User user = userInfoCaller.CallApi("get", accessToken, urlParameters, null);
                users.Add(user);
            }

            extractRequest.StartIndex+= numberToRetrieve;

            return users;
        }
    }
}
