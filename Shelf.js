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

const TheHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 310, true, crypto.randomUUID());
console.log(TheHobbit.info());

function addBookToLibrary(book) {
  myLibrary.push(book);
}
addBookToLibrary(TheHobbit);
console.log(myLibrary);

