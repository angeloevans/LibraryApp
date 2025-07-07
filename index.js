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

function Book(title, author, pages, read) 
{
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function displayBooks() {
  const container = document.getElementById('details')
  container.innerHTML = ''
  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement('div')
    bookCard.classList.add('book-card')
    bookCard.innerHTML = `
      <h3 class="book-title"> ${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Status:</strong> ${book.read ? "Read ✅" : "Not Read ❌"}</p>
      <button class="delete-button" data-index="${index}">Delete from Library</button>
    `;

    container.appendChild(bookCard);
  });
}

function deleteButtons() {
  const deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach(button => {
      button.addEventListener('click', () => {
        const bookIndex = parseInt(button.getAttribute('data-index'), 10);
        myLibrary.splice(bookIndex, 1);
        
        console.log("Book index is deleted!",bookIndex)
        displayBooks();
      });
    });
  }


function addBookToLibrary() {
  const author = document.getElementById('author').value
  const title = document.getElementById('title').value
  const pages = parseInt(document.getElementById('pages').value, 10)
  const read = document.getElementById('read').checked
  const newBook = new Book(title, author, pages, read)
  myLibrary.push(newBook)
  console.log(myLibrary, "Library:")
  console.log("I entered New Values:", author, title, pages, read)
  displayBooks()
  document.querySelector('.addBook').reset()
  return false
}

document.getElementById('addBtn').addEventListener('click', addBookToLibrary)

displayBooks()
deleteButtons()