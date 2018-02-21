 
using AuthWebApi.ViewModels.Validations;
using FluentValidation.Attributes;

namespace AuthWebApi.ViewModels
{
  [Validator(typeof(CredentialsViewModelValidator))]
  public class CredentialsViewModel
  {
    public string UserName { get; set; }
    public string Password { get; set; }
  }
}
