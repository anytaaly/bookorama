//Remove on delete button
var list = document.querySelector("ul");
list.addEventListener("click", function(e) {
  if (e.target.className == "delete") {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

//Add the book list to the list
const addForm = document.getElementById("add-book");
addForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;

  //create Element
  const li = document.createElement("li");
  const bookName = document.createElement("span");
  const deleteBtn = document.createElement("span");

  //add content
  deleteBtn.textContent = "delete";
  bookName.textContent = value;

  //apply class
  deleteBtn.classList.add("delete");
  bookName.classList.add("name");

  //Append to DOM
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});

//hide books
const hideBox = document.querySelector("#hide");
hideBox.addEventListener("change", function(e) {
  if (hideBox.checked) {
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
});

//filter books
const searchBar = document.forms["search-books"].querySelector("input");
searchBar.addEventListener("keyup", function(e) {
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName("li");
  Array.from(books).forEach(function(book) {
    const title = book.firstElementChild.textContent;
    if (title.toLowerCase().indexOf(term) != -1) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
});
