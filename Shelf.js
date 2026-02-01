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
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'} ${this.id} book ID`;
  }

}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}


console.log(myLibrary);

function displayLibrary() {
  const shelf = document.getElementById("shelf");
  shelf.innerHTML = '';
  myLibrary.forEach((book) => {
    const bookElement = document.createElement('li');
    bookElement.textContent = book.info();
    shelf.appendChild(bookElement);
  });
}
displayLibrary();

