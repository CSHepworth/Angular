using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using LawnWizard.Models;
using System.Linq;
using Microsoft.AspNetCore.Identity;

namespace LawnWizard.Controllers;

[ApiController]
[Route("[controller]")]
public class EmployeeController : Controller
{
    private MyContext db;

    public EmployeeController(MyContext context)
    {
        db = context;
    }

    [HttpPost("employee/register")]
    public IActionResult RegisterEmployee(Employee newemployee)
    {
        if (ModelState.IsValid)
        {
            if (db.Employees.Any(e => e.Email == newemployee.Email))
            {
                ModelState.AddModelError("Email", "Email is already taken");
                
            }
        }
    }
}
