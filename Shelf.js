const myLibrary = [];

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error('Book constructor must be called with new');
    }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
   this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages , ${this.read ? 'read' : 'not read yet'}`;
  }
}

 

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayLibrary();
}


console.log(myLibrary);

function displayLibrary() {
  const shelf = document.getElementById("shelf");
  
  shelf.innerHTML = '';
  myLibrary.forEach((book) => {
    const bookElement = document.createElement('div');
    bookElement.textContent = book.info();
   
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      const index = myLibrary.findIndex(b => b.id === book.id);
      if (index !== -1) {
        myLibrary.splice(index, 1);
        displayLibrary();
      }
    });

    
  const toggleReadButton = document.createElement('button');
  toggleReadButton.textContent = book.read ? 'Mark as Not Read' : 'Mark as Read';
  toggleReadButton.addEventListener('click', () => {
    book.toggleReadStatus();
    displayLibrary();
  });
 
  bookElement.appendChild(removeButton);
  bookElement.appendChild(toggleReadButton);
  shelf.appendChild(bookElement);
});
}

Book.prototype.toggleReadStatus = function() {
  this.read = !this.read;
};




document.addEventListener('DOMContentLoaded', () => {
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 310, true);
addBookToLibrary('1984', 'George Orwell', 328, false);
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 281, true);
console.log(myLibrary);
displayLibrary();


const addBookButton = document.getElementById('add-book-button');
const addBookDiolog = document.getElementById('add-book-dialog');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const selectReadInput = document.getElementById('read-status');
const submitBookButton = document.getElementById('submit-button');
const cancelButton = document.querySelector('button[value="cancel"]');

addBookButton.addEventListener('click', () => {
    addBookDiolog.showModal();
});

cancelButton.addEventListener('click', () => {
    addBookDiolog.close();
});

addBookDiolog.addEventListener("close", () => {
    addBookButton.returnValue == "default"
    ? "No return value"
    : `Book added: ${addBookButton.returnValue}`;
});

submitBookButton.addEventListener('click', (event) => {
    event.preventDefault();
      console.log('Title input:', titleInput);
    console.log('Author input:', authorInput);
    console.log('Pages input:', pagesInput);
    console.log('Read status input:', selectReadInput);

    const title = titleInput.value;
    const author = authorInput.value;
    const pages = parseInt(pagesInput.value);
    const read = selectReadInput.value === 'read';
    
    addBookToLibrary(title, author, pages, read);

     titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    selectReadInput.value = 'not-read';
    
   
    addBookDiolog.close();

    });
});


