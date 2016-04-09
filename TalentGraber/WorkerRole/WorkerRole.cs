using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.WindowsAzure;
using Microsoft.WindowsAzure.Diagnostics;
using Microsoft.WindowsAzure.ServiceRuntime;
using Microsoft.WindowsAzure.Storage;
using Macrodeek.StarDustModel;
using GithubGraberLib;

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

        private async Task RunAsync(CancellationToken cancellationToken)
        {
            // TODO: Replace the following with your own logic.
            while (!cancellationToken.IsCancellationRequested)
            {
                Trace.TraceInformation("Working");

                List<GithubAccount> githubAccounts = db.GithubAccounts.ToList<GithubAccount>();
                for(int i = 0; i < githubAccounts.Count; i++)
                {
                    GithubAccount account = githubAccounts[i];

                    string accessToken = AuthorizeUtil.GetToken(account.UserName, account.Password);
                    GithubExtractor githubExtractor = new GithubExtractor();
                    foreach (var githubRepo in db.GithubRepoes)
                    {
                        //HashSet<string> user_logins = githubExtractor.ExtractUserLogin(extractRequest);
                        //
                        //extractRequest.AccessToken = accessToken;
                        //extractRequest.Left = 5000;
                        //HashSet<string> user_logins = githubExtractor.ExtractUserLogin(extractRequest);
                        //if (user_logins.Count == 0)
                        //{
                        //    accountIndex++;
                        //    break;
                        //}
                        //foreach (string ul in user_logins)
                        //{
                        //    userLogins.Add(ul);
                        //}
                        //if (extractRequest.Left > 0)
                        //{
                        //    accountIndex++;
                        //    break;
                        //}
                    }
                }

                await Task.Delay(1000 * 60 * 60 * 5);
            }
        }
    }
}
