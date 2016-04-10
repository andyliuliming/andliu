using Macrodeek.AzureEnvironment;
using Macrodeek.HappyZLModel;
using Macrodeek.HappyZLModel.WrapUp.SearchRelated;
using Macrodeek.MacrodeekCommon;
using Macrodeek.Model;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Macrodeek.HappyZLProductService.Controllers.SeachWrapper
{
    public class SearchController : ApiController
    {
        // POST: api/Search
        public IHttpActionResult Post([FromBody]SearchQueryBody body)
        {
            GoldModelContainer db = new GoldModelContainer();
            switch (body.ObjectType)
            {
                case ObjectType.TalentCandidate:
                    
                    return Json<IEnumerable<TalentCandidate>>(db.TalentCandidates.Where(tc => tc.Location.Contains(body.FullText)).OrderBy(tc => tc.Id).Skip(body.From).Take(body.Size));
                default:
                    return null;
            }
        }
    }
}
