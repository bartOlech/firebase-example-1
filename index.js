
// db.collection('users').get().then((snapshot) => {
//     console.log(snapshot.docs)
// })

const list = document.querySelector('#list-of-name');

const getUserFromDb = (doc) => {
    let li = document.createElement('li');
    let userImg = document.createElement('div');
    let name = document.createElement('span');
    let surname = document.createElement('span');

    // append class to the element
    userImg.classList.add('user-img')
    name.classList.add('user-list-name')

    li.setAttribute('data-id', doc.id);
    name.textContent = `${doc.data().Name} `;
    surname.textContent = doc.data().Surname;

    li.appendChild(userImg);
    li.appendChild(name);
    li.appendChild(surname);
    list.appendChild(li)
}

db.collection('users').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        console.log(doc.data().Name)
        getUserFromDb(doc)
    });
})
