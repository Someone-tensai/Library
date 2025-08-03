const my_library = [];

function Book(name, author, year) {
  if (!new.target) {
    throw console.error("Initialise with a new you bakaa");
  }
  this.id = crypto.randomUUID();
  this.name = name;
  this.author = author;
  this.year = year;
  this.displayed = false;
}

function add_book(name, author, year) {
  let new_book = new Book(name, author, year);
  my_library.push(new_book);
  console.log(my_library);
}

let div_new = document.querySelector(".button");

function display_books() {
  console.log(my_library);

  for (const ind_book of my_library) {
    if(ind_book["displayed"] === true) continue;
    console.log(ind_book);
    let book = document.createElement("div");
    let title = document.createElement("div");

    title.classList.add("title");
    book.classList.add("book");

    title.textContent = `${ind_book.name}`;
    book.textContent += `Author: ${ind_book.author}\n`;
    book.textContent += `Year of Publication: ${ind_book.year}`;

    book.prepend(title);
    container.appendChild(book);
    ind_book["displayed"] = true;
  }
  body.appendChild(container);
  body.appendChild(div_new);
}
let container = document.querySelector(".container");
let body = document.querySelector("body");

document.addEventListener("DOMContentLoaded", display_books);

let new_button = document.querySelector(".new");
let form = document.querySelector("form");
let dialog = document.createElement("dialog");

new_button.addEventListener("click", () => {
  form.hidden = false;
  dialog.appendChild(form);
  container.appendChild(dialog);
  dialog.showModal();
});

let form_submit = document.querySelector(".submit");
form_submit.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("CLicked");
  let name = document.querySelector(".name");
  let author = document.querySelector(".author");
  let year = document.querySelector(".year");
  console.log(name.value);
  console.log(author.value);
  console.log(year.value);
  add_book(name.value, author.value, year.value);
  dialog.close();
  display_books();

});
