let form = document.bookingForm;
let fname = form.fname,
 email = form.email,
 address = form.address,
 phone = form.phone,
 dDate = form.departureDate,
 aDate = form.returnDate,
 passNo = form.passengerNo;

 // let span = document.createElement("span");
 // span.classList.add('error'); // use add/remove property with classList
 // console.log(email.parentElement); // test

 // email.parentElement.append(span);

 let eleArr = [fname, email, address, phone, dDate, aDate, passNo];
 eleArr.forEach(item => {
  let span = document.createElement("span");
  span.classList.add('error');

  if(item.length >= 0) {
   item[0].parentElement.parentElement.append(span)
  } else {
   item.parentElement.append(span);
  }
 });


 form.addEventListener("submit", function(e){
  if (fname.value == ""){
   e.preventDefault();
   this.nextElementSibling.innerText = "Fullname needed";
  }
 })
 
 form.addEventListener("submit", function(e){
  if (email.value == ""){
   e.preventDefault();
   this.nextElementSibling.innerText = "email needed";
  } 
 })

 form.addEventListener("submit", function(e){
  if (address.value == ""){
   e.preventDefault();
   this.nextElementSibling.innerText = "address needed";
  } 
 })

 form.addEventListener("submit", function(e){
  if (phone.value == ""){
   e.preventDefault();
   this.nextElementSibling.innerText = "phone number needed";
  } 
 })

 form.addEventListener("submit", function(e){
  if (dDate.value == ""){
   e.preventDefault();
   this.nextElementSibling.innerText = "Departure Date needed";
  } 
 })

 form.addEventListener("submit", function(e){
  if (aDate.value == ""){
   e.preventDefault();
   this.nextElementSibling.innerText = "Arrival date needed";
  } 
 })

 form.addEventListener("submit", function(e){
  if (passNo.value == ""){
   e.preventDefault();
   this.nextElementSibling.innerText = "Passenger number needed";
  } 
 })

 email.addEventListener("keyup", function(){
  console.log(email.value);
  if (this.value.indexOf("@") == -1){
   this.nextElementSibling.innerText = "At least one '@' symbol is required";
  }
  else if (this.value.indexOf("@") != this.value.lastIndexOf("@")){
   this.nextElementSibling.innerText = "More then one '@' symbol is not allowed";
  }
  else if (this.value.indexOf(".") == -1){
   this.nextElementSibling.innerText = "At least one '.' symbol is required";
  }
  else{
   this.nextElementSibling.innerText = "You'r good";
  }
 })