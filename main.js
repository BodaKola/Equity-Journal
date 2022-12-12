
//TOGGLE PASSWORD VISIBILITY
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    
    // toggle the icon
    this.classList.toggle("bi-eye");
});

//FORM VALIDATION
var email = document.forms['form']['email'];
var pass = document.forms['form']['password'];


var emailError = document.querySelector('.form__message__error');
var passwordError = document.querySelector('.form__pass__error');


email.addEventListener('textInput', email_Verify);
pass.addEventListener('textInput', pass_Verify);

function validated() {
    if (email.value.length < 9) {   
        email.style.border = "1px solid red";
        emailError.style.display= "block";
        email.focus();
        return false;

    }
    if (pass.value.length < 9) {
        pass.style.border = "1px solid red";
        passwordError.style.display= "block";
        pass.focus();
        return false;

    }
}

function email_Verify(){
    if (email.value.length >= 8) {   
        email.style.border = "none";
        emailError.style.display= "none";
        return true;

    }
}
function pass_Verify(){
    if (pass.value.length < 9) {
        pass.style.border = "1px solid red";
        passwordError.style.display= "block";
        return true;

    }  
}
