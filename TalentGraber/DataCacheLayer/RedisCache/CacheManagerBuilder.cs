using StarDustCommon.Util;
using Macrodeek.AzureEnvironment;
using Macrodeek.MacrodeekCommon;
using System.Configuration;

namespace Macrodeek.StarDustDataCacheLayer.RedisCache
{
    public enum CacheManagerType
    {
        Authentication,
        Product
    }

    public class CacheManagerBuilder
    {
        private static CacheManager productCacheManager = null;
        private static object instanceLock = new object();

        public static CacheManager GetCacheManager()
        {
            if (productCacheManager == null)
            {
                lock (instanceLock)
                {
                    if (productCacheManager == null)
                    {
                        string address = AppSettingsProvider.GetSetting(FieldNameUtil.GetMemberName((AzureSettingsNames c) => c.StarDustProductCacheAddress));
                        string key = AppSettingsProvider.GetSetting(FieldNameUtil.GetMemberName((AzureSettingsNames c) => c.StarDustProductCacheKey));
                        productCacheManager = new CacheManager(address, key);
                        productCacheManager.Connect();
                    }
                }
            }
            return productCacheManager;
        }
    }
}
