const myLibrary = [];

// function Book(author, title, num_pages, read) {
//   this.author = author;
//   this.title = title;
//   this.num_pages = num_pages;
//   this.read = read;
//   this.toggleRead = function () {
//     this.read = !this.read;
//   }
// }

class Book {
  constructor(author, title, num_pages, read) {
    this.author = author;
    this.title = title;
    this.num_pages = num_pages;
    this.read = read;
  }
  toggleRead() {
    this.read = !this.read;
  }
}

function addBookToLibrary(author, title, num_pages, read) {
    const book = new Book(author, title, num_pages, read);
    myLibrary.push(book);
    displayBooks();
}

// Need event to reference button actions
function readInput(event) {
    event.preventDefault();
    // Need to set to element and not .value if changing later
    const author = document.getElementById('author');
    const title = document.getElementById('title');
    const num_pages = document.getElementById('num_pages');
    const read = document.querySelector('input[name="read"]:checked');
    // gets the radio button that is checked
    addBookToLibrary(author.value, title.value, num_pages.value, read.value)
    author.value = null;
    title.value = null;
    num_pages.value = null;
    read.checked = false;
    dialog.close()
}

function displayBooks() {
    const body = document.querySelector(".books");
    body.innerHTML = "";
    myLibrary.forEach((book, index) => {
            // for (let i=0; i<myLibrary.length; i++) {
            //     const display = document.createElement("div");
            //     display.innerHTML = `${myLibrary[i].author} <br> ${myLibrary[i].title} <br> ${myLibrary[i].num_pages} <br> ${myLibrary[i].read}`;
            //     // .textContent for just string, .innerHTML for more styling/format
            //     body.appendChild(display);
            // }
            const display = document.createElement("div");
            display.innerHTML = 
            `${book.author} <br> ${book.title} <br> ${book.num_pages} <br> ${book.read} 
            <br> <button class="erase">Erase Book</button>
            <br> <button class="read">Toggle Read</button>`;
            // .textContent for just string, .innerHTML for more styling/format
            const erase = display.querySelector(".erase")
            erase.addEventListener("click", () => { const divToDelete = erase.parentElement; divToDelete.remove(); myLibrary.splice(index, 1);})
            // Can not use this.parentElement because arrow function used
            // Arrow uses surrounding context (function?) rather than element triggering event as "this"
            // Use (book, index to get index)
            // INstead of .parentElement, can also re-display
            const read = display.querySelector(".read")
            read.addEventListener("click", () => { book.toggleRead(); displayBooks();})
            body.appendChild(display);
        }
    )
}

const dialog = document.querySelector("dialog")

const close = document.querySelector(".close")
close.addEventListener("click", () => { dialog.close() })

const add = document.querySelector(".newbook")
add.addEventListener("click", () => { dialog.showModal(); })

const submit = document.querySelector(".submit")
submit.addEventListener("click", readInput)