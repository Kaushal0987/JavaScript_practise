let form = document.signup_form;
let fullname = form.fullname,
    email = form.email;


let span = document.createElement("span");
    span.classList.add('error'); // use add/remove property with classList
    
    // console.log(email.parentElement); //test
    email.parentElement.append(span); 
    //append (after all child), prepend (before all child)

//Form event: submit
form.addEventListener("submit", function(e) {
    if(fullname.value == '') {
        console.log("Fullname is empty.");
        fullname.nextElementSibling.innerText = "Fullname is empty.";
        //inside element: Text content insertion properties: innerText, innerHTML
        e.preventDefault();
    }

    if(email.value == '') {
        console.log("Email is empty.");
        email.nextElementSibling.innerText = "Email is empty.";
        e.preventDefault();
    }
});
/* Events: Mouse, Keyboard, Form, Window */

console.log(Array());
console.log(Object());

//Keyboard event
//element.addEventListener("event", callback_function());
email.addEventListener("keyup", function() {
    //-1 = empty
    console.log(this.value);
    if(this.value.indexOf("@") == -1) {
        // console.log("At least one '@' symbol is required.");
        this.nextElementSibling.innerText = "At least one '@' symbol is required.";
    } else if(this.value.indexOf("@") != this.value.lastIndexOf("@")) {
        // console.log("More than one '@' symbol is not allowed.");
        this.nextElementSibling.innerText = "More than one '@' symbol is not allowed."
    } else if(this.value.indexOf(".") != -1) {
        // console.log("At least one '.' symbol is required.");
        this.nextElementSibling.innerText = "At least one '.' symbol is required.";
    } else {
        this.nextElementSibling.innerText = "";
        // console.log("Ok");
    }   
});

/*Tasks: Create a contact form and validate using JavaScript
    Fields:
    - Fullname, Email, Phone, Gender, Address, Message

Check: regexr.com (optional: regex101.com)

REGEX : Regular Expression
    - It helps to create pattern string
    - Pattern uses to validate any data from the form
    - Advanced than basic JS validation

    you must be aware of global or single line pattern
    global: /g flag uses at the end of pattern string

*/
