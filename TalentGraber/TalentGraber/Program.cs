using GithubGraberLib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TalentGraber
{
    class Program
    {
        static void Main(string[] args)
        {
            GithubExtractor githubExtractor = new GithubExtractor();
            githubExtractor.Extract("https://github.com/andyliuliming/WALinuxAgent.git", "extracttalants", "andyllm888");
        }
    }
}
