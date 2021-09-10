
//! ИМПОРТЫ
// console.log(`this file is connected`);
import photoArray from "../db/photo.js";
import createItemByString from "./createItemByString.js";
import createItemAsElement from "./createItemAsElement.js";
// console.log(photoArray);

//! ДОСТУПЫ
import refs from './refs.js'
const { list, modal, overlay, modalContent, modalImg, closeModal } = refs
console.log(list, modal, overlay, modalContent, modalImg, closeModal);


//! ФУНКЦИИ
function closeModalWin() {
    modal.classList.remove('is-open')
    closeModal.removeEventListener("click", closeModalWin)
    closeModal.removeEventListener('keydown', closeModalWin)
    console.log(`0`);
}

//! СЛУШАТЕЛИ
list.addEventListener("click", (e) => {
    if (e.target.nodeName === "IMG") {
        modal.classList.add('is-open')
        modalImg.src = e.target.src
        closeModal.addEventListener("click", closeModalWin)
        console.log(`1`);
    }
})

window.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
        closeModalWin()
    }
})
modal.addEventListener('click', (e) => {
    if (!e.target.classList.contains("lightbox__image")) {
        closeModalWin()
    }
})




const result = photoArray.map((photoObject) => {
    const {
        title: mainTitle,
        image,
        description,
        category,
        seria,
        author: { name, country, city },
    } = photoObject;



    // const item = createItemByString(
    //     mainTitle,
    //     image,
    //     description,
    //     category,
    //     seria,
    //     name,
    //     country,
    //     city
    // )
    // return item
    const item = createItemAsElement(
        mainTitle,
        image,
        description,
        category,
        seria,
        name,
        country,
        city 
    )
    return item
})

// const addResult = result.join("")
// list.insertAdjacentHTML("beforeend", addResult)

list.append(...result)

console.clear()

const user = {
    name: 'user',
    age: 18,
    skills: 'js',
}
console.log(user);
console.log(JSON);
const jsonUser = JSON.stringify(user)
console.log(jsonUser);

const newUser = JSON.parse(jsonUser)
console.log(newUser);

console.log(localStorage);
console.log(typeof localStorage);

localStorage.setItem('name', 'user')
localStorage.setItem('user', JSON.stringify(user))

const value = localStorage.getItem('name')
console.log(value);

const getObject = localStorage.getItem('user')
console.log(getObject);

const jsObject = JSON.parse(getObject)
console.log(jsObject);

localStorage.removeItem('name')
localStorage.clear()

