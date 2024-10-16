document.getElementById('toggle-password').addEventListener('click', function () {
    var passwordField = document.getElementById('password');
    var type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.querySelector('i').classList.toggle('icon-eye');
    this.querySelector('i').classList.toggle('icon-eye-slash');
});
