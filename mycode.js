  
$(function () {
  $("#myForm").submit(handleFormSubmit);   
});
  
  function handleFormSubmit(e) {

    var name = $("#name").val();
    var email = $("#email").val();
    var password= $("#password").val();
    var confirm_password= $("#confirm_password").val();
    if (name == '' || email == '' || password == '' || confirm_password == '') 
    {
      
      $("#name").addClass("error");
      return;
      // alert("Please fill all fields...!!!!!!");
      
    }
    else if ((password.length) < 8) 
    {
      alert("Password should atleast 8 character in length...!!!!!!");
    }
    else if ((name.length) < 5) 
    {
      alert("Name should atleast 5 character in length...!!!!!!");
      // $("#name").addClass("error");
    }
    else if (!(password).match(confirm_password)) 
    {
      alert("Your passwords don't match. Try again?");
    }
    else
    {
      alert("Form is being submitted");
    }

  
    e.preventDefault();
  }