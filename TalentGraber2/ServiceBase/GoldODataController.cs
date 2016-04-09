using Macrodeek.StarDustModel;
using System;
using System.Diagnostics;

namespace Macrodeek.StarDustServiceBase.Controllers
{
    public class GoldODataController : ODataBaseController
    {
        protected StarDustGoldModelContainer db = new StarDustGoldModelContainer();
        public GoldODataController()
            : base()
        {
            db.Database.Log = new Action<string>(str =>
            {
                Trace.TraceInformation(str);
            });
        }
    }
}