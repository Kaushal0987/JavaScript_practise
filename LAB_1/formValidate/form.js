// let form = document.form_signup;
// let fullname = form.fullname,
//  service = form.service,
//  username = form.username,
//  email = form.email,
//  password = form.password,
//  confirmPass = form.confirm_password,
//  comment = form.comment,
//  term = form.term;

document.addEventListener("DOMContentLoaded", function () {
 const form = document.forms.rform;
 const fname = form.fname;
 const email = form.email;
 const username = form.username;
 const password = form.password;
 const service = form.service;
 const cpassword = form.cpassword;
 const comment = form.comment;
 const checkbox = form.checkbox;

 form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission for testing

  // Validation rule a) Check required fields are empty or not
  const fields = [fname, email, username, password, service, cpassword, checkbox];
  fields.forEach(field => {
   if (field.value.trim() === '') {
    field.nextElementSibling.innerText = "Field cannot be empty";
    return false; // Prevent further processing if any required field is empty
   }
   field.nextElementSibling.innerText = ''; // Clear error message if field is not empty
  });

  // Validation rule b) Length of full name up to 20 characters
  if (fname.value.length > 20) {
   fname.nextElementSibling.innerText = "Full Name should be less than 20 characters";
   return false;
  }

  // Validation rule c) E-Mail must be valid using Regular Expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
   email.nextElementSibling.innerText = "Invalid email format";
   return false;
  }

  // Validation rule d) Username must start with string followed by number
  const usernameRegex = /^[a-zA-Z]+[0-9]*$/;
  if (!usernameRegex.test(username.value)) {
   username.nextElementSibling.innerText = "Invalid username format";
   return false;
  }

  // Validation rule e) Password length must be more than eight characters
  if (password.value.length < 8) {
   password.nextElementSibling.innerText = "Password should be at least eight characters";
   return false;
  }

  // Validation rule e) Compare and validate confirm password field data
  if (cpassword.value !== password.value) {
   cpassword.nextElementSibling.innerText = "Passwords do not match";
   return false;
  }

  // Validation rule f) Validate services combo-box (drop-down / select-box)
  if (service.value === "") {
   service.nextElementSibling.innerText = "Please select a service";
   return false;
  }

  // Validation rule g) Limit message length up to 200 characters
  if (comment.value.length > 200) {
   comment.nextElementSibling.innerText = "Message should not exceed 200 characters";
   return false;
  }

  // If all validations pass, you can submit the form
  this.submit();
 });
});