let form = document.signup_form;
let fullname = form.fullname;
let email = form.email;
let photo = form.photo;

form.addEventListener("submit", function(e){
 if (fullname.value == ""){
  console.log("fullname needed");
  e.preventDefault();
 } 
 console.log("Fullname: ",fullname.value)
})

form.addEventListener("submit", function(e){
 if (email.value == ""){
  console.log("email needed");
  e.preventDefault();
 } 
 console.log("email: ",email.value)
})

 form.addEventListener("submit", function(e){
  if (photo.value == ""){
   console.log("photo needed");
   e.preventDefault();
  } 
  console.log("photo: ",photo.value)
 })

 email.addEventListener("keyup", function(){
  console.log(email.value);
  if (this.value.indexOf("@") == -1){
   console.log("At least one '@' symbol is required");
  }
  else if (this.value.indexOf("@") != this.value.lastIndexOf("@")){
   console.log("More then one '@' symbol is not allowed");
  }
  else if (this.value.indexOf(".") == -1){
   console.log("At least one '.' symbol is required");
  }
  else{
   console.log("You'r good");
  }
 })