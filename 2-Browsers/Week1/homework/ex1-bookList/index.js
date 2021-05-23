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
  const newUl = document.createElement('ul');
  let list;
  let image;

  // Creating Elements by Using the For Loop
  for (let i = 0; i < books.length; i++) {
    newUl
      .appendChild((list = document.createElement('li')))
      .appendChild(
        (para = document.createElement('p'))
      ).textContent = `${books[i].title} - ${books[i].author} `;

    list.appendChild((image = document.createElement('IMG')));
    list.style.margin = '20px 20px';
    list.style.padding = '10px';
    image.style.maxWidth = '60%';
    image.alt = `Authors : ${books[i].author}`;

    if (books[i].author === 'Don Norman') {
      image.src = './assets/the_design_of_everyday_things.jpg';
    } else if (books[i].author === 'Brian Christian') {
      image.src = './assets/the_most_human_human.jpg';
    } else {
      image.src = './assets/the_pragmatic_programmer.jpg';
    }

    if (books[i].alreadyRead === true) {
      list.style.backgroundColor = 'green';
    } else {
      list.style.backgroundColor = 'red';
    }
  }
  newUl.style.listStyle = 'none';
  newUl.style.display = 'inline-flex';

  return newUl;
}

const ulElement = createBookList(myBooks);

document.querySelector('#bookList').appendChild(ulElement);
