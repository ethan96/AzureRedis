// See https://aka.ms/new-console-template for more information
//Console.WriteLine("Hello, World!");
using AzRedisCs;

// int minWorker,
//     minIOC;

// Get the current settings.
// ThreadPool.GetMinThreads(out minWorker, out minIOC);
// Console.WriteLine(minWorker.ToString());
// Console.WriteLine(minIOC.ToString());
// ThreadPool.SetMinThreads(4, minIOC);

RedisTest rt = new RedisTest();

await rt.RunRedisCommandsAsync("T1");
