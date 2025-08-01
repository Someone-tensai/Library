const my_library = [];

function Book(name, author, year)
{
    if(!new.target)
    {
        throw console.error("Initialise with a new you bakaa");
        
    }
    this.id = crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.year = year;
}

function add_book(name, author, year)
{
    let new_book = new Book(name, author, year);
    my_library.push(new_book);
}
let container = document.querySelector(".container");
let body = document.querySelector("body");

document.addEventListener("DOMContentLoaded",function display_books()
{
    add_book("My Book" , "Me", "1949");
    add_book("1984", "George Orwell", "1984");

    console.log(my_library);

  
 

    let head = document.createElement("h2");

    head.textContent = "Your Books";
    body.prepend(head);

    for(const ind_book of my_library)
    {
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
    }
    
});


let new_button = document.querySelector(".new");
new_button.addEventListener("click", ()=>
{
    let dialog = document.createElement("dialog");
    let form = document.querySelector("form");
    form.hidden = false;
    dialog.appendChild(form);
    container.appendChild(dialog);
    dialog.showModal();
});

let form_submit = document.querySelector(".submit");
form_submit.addEventListener("click", ()=>
{
    let name = document.querySelector("name")
});