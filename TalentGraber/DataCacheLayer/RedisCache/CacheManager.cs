using StackExchange.Redis;
using System;
using System.Diagnostics;
using System.IO;
using System.Text;
using System.Threading;

namespace Macrodeek.StarDustDataCacheLayer.RedisCache
{
    public class CacheManager
    {
        private ConnectionMultiplexer connection = null;
        ConfigurationOptions options = null;

        public CacheManager(string cacheAddress, string cacheKey)
        {
            options = new ConfigurationOptions();
            options.EndPoints.Add(cacheAddress);
            options.Ssl = false;
            options.KeepAlive = 60; // keep connection alive (ping every minute)
            options.SyncTimeout = 60000; //60 seconds timeout for each get/set/remove operation
            options.ConnectTimeout = 60000; // 60 seconds to connect to the cache
            options.Password = cacheKey;
        }

        public bool IsConnected
        {
            get{
                return this.connection == null || this.connection.IsConnected;
            }
        }

        public void Connect()
        {
            if (connection == null)
            {
                StringBuilder sb = new StringBuilder();
                StringWriter sw = new StringWriter(sb);
                try
                {
                    connection = ConnectionMultiplexer.Connect(options, sw);
                }
                catch (Exception e)
                {
                    Trace.TraceInformation(sb.ToString());
                    Trace.TraceError(e.ToString());
                    throw e;
                }
            }
        }


        public bool SetAdd(string key, RedisValue value)
        {
            IDatabase database = this.GetDataBase();
            return database.SetAdd(key, value);
        }
        public long StringIncrement(string key)
        {
            IDatabase database = this.GetDataBase();
            return database.StringIncrement(key);
        }
        public RedisValue HashGet(string key, RedisValue hashField, CommandFlags flags = CommandFlags.None)
        {
            IDatabase database = this.GetDataBase();
            return database.HashGet(key, hashField, flags);
        }

        public long HashDecrement(string key, RedisValue hashField, long value = 1, CommandFlags flags = CommandFlags.None)
        {
            IDatabase database = this.GetDataBase();
            return database.HashDecrement(key, hashField, value, flags);
        }
        public bool KeyExist(string key)
        {
            IDatabase database = this.GetDataBase();
            return database.KeyExists(key);
        }

        public bool HashSet(string key, RedisValue hashField, RedisValue value, When when = When.Always, CommandFlags flags = CommandFlags.None)
        {
            IDatabase database = this.GetDataBase();
            return database.HashSet(key, hashField, value, when, flags);
        }
        public void HashSet(string key, HashEntry[] hashFields, CommandFlags flags = CommandFlags.None)
        {
            IDatabase database = this.GetDataBase();
            database.HashSet(key, hashFields, flags);
        }
        public bool HashDelete(string key, RedisValue hashField, CommandFlags flags = CommandFlags.None)
        {
            IDatabase database = this.GetDataBase();
            return database.HashDelete(key, hashField, flags);
        }
        public long HashDelete(string key, RedisValue[] hashFields, CommandFlags flags = CommandFlags.None)
        {
            IDatabase database = this.GetDataBase();
            return database.HashDelete(key, hashFields, flags);
        }

        private IDatabase GetDataBase()
        {
            IDatabase database0 = connection.GetDatabase();
            return database0;
        }
    }
}
