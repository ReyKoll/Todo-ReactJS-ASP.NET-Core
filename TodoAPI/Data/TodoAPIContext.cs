using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TodoAPI.Data.Models;

namespace TodoAPI.Data
{
    public class TodoAPIContext : DbContext
    {
        public TodoAPIContext (DbContextOptions<TodoAPIContext> options)
            : base(options)
        {
        }

        public DbSet<TodoAPI.Data.Models.TodoItem> TodoItem { get; set; } = default!;
    }
}
