const CloseForm = () => {
    // close buttons
    const closeBtnSignIn = document.querySelector('#close-form-sign-in-btn')
    const closeBtnSignUp = document.querySelector('#close-form-sign-up-btn')

    const signInContainer = document.querySelector('#sign-in-container');
    const signUpContainer = document.querySelector('#sign-up-container');

    closeBtnSignUp.addEventListener('click', () => {
        signUpContainer.setAttribute('style', 'display: none')
    })

    closeBtnSignIn.addEventListener('click', () => {
        signInContainer.setAttribute('style', 'display: none')
    })
}

export default CloseForm;