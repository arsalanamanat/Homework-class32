//cspell: disable
/*
  
 ** Exercise 1: The book list **
  I'd like to display my three favorite books inside a nice webpage!
  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).
  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
*/
//cspell: enable

const myBooks = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    isbn: '978-0465050659',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    isbn: '978-1617933431',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    isbn: '978-0201616224',
    alreadyRead: true,
  },
];

function createBookList(books) {
  // your code goes in here, return the ul element
  // declaring the Variable to store the data in Order to use them for future reference
  const newUl = document.createElement('ul');
  let listItems;
  let images;
  let paragraph;

  // creating li, P and IMG elements using a forEach Loop
  books.forEach((book) => {
    newUl
      .appendChild((listItems = document.createElement('li')))
      .appendChild(
        (paragraph = document.createElement('p'))
      ).textContent = `${book.title} - ${book.author}`;

    listItems.appendChild((images = document.createElement('IMG')));

    // Using if Statement to show Book Cover with respect to th author od the book
    if (book.author === 'Don Norman') {
      images.src = './assets/the_design_of_everyday_things.jpg';
      images.alt = `Name:${book.title} - Author:${book.author}`;
    } else if (book.author === 'Brian Christian') {
      images.src = './assets/the_most_human_human.jpg';
      images.alt = `Name:${book.title} - Author:${book.author}`;
    } else {
      images.src = './assets/the_pragmatic_programmer.jpg';
      images.alt = `Name:${book.title} - Author:${book.author}`;
    }

    // Using if statement to check if the book is already read or not

    if (book.alreadyRead === true) {
      listItems.style.backgroundColor = 'green';
    } else {
      listItems.style.backgroundColor = 'red';
    }

    newUl.style.listStyle = 'none';
    newUl.style.padding = '20px';
    newUl.style.display = 'inline-flex';
    listItems.style.margin = '15px';
    listItems.style.minWidth = '350px';
    listItems.style.width = '25%';
    listItems.style.padding = '10px';
    images.style.maxWidth = '60%';
  });

  return newUl;
}

const ulElement = createBookList(myBooks);

document.querySelector('#bookList').appendChild(ulElement);
