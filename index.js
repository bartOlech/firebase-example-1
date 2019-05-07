const list = document.querySelector('#list-of-name');
const form = document.querySelector('#add-user-form');

const getUserFromDb = (doc) => {
    let li = document.createElement('li');
    let userImg = document.createElement('div');
    let name = document.createElement('span');
    let surname = document.createElement('span');
    let cross = document.createElement('div')

    // append class to the element
    userImg.classList.add('user-img')
    name.classList.add('user-list-name')
    cross.classList.add('user-list-cross')

    li.setAttribute('data-id', doc.id);
    name.textContent = `${doc.data().Name} `;
    surname.textContent = doc.data().Surname;
    cross.textContent = 'x';

    li.appendChild(userImg);
    li.appendChild(name);
    li.appendChild(surname);
    li.appendChild(cross);
    list.appendChild(li)

    // deleting data
    cross.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id')
        e.target.parentElement.style.display = 'none'
        db.collection('users').doc(id).delete();
    })
}

// getting data
db.collection('users').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        console.log(doc.data().Name)
        getUserFromDb(doc)
    });
})

// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('users').add({
        Name: form.name.value,
        Surname: form.surname.value
    })
    form.name.value = '';
    form.surname.value = '';
})
