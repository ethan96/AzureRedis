using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AzRedisCs
{
    public class Employee
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }

        public Employee(string id, string name, int age)
        {
            Id = id;
            Name = name;
            Age = age;
        }
    }
}
