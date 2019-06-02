
const Auth = () => {
    const signUpContainer = document.querySelector('#sign-up-container');
    const signInContainer = document.querySelector('#sign-in-container');
    const signUpForm = document.querySelector('#sign-up-form');
    const signOut = document.querySelector('#sign-out-btn');
    const signInForm = document.querySelector('#sign-in-form');
    const signInSendBtn = document.querySelector('#sign-in-send-btn');

    const testFromDb = document.querySelector('#test-from-db');

    // listen for the status changes
    auth.onAuthStateChanged(user => {
        if (user) {
            signOut.setAttribute('style', 'display: inline');
            signUpContainer.setAttribute('style', 'display: none')
            signInContainer.setAttribute('style', 'display: none')

            // get data from db
            db.collection('guide').get().then(snapshot => {
                snapshot.docs.forEach(el => {
                    testFromDb.textContent = el.data().tittle;
                });
            })
        } else {
            signOut.setAttribute('style', 'display: none');
            testFromDb.textContent = '';
        }
    })
    
    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
        // get user info
        const email = signUpForm['sign-up-email-text'].value;
        const password = signUpForm['sign-up-password-text'].value;

        // sign up the user
        auth.createUserWithEmailAndPassword(email, password).then(cred=> {
            return db.collection('users').doc(cred.user.uid).set({
                age: signUpForm['form-age'].value
            })
        }).then(() => {
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

    // Sign in
    signInSendBtn.addEventListener('click', (e) => {
        e.preventDefault()
        const email = signInForm['sign-in-username-text'].value;
        const password = signInForm['sign-in-password-text'].value;
        auth.signInWithEmailAndPassword(email, password).then((cred) => {
            signInForm.reset()
            signOut.setAttribute('style', 'display: inline')
            signInContainer.setAttribute('style', 'display: none')
        })
    })
}


export default Auth;


