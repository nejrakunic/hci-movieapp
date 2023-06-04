const LoginButton = document.getElementById('login-button');
const SignUpButton = document.getElementById('signup-button');


LoginButton.addEventListener("click", showLoginForm);
SignUpButton.addEventListener("click", showSignUpForm);


function showLoginForm() {
  window.location.href = "homepage.html";
}

function showSignUpForm(){
    window.location.href="signup-form-container.html";
}

