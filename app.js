// var btns = document.querySelectorAll(".delete");
// btns.forEach(function(btn) {
//   btn.addEventListener("click", function(e) {
//     e.target.parentElement.remove();
//     console.log("click");
//   });
// });

// var books = document.querySelectorAll("#book-list li .name");
// Array.from(books).forEach(function(book) {
//   book.textContent += "- limited Time Only";
// });

// const banner = document.querySelector("#page-banner");

// console.log("#page-banner node type is:", banner.nodeType);
// console.log("#page-banner node name is:", banner.nodeName);
// console.log("#page-banner has child nodes:", banner.hasChildNodes());

// const clonedBanner = banner.cloneNode(true);
// console.log(clonedBanner);

const bookList = document.querySelector("#book-list");

console.log("the parent node is:", bookList.parentNode);
console.log("the parent element is:", bookList.parentElement);
console.log("the parent element is:", bookList.parentElement.parentElement);

//Traversering children
//childNodes will give you "breaks" too as
console.log("the parent element is:", bookList.childNodes);
//Only children without breaks
console.log(bookList.children);
