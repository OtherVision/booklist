//Variables

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const isbnInput = document.querySelector("#isbn");
const button = document.querySelector(".btn");
const bookList = document.querySelector("#book-list");

button.addEventListener("click", function(e) {

  e.preventDefault();

  if(
    titleInput.value == "" &&
    authorInput.value == "" &&
    isbnInput.value == "" 
  
  ) {
    alert("Enter any input");
  } else {
    const bookListRow = document.createElement("tr");


    const newTitle = document.createElement("th");
    newTitle.innerHTML = titleInput.value;
    bookListRow.appendChild(newTitle);
    
    

    const newAuthor = document.createElement("th");
    newAuthor.innerHTML = authorInput.value;
    bookListRow.appendChild(newAuthor);
   

    const newISBN = document.createElement("th");
    newISBN.innerHTML = isbnInput.value;
    bookListRow.appendChild(newISBN);
   
    bookList.appendChild(bookListRow)


  };

});

function adicionar() {
  let books = bookListRow;
  localStorage.setItem("books", JSON.stringify(books));
  sessionStorage.setItem("books", JSON.stringify(books));
  localStorage.getItem("books");
  return true;
};
 







