using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.WindowsAzure.ServiceRuntime;
using Macrodeek.Model;
using GithubGraberLib;
using GithubGraberLib.Domain;
using ExtractBase.RestApi;

namespace WorkerRole
{
    public class WorkerRole : RoleEntryPoint
    {
        private readonly CancellationTokenSource cancellationTokenSource = new CancellationTokenSource();
        private readonly ManualResetEvent runCompleteEvent = new ManualResetEvent(false);

        private GoldModelContainer db = new GoldModelContainer();

        public override void Run()
        {
            Trace.TraceInformation("WorkerRole is running");
            try
            {
                this.RunAsync(this.cancellationTokenSource.Token).Wait();
            }
            finally
            {
                this.runCompleteEvent.Set();
            }
        }

        public override bool OnStart()
        {
            // Set the maximum number of concurrent connections
            ServicePointManager.DefaultConnectionLimit = 12;

            // For information on handling configuration changes
            // see the MSDN topic at http://go.microsoft.com/fwlink/?LinkId=166357.

            bool result = base.OnStart();

            Trace.TraceInformation("WorkerRole has been started");

            return result;
        }

        public override void OnStop()
        {
            Trace.TraceInformation("WorkerRole is stopping");

            this.cancellationTokenSource.Cancel();
            this.runCompleteEvent.WaitOne();

            base.OnStop();

            Trace.TraceInformation("WorkerRole has stopped");
        }

        private GithubFeed Parse(string url)
        {
            GithubFeed githubFeed = new GithubFeed();
            string[] array = url.Split('/');
            githubFeed.owner = array[3];
            githubFeed.repo = array[4].Split('.')[0];
            return githubFeed;
        }

        private async Task RunAsync(CancellationToken cancellationToken)
        {
            // TODO: Replace the following with your own logic.
            while (!cancellationToken.IsCancellationRequested)
            {
                Trace.TraceInformation("Working");

                List<GithubAccount> githubAccounts = db.GithubAccounts.ToList<GithubAccount>();

                int accountIndex = 0;
                string accessToken = AuthorizeUtil.GetToken(githubAccounts[accountIndex].UserName, githubAccounts[accountIndex].Password);

                GithubExtractor githubExtractor = new GithubExtractor();
                foreach (var githubRepo in db.GithubRepoes.ToList())
                {
                    int startPage = 0;
                    int perPage = 100;

                    GithubFeed githubFee = this.Parse(githubRepo.Url);
                    RestApiCaller<List<CommitDetail>> commitInfoCaller = new RestApiCaller<List<CommitDetail>>(ApiFormats.BaseUri);
                    string repoBaseUri = string.Format(ApiFormats.CommitRelativePathPattern, githubFee.owner, githubFee.repo);

                    while (true)
                    {
                        string urlParameters = repoBaseUri + "?page=" + startPage + "&per_page=" + perPage;
                        try
                        {
                            List<CommitDetail> pagedCommitDetails = commitInfoCaller.CallApi("get", accessToken, urlParameters, null);
                            if (pagedCommitDetails == null || pagedCommitDetails.Count == 0)
                            {
                                break;
                            }
                            else
                            {
                                for (int i = 0; i < pagedCommitDetails.Count; i++)
                                {
                                    if (pagedCommitDetails[i].author != null)
                                    {
                                        string loginString = pagedCommitDetails[i].author.login;
                                        TalentCandidate candidate = db.TalentCandidates.Where(
                                            (tc) => tc.Login == loginString).FirstOrDefault();
                                        if (candidate == null)
                                        {
                                            TalentCandidate newCandidate = new TalentCandidate();
                                            newCandidate.Company = string.Empty;
                                            newCandidate.Email = string.Empty;
                                            newCandidate.Followers = string.Empty;
                                            newCandidate.FollowersUrl = string.Empty;
                                            newCandidate.Location = string.Empty;
                                            newCandidate.Login = pagedCommitDetails[i].author.login;
                                            newCandidate.ReposUrl = string.Empty;
                                            db.TalentCandidates.Add(newCandidate);
                                            db.SaveChanges();
                                        }
                                    }
                                }
                                startPage++;
                            }
                        }
                        catch (HttpException e)
                        {
                            if (e.StatusCode == HttpStatusCode.Forbidden)
                            {
                                accountIndex++;
                                accessToken = AuthorizeUtil.GetToken(githubAccounts[accountIndex].UserName, githubAccounts[accountIndex].Password);
                            }
                            else
                            {
                                throw e;
                            }
                        }
                    }
                }

                RestApiCaller<User> userInfoCaller = new RestApiCaller<User>(ApiFormats.BaseUri);
                while (true)
                {
                    IQueryable<TalentCandidate> talentCandidates = db.TalentCandidates.Skip<TalentCandidate>(10).Take<TalentCandidate>(10);
                    if (talentCandidates != null && talentCandidates.Count<TalentCandidate>() > 0)
                    {
                        foreach (TalentCandidate tc in talentCandidates)
                        {
                            string urlParameters = string.Format(ApiFormats.UserApi, tc.Login);
                            User user = userInfoCaller.CallApi("get", accessToken, urlParameters, null);
                            tc.Company = user.company;
                            tc.Email = user.email;
                            tc.Followers = user.followers;
                            tc.FollowersUrl = user.followers_url;
                            tc.Location = user.location;
                            tc.ReposUrl = user.repos_url;
                            //TODO set the values in the user 
                        }
                    }
                    else
                    {
                        break;
                    }
                }
                await Task.Delay(1000 * 60 * 60 * 5);
            }
        }
    }
}
