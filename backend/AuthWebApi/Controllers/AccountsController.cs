

using System.Threading.Tasks;
using AuthWebApi.Data;
using AuthWebApi.Helpers;
using AuthWebApi.Models.Entities;
using AuthWebApi.ViewModels;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace AuthWebApi.Controllers
{
  [Route("api/[controller]")]
  public class AccountsController : Controller
  {
    private readonly ApplicationDbContext _appDbContext;
    private readonly UserManager<AppUser> _userManager;
    private readonly IMapper _mapper;

    public AccountsController(UserManager<AppUser> userManager, IMapper mapper, ApplicationDbContext appDbContext)
    {
      _userManager = userManager;
      _mapper = mapper;
      _appDbContext = appDbContext;
    }

    // POST api/accounts
    [HttpPost]
    public async Task<IActionResult> Post([FromBody]RegistrationViewModel model)
    {
      // simulate slightly longer running operation to show UI state change
        await Task.Delay(250);

        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var userIdentity = _mapper.Map<AppUser>(model);

        var result = await _userManager.CreateAsync(userIdentity, model.Password);

        if (!result.Succeeded) return new BadRequestObjectResult(Errors.AddErrorsToModelState(result, ModelState));

        await _appDbContext.Customers.AddAsync(new Customer { IdentityId = userIdentity.Id, Location = model.Location });
        await _appDbContext.SaveChangesAsync();

        return new OkObjectResult("Account created");
    }
  }
}
