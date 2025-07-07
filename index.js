const myLibrary = [
  {
    author: "George Orwell",
    title: "1984",
    pages: 328,
    read: true
  },
  {
    author: "Harper Lee",
    title: "To Kill a Mockingbird",
    pages: 281,
    read: false
  },
  {
    author: "J.K. Rowling",
    title: "Harry Potter and the Sorcerer’s Stone",
    pages: 309,
    read: true
  },
  {
    author: "F. Scott Fitzgerald",
    title: "The Great Gatsby",
    pages: 180,
    read: false
  },
  {
    author: "J.R.R. Tolkien",
    title: "The Hobbit",
    pages: 295,
    read: false
  }
];

// the constructor...
function Book(title, author, pages, read) 
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function displayBooks() {
  const container = document.getElementById('details');
  container.innerHTML = '';

  myLibrary.forEach(book => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Status:</strong> ${book.read ? "Read ✅" : "Not Read ❌"}</p>
    `;

    container.appendChild(bookCard);
  });
}


window.addEventListener('DOMContentLoaded', () => {
  displayBooks();
});


/*
function addBookToLibrary() {
  // take params, create a book then store it in the array
}

*/