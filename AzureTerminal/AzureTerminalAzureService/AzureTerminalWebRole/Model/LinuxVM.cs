﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace AzureTerminalWebConsole.Model
{
    public class LinuxVM
    {
        [Key]
        public long Id { get; set; }
    }
}