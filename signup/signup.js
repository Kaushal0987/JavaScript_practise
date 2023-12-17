// assigning data from form to variable
let form = document.signup_form;
let fullname = form.fullname;
let email = form.email;
let photo = form.photo;

let span = document.createElement("span");
span.classList.add('error'); // use add/remove property with classList
console.log(email.parentElement); // test

email.parentElement.append(span); // append(after all child), prepend(before all child)

let errPhoto = document.createElement("span");
errPhoto.classList.add('error');
photo.parentElement.append(errPhoto); // append(after all child), prepend(before all child)

//event : mouse, keyboard, form, window
// adding event on user input using form event : submit
form.addEventListener("submit", function(e){
 if (fullname.value == ""){
  console.log("fullname needed");
  this.nextElementSibling.innerText = "fullname needed";
  e.preventDefault();
 } 
 console.log("Fullname: ",fullname.value)
})

form.addEventListener("submit", function(e){
 if (email.value == ""){
  console.log("email needed");
  this.nextElementSibling.innerText = "email needed";
  e.preventDefault();
 } 
 console.log("email: ",email.value)
})

 form.addEventListener("submit", function(e){
  if (photo.value == ""){
   console.log("photo needed");
   this.nextElementSibling.innerText = "photo needed";
   e.preventDefault();
  } 
  console.log("photo: ",photo.value)
 })

 // inside element : Text content insertion properties : innerText, innerHtml

 // adding event using keyboard event : keyup
 email.addEventListener("keyup", function(){
  console.log(email.value);
  if (this.value.indexOf("@") == -1){
   // console.log("At least one '@' symbol is required");
   this.nextElementSibling.innerText = "At least one '@' symbol is required";
  }
  else if (this.value.indexOf("@") != this.value.lastIndexOf("@")){
   // console.log("More then one '@' symbol is not allowed");
   this.nextElementSibling.innerText = "More then one '@' symbol is not allowed";
  }
  else if (this.value.indexOf(".") == -1){
   // console.log("At least one '.' symbol is required");
   this.nextElementSibling.innerText = "At least one '.' symbol is required";
  }
  // else if (this.value.indexOf(" ") == this.value.lastIndexOf(" ")){
  //  // console.log("No spaces ' ' symbol are allowed."); this is shown in console only.
  //  this.nextElementSibling.innerText = "No spaces ' ' symbol are allowed.";
  // }
  else{
   // console.log("You'r good");
   this.nextElementSibling.innerText = "You'r good";
  }
 })

console.log(Array());
console.log(Object());