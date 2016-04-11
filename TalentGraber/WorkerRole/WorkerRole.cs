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
using System;

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

        private string getEmptyOrValue(string value)
        {
            return value == null ? string.Empty : value;
        }

        private void ResetContributersToRepo(GithubRepo repo)
        {
            IQueryable<ContributerToRepo> currentContributersToRepo = db.ContributerToRepoes.Where(ctp => ctp.RepoId == repo.Id);
            foreach (var contributer in currentContributersToRepo)
            {
                using (var transaction = db.Database.BeginTransaction())
                {
                    contributer.CalculatingCommitNumber = 0;
                    db.SaveChanges();
                    transaction.Commit();
                }
            }
        }
        private void SetValueForContributerToRepo(GithubRepo repo)
        {
            IQueryable<ContributerToRepo> currentContributersToRepo = db.ContributerToRepoes.Where(ctp => ctp.RepoId == repo.Id);
            foreach (var contributer in currentContributersToRepo)
            {
                using (var transaction = db.Database.BeginTransaction())
                {
                    contributer.CacheCommitNumber = contributer.CalculatingCommitNumber;
                    db.SaveChanges();
                    transaction.Commit();
                }
            }
        }


        private void ResetTalentCandidateCommits()
        {
            IQueryable<TalentCandidate> talentCandidates = db.TalentCandidates;
            foreach (var contributer in talentCandidates)
            {
                using (var transaction = db.Database.BeginTransaction())
                {
                    contributer.CacheTotalCommits = 0;
                    db.SaveChanges();
                    transaction.Commit();
                }
            }
        }
        private void SetValueForTalentCandidateCommits()
        {
            IQueryable<TalentCandidate> talentCandidates = db.TalentCandidates;
            foreach (var contributer in talentCandidates)
            {
                using (var transaction = db.Database.BeginTransaction())
                {
                    contributer.CacheTotalCommits = contributer.CalculatingTotalCommits;
                    db.SaveChanges();
                    transaction.Commit();
                }
            }
        }
        private async Task RunAsync(CancellationToken cancellationToken)
        {
            // TODO: Replace the following with your own logic.
            while (!cancellationToken.IsCancellationRequested)
            {
                try
                {
                    Trace.TraceInformation("Working");

                    List<GithubAccount> githubAccounts = db.GithubAccounts.ToList<GithubAccount>();
                    GithubExtractor githubExtractor = new GithubExtractor();
                    RestApiCaller<List<CommitDetail>> commitInfoCaller = new RestApiCaller<List<CommitDetail>>(ApiFormats.BaseUri);

                    int accountIndex = 0;
                    string accessToken = AuthorizeUtil.GetToken(githubAccounts[accountIndex].UserName, githubAccounts[accountIndex].Password);
                    this.ResetTalentCandidateCommits();
                    foreach (GithubRepo githubRepo in db.GithubRepoes.ToList())
                    {
                        // clear the calculating number of the repository

                        this.ResetContributersToRepo(githubRepo);

                        int startPage = 0;
                        int perPage = 100;

                        GithubFeed githubFee = this.Parse(githubRepo.Url);
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
                                                using (var transaction = db.Database.BeginTransaction())
                                                {
                                                    candidate = new TalentCandidate();
                                                    candidate.Company = string.Empty;
                                                    candidate.Email = string.Empty;
                                                    candidate.Followers = string.Empty;
                                                    candidate.FollowersUrl = string.Empty;
                                                    candidate.Location = string.Empty;
                                                    candidate.Login = pagedCommitDetails[i].author.login;
                                                    candidate.Name = string.Empty;
                                                    candidate.ReposUrl = string.Empty;
                                                    db.TalentCandidates.Add(candidate);
                                                    db.SaveChanges();
                                                    transaction.Commit();
                                                }
                                            }
                                            ContributerToRepo contributerInfo = null;
                                            using (var transaction = db.Database.BeginTransaction())
                                            {
                                                contributerInfo = db.ContributerToRepoes.Where(ctp => ctp.RepoId == githubRepo.Id && ctp.TalentCandidateId == candidate.Id).FirstOrDefault();
                                                if (contributerInfo == null)
                                                {
                                                    contributerInfo = new ContributerToRepo();
                                                    contributerInfo.RepoId = githubRepo.Id;
                                                    contributerInfo.TalentCandidateId = candidate.Id;
                                                    db.ContributerToRepoes.Add(contributerInfo);
                                                    db.SaveChanges();
                                                }
                                                contributerInfo.CalculatingCommitNumber += 1;
                                                db.SaveChanges();
                                                transaction.Commit();
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
                        this.SetValueForContributerToRepo(githubRepo);
                    }

                    RestApiCaller<User> userInfoCaller = new RestApiCaller<User>(ApiFormats.BaseUri);

                    foreach (TalentCandidate tc in db.TalentCandidates)
                    {
                        using (var transaction = db.Database.BeginTransaction())
                        {
                            string urlParameters = string.Format(ApiFormats.UserApi, tc.Login);
                            User user = userInfoCaller.CallApi("get", accessToken, urlParameters, null);
                            tc.Company = getEmptyOrValue(user.company);
                            tc.Email = getEmptyOrValue(user.email);
                            tc.Followers = getEmptyOrValue(user.followers);
                            tc.FollowersUrl = getEmptyOrValue(user.followers_url);
                            tc.Location = getEmptyOrValue(user.location);
                            tc.Name = getEmptyOrValue(user.name);
                            tc.ReposUrl = getEmptyOrValue(user.repos_url);
                            db.SaveChanges();
                            transaction.Commit();
                        }
                    }

                    this.SetValueForTalentCandidateCommits();
                }
                catch (Exception e)
                {
                    Trace.TraceError(e.ToString());
                }
                await Task.Delay(1000 * 60 * 60 * 5);
            }
        }
    }
}
