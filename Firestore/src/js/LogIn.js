
const LogIn = () => {
    const signInContainer = document.querySelector('#sign-in-container');
    const signUpContainer = document.querySelector('#sign-up-container');

    // button
    const signInBtn = document.querySelector('#sign-in-btn');

    signInBtn.addEventListener('click', () => {
        signInContainer.setAttribute('style', 'display: inline')
        signUpContainer.setAttribute('style', 'display: none')
    })
}

export default LogIn;