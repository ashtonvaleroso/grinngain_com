export let isSignIn = true;

// Add event listener to a parent element that contains the "signInUp" link
document.addEventListener('click', function(event) {
    if (event.target && event.target.id === 'signInUp') {
        toggleForm();
    }
});

function toggleForm() {
    const formTitle = document.getElementById('form-title');
    const confirmPasswordField = document.getElementById('confirm-password');
    const forgotPasswordLink = document.getElementById('forgot-password');
    const submitButton = document.querySelector('.signup-button');
    const alreadyAccountText = document.getElementById('already-account-text');
    const fpContainer = document.getElementById('forgot-password-container');

    if (!isSignIn) {
        isSignIn = true;
        formTitle.textContent = 'Sign into your account';
        confirmPasswordField.style.display = 'none';
        fpContainer.style.display = 'block';
        forgotPasswordLink.style.display = 'inline';
        submitButton.textContent = 'Sign In';
        confirmPasswordField.value = '';
        alreadyAccountText.innerHTML = 'Don\'t have an account? <a href="#" id="signInUp">Register now</a>';
    } else {
        isSignIn = false;
        formTitle.textContent = 'Create an account';
        confirmPasswordField.style.display = 'inline';
        fpContainer.style.display = 'none';
        forgotPasswordLink.style.display = 'none';
        submitButton.textContent = 'Sign Up';
        alreadyAccountText.innerHTML = 'Already have an account? <a href="#" id="signInUp">Login now</a>';
    }
}