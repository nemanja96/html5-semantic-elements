let elements = document.getElementsByClassName("elements");
let a;

let semanticElements = document
  .getElementById("semantic-elements")
  .querySelectorAll("ul li");

semanticElements.forEach(function (element, index) {
  element.addEventListener("click", function () {
    if (typeof a == "undefined" || a == index) {
      elements[index].classList.add("change-color");
    } else if (a !== index) {
      elements[a].classList.remove("change-color");
      elements[index].classList.add("change-color");
    }
    a = index;
  });
});
