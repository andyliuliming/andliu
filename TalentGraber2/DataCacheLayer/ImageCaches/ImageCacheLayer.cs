
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Macrodeek.StarDustModel.WrapUp;

namespace Macrodeek.StarDustDataCacheLayer.RedisCache
{
    public class ImageCacheLayer
    {
        private static bool use_local_memory = true;
        private static Dictionary<string, byte[]> imageCache = new Dictionary<string, byte[]>();
        public static void SetImageCache(Image image)
        {
            if (use_local_memory)
            {
                imageCache.Add(image.FileName, image.Content);
            }
            else
            {
                CacheManager productCache = CacheManagerBuilder.GetCacheManager();
                productCache.HashSet(CacheKeyPrefixes.ProductImageKeyPrefix + image.FileName, RedisCacheImageFields.Content, image.Content);
            }
        }

        public static byte[] GetImageCache(string name)
        {
            if (use_local_memory)
            {
                byte[] imageContent = null;
                if (imageCache.TryGetValue(name, out imageContent))
                {
                    return imageContent;
                }
                return null;
            }
            else
            {
                CacheManager productCache = CacheManagerBuilder.GetCacheManager();
                byte[] imageInCache = productCache.HashGet(CacheKeyPrefixes.ProductImageKeyPrefix + name, RedisCacheImageFields.Content);
                return imageInCache;
            }
        }

    }
}
