using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Macrodeek.StarDustDataCacheLayer.RedisCache;
using Macrodeek.StarDustModel.WrapUp;

namespace Macrodeek.StarDustDataLayer
{
    public class Class1
    {
        public void Upload()
        {
            CacheManager productCache = CacheManagerBuilder.GetCacheManager(CacheManagerType.Product);
            BlobDownloadModel model = new BlobDownloadModel();
            if (!productCache.IsConnected)
            {
                productCache.Connect();
            }
        }
        
    }
}
