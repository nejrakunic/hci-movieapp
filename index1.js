const getStartedButton = document.getElementById('get-started-button');

getStartedButton.addEventListener('click', showLoginForm);

function showLoginForm() {
  window.location.href = "login-form-container.html";
}
