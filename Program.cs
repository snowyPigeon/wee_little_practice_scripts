using System;
using System.Collections.Generic;

namespace SortAList1
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> birds = new List<string>();
            birds.Add("jackdaw");
            birds.Add("blackbird");
            birds.Add("thrush");
            birds.Add("robin");
            birds.Add("rook");
            birds.Add("pigeon");

            Console.WriteLine("The following types of birds visit my garden:");
            for (int i = 0; i < 6; i++)
            {
                Console.WriteLine(birds[i]);
            }

            Console.WriteLine("\r\n");
            Console.WriteLine("Let's line them up in alphabetical order:");
            birds.Sort();
            for (int i = 0; i < 6; i++)
            {
                Console.WriteLine(birds[i]);
            }
        }
    }
}
