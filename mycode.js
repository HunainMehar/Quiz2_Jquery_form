  
var name_err = true;
var email_err = true;
var pass_err = true;
var confirmPass_err = true;

$(function () {
  $("#f-nameError").hide();
  $("#f-emailError").hide();
  $("#f-passError").hide();
  $("#f-cPassError").hide();
  $("#myForm").submit(handleFormSubmit);   
});

  function handleFormSubmit(e) {

    name_check();
    email_check();
    password_check();
    confirm_password_check();

    function name_check()
    {
    var name = $("#name").val();
    if (name == '' ) 
    {
      $("#f-nameError").html("* Please enter your name");
      $("#f-nameError").show();
      $("#f-nameError").focus();
      $("#f-nameError").addClass("form-error");
      $("#name").addClass("error");
      name_err=false;
      e.preventDefault();
      
    }
    else if ((name.length) < 5) 
    {
      $("#f-nameError").html("* Your name should atleast 5 characters long");
      $("#f-nameError").show();
      $("#f-nameError").focus();
      $("#f-nameError").addClass("form-error");
      $("#name").addClass("error");
      name_err=false;
      e.preventDefault();
    }
    else 
    {
      $("#f-nameError").hide();
      $("#f-nameError").removeClass("form-error");
      $("#name").removeClass("error");
      name_err=true;
    }
  }

  function email_check()
  {
    var email = $("#email").val();
    if(email== "")
    {
      $("#f-emailError").html("* Please enter your email");
      $("#f-emailError").show();
      $("#f-emailError").focus();
      $("#f-emailError").addClass("form-error");
      $("#email").addClass("error");
      email_err=false;
      e.preventDefault();
    }
    else
    {
      $("#f-emailError").hide();
      $("#f-emailError").removeClass("form-error");
      $("#email").removeClass("error");
      email_err=true;
    }
  }

  function password_check()
  {
    var password= $("#password").val();
    if(password== "")
    {
      $("#f-passError").html("* Please enter your password");
      $("#f-passError").show();
      $("#f-passError").focus();
      $("#f-passError").addClass("form-error");
      $("#password").addClass("error");
      pass_err=false;
      e.preventDefault();
    }
    else if(password.length < 8)
    {
      $("#f-passError").html("* Your password must be 8 characters long");
      $("#f-passError").show();
      $("#f-passError").focus();
      $("#f-passError").addClass("form-error");
      $("#password").addClass("error");
      pass_err=false;
      e.preventDefault();
    }
    else
    {
      $("#f-passError").hide();
      $("#f-passError").removeClass("form-error");
      $("#password").removeClass("error");
      pass_err=true;
    }
  }

  function confirm_password_check()
  {
    var password= $("#password").val();
    var confirm_password= $("#confirm_password").val();
    if(password!=confirm_password)
    {
      $("#f-cPassError").html("* Password does not match");
      $("#f-cPassError").show();
      $("#f-cPassError").focus();
      $("#f-cPassError").addClass("form-error");
      $("#confirm-password").addClass("error");
      confirmPass_err=false;
      e.preventDefault();
    }
    else
    {
      $("#f-cPassError").hide();
      $("#f-cPassError").removeClass("form-error");
      $("#comfirm-password").removeClass("error");
      confirmPass_err=true;
    }
  }

  if (
    name_err == true &&
    email_err == true &&
    pass_err == true &&
    confirmPass_err == true
  ) {
    alert("Form submitted successfully");
    return true;
  } else {
    e.preventDefault();
    return false;
  }

}