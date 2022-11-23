#pragma warning disable CS8618

using Microsoft.EntityFrameworkCore;

namespace LawnWizard.Models;

public class MyContext : DbContext
{
    public MyContext(DbContextOptions options) : base(options) { }

    public DbSet<Employee> Employees { get; set; } 
}