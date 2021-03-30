using System;
using System.Collections.Generic;

namespace ConsoleScripts
{
    /* Adapted from "How to sort a list in C# | List.Sort() Method Set -1"
     * https://www.geeksforgeeks.org/how-to-sort-list-in-c-sharp-set-1/ */
    class GoCompare : IComparer<string>
    {
        public int Compare(string x, string y)
        {

            if (x == null || y == null)
            {
                return 0;
            }

            // "CompareTo()" method
            return x.CompareTo(y);

        }
    }

    public class Languages
    {

        // Main Method
        public static void Main()
        {
            List<string> list1 = new List<string>();

            // list elements
            list1.Add("go");
            list1.Add("java");
            list1.Add("c");
            list1.Add("ruby");
            list1.Add("javascript");
            list1.Add("python");
            list1.Add("php");
            list1.Add("haskell");
            list1.Add("pascal");

            Console.WriteLine("Original List of Languages:");

            // Display Original List
            Display(list1);

            // "gc" is the object
            GoCompare gc = new GoCompare();

            Console.WriteLine("\nSort with a comparer (List<T>.Sort(IComparer <T>) method):");

            // sort the list with a 
            // specified comparer "gc"
            list1.Sort(gc);

            // Display sorted List
            Display(list1);

        }

        // Display function
        public static void Display(List<string> list)
        {
            foreach (string l in list)
            {
                Console.WriteLine(l);
            }
        }
    }
}


