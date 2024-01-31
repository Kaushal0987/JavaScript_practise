let form = document.register;
let fullname = form.fname,
    email = form.email,
    phone = form.phone;

form.addEventListener("submit", function(e) {
    if(fullname.value.length <= 0) {
        fullname.nextElementSibling.innerText = "Fullname is required.";
        e.preventDefault();
    } else {
        fullname.nextElementSibling.innerText = "";
    }

    if(email.value.length <= 0) {
        email.nextElementSibling.innerText = "Email is required.";
        e.preventDefault();
    } else {
        email.nextElementSibling.innerText = "";
    }

    if(phone.value.length <= 0) {
        phone.nextElementSibling.innerText = "Phone is required.";
        e.preventDefault();
    } else {
        phone.nextElementSibling.innerText = "";
    }
});

email.addEventListener("keydown", function() {
    /**REGEX: Regular Expression
     * - String pattern (not a language and script)
     * - REGEX suits on any programming language.
     *      Like: XML/XSD, JavaScript, PHP, Python, Java, ASP.Net etc...
     *
     * - So, We can say, REGEX is universal string pattern for checking string characters. 
     * 
     * Official sites for cheatseats:
     * - regexr.com (my priority)
     * - regex101.com
     */
    let emailPattern = /[A-Za-z]\w[(@)][A-Za-z]+\.[(com)]/g; // ->   /[]/ 
            //[A-Za-z]  or [A-Z][a-z]
    /*On pattern string making: 
    if slash (/) only ends = single line,
    if /g ends = global (multiline also exepts) 
    */
    if(emailPattern.test(this.value) == false) {
        this.nextElementSibling.innerText = "Email is not valid.";
    } else {
        this.nextElementSibling.innerText = "";
    }
});