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
