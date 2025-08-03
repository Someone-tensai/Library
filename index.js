let my_library = [];
let div_new = document.querySelector(".button");
let container = document.querySelector(".container");
let body = document.querySelector("body");
let new_button = document.querySelector(".new");
let form = document.querySelector("form");
let dialog = document.createElement("dialog");
let remove = document.querySelector(".remove");
let form_submit = document.querySelector(".submit");


document.addEventListener("DOMContentLoaded", display_books);

function Book(name, author, year) {
  if (!new.target) {
    throw console.error("Initialise with a new you bakaa");
  }
  this.id = crypto.randomUUID();
  this.name = name;
  this.author = author;
  this.year = year;
  this.read = false;
  this.toggle_status = function()
    {
        if(this.read === false) this.read = true;
        else this.read = false;
    }
}

function add_book(name, author, year) {
  let new_book = new Book(name, author, year);
  my_library.push(new_book);
}
add_book("Something", "Someone" , 1984);
function display_books() {
  console.log(my_library);
  container.innerHTML = "";
  
    for (const ind_book of my_library) {
    console.log(ind_book);
    let book = document.createElement("div");
    let title = document.createElement("div");
    let remove_button = document.createElement("button");
    let toggle_button = document.createElement("button");
    toggle_button.textContent = "Toggle Status";
    toggle_button.classList.add("toggle");
    remove_button.classList.add("remove");
    remove_button.textContent = "Remove";
    toggle_button.dataset.id = ind_book.id;
    remove_button.dataset.id = ind_book.id;
    title.classList.add("title");
    book.classList.add("book");

    title.textContent = `${ind_book.name}`;
    book.textContent += `Author: ${ind_book.author}\n`;
    book.textContent += `Year of Publication: ${ind_book.year}`;
    book.textContent += ind_book.read == true?`\nStatus: Read\n`:`\nStatus: Not Read\n`;

    book.prepend(title);
    book.append(remove_button);
    book.append(toggle_button);
    container.appendChild(book);
  }
  body.appendChild(container);
  body.appendChild(div_new);
}

new_button.addEventListener("click", () => {

  form.hidden = false;
  dialog.appendChild(form);
  container.appendChild(dialog);
  dialog.showModal();

});

form_submit.addEventListener("click", (event) => {

  event.preventDefault();

  let name = document.querySelector(".name");
  let author = document.querySelector(".author");
  let year = document.querySelector(".year");

  add_book(name.value, author.value, year.value);

  dialog.close();
  form.reset();
  display_books();

});

container.addEventListener("click", (event) => {
  if (event.target.closest(".remove"))
  {
  my_library = my_library.filter((obj) => {
    return obj.id != event.target.dataset.id;
  });
  }
    else if(event.target.closest(".toggle"))
    {
    my_library.filter((obj) => {
        return obj.id == event.target.dataset.id;
        })[0].toggle_status();
    }
    else return;
  display_books();

});
