
const Auth = () => {
    const signUpContainer = document.querySelector('#sign-up-container');
    const signUpForm = document.querySelector('#sign-up-form');
    const signOut = document.querySelector('#sign-out-btn')
    
    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
        // get user info
        const email = signUpForm['sign-up-email-text'].value;
        const password = signUpForm['sign-up-password-text'].value;

        // sign up the user
        auth.createUserWithEmailAndPassword(email, password).then(cred=> {
            console.log(cred)
            signUpContainer.setAttribute('style', 'display: none')
            signUpForm.reset()
            signOut.setAttribute('style', 'display: inline')
        })
    })

    // sign out 
    signOut.addEventListener('click', (e) => {
        e.preventDefault();
        auth.signOut().then(() => {
            console.log('user signed out')
            signOut.setAttribute('style', 'display: none')
        })
    })
}

export default Auth;


