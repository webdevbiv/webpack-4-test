// console.log(`hello`);
import refsDoc from "./refs.js";
import db from "../db/photo.json";
import temp from "../templates/photo.hbs";
const { body: mainBody } = refsDoc;
// console.log(mainBody);
// console.log(db);
// console.log(temp);

const items = temp(db);
// console.log(items);

mainBody.insertAdjacentHTML("afterbegin", items);

const btnAdd = document.createElement("button");
btnAdd.textContent = "Add";
mainBody.prepend(btnAdd);
btnAdd.addEventListener("click", (e) => {
  console.log(`click`);
  mainBody.classList.add("dark");
  localStorage.setItem("class", "dark");
});

let theme = localStorage.getItem("class");
mainBody.classList.add(theme);

const btnRemove = document.createElement("button");
btnRemove.textContent = "Remove";
btnAdd.after(btnRemove);
btnRemove.addEventListener("click", (e) => {
  console.log(e);
  mainBody.classList.remove("dark");
  localStorage.removeItem("class");
});

const toggleBack = document.createElement("button");
toggleBack.textContent = "Toggle";
btnRemove.after(toggleBack);

toggleBack.addEventListener("click", (e) => {
  console.log(e);
  mainBody.classList.toggle("dark");
  // localStorage.setItem('class', 'dark')
  //     if (localStorage.getItem('class')) {
  //         localStorage.removeItem('class')
  //     } else {
  //         localStorage.setItem('class', 'dark')
  //     }
  localStorage.getItem("class")
    ? localStorage.removeItem("class")
    : localStorage.setItem("class", "dark");
});
