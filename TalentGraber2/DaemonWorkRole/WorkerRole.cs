using System.Diagnostics;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.WindowsAzure.ServiceRuntime;
using System.Collections.Generic;
using Macrodeek.StarDustDaemonWorkRole.Monitoring;
using System;

namespace Macrodeek.StarDustDaemonWorkRole
{
    public class WorkerRole : RoleEntryPoint
    {
        private readonly CancellationTokenSource cancellationTokenSource = new CancellationTokenSource();
        private readonly ManualResetEvent runCompleteEvent = new ManualResetEvent(false);

        private List<IWorker> workers = null;

        public WorkerRole() : base()
        {
            workers = new List<IWorker>();
            workers.Add(new MonitoringWorker());
        }

        public override void Run()
        {
            Trace.TraceInformation("StarDustDaemonWorkRole is running");

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

            Trace.TraceWarning("StarDustDaemonWorkRole has been started");

            return result;
        }

        public override void OnStop()
        {
            Trace.TraceWarning("StarDustDaemonWorkRole is stopping");

            this.cancellationTokenSource.Cancel();
            this.runCompleteEvent.WaitOne();

            base.OnStop();

            Trace.TraceWarning("StarDustDaemonWorkRole has stopped");
        }

        private async Task RunAsync(CancellationToken cancellationToken)
        {
            while (!cancellationToken.IsCancellationRequested)
            {
                foreach (var worker in this.workers)
                {
                    try
                    {
                        worker.DoIt();
                    }
                    catch (Exception e)
                    {
                        Trace.TraceError(e.ToString());
                    }
                }
                Trace.TraceInformation("Working");
                await Task.Delay(20 * 60 * 1000);
            }
        }
    }
}
