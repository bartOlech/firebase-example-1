
const Register = () => {
    const signInContainer = document.querySelector('#sign-in-container');
    const signUpContainer = document.querySelector('#sign-up-container');

    const signUpBtn = document.querySelector('#sign-up-btn');

    signUpBtn.addEventListener('click', () => {
        signInContainer.setAttribute('style', 'display: none')
        signUpContainer.setAttribute('style', 'display: inline')
    })
}

export default Register;