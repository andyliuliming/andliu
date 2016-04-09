namespace Macrodeek.StarDustDataCacheLayer.RedisCache
{
    public class CacheGlobalLockKeyPrefix
    {
        public const string ProductSkuLockKeyPrefix = "product_sku_lock_";
        public const string OrderLockKeyPrefix = "order_lock_";
    }

    // all the key prefix should be declared here.
    public class CacheKeyPrefixes
    {
        public const string UserPrincipalKeyPrefix = "user_principal_";

        public const string ProductSkuTokenKeyPrefix = ProductSkuKeyPrefix + "token_";

        public const string ProductSkuKeyPrefix = "product_sku_";

        public const string ProductCategoryKeyPrefix = "product_category_";

        public const string ProductImageKeyPrefix = "product_image_";
    }
}
