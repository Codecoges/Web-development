const boxes = document.querySelectorAll(".box");
const body = document.querySelector("body");

boxes.forEach(function (box) {
  box.addEventListener("click", function (event) {
    if (event.target.id === "grey") {
      body.style.backgroundColor = event.target.id;
    } else if (event.target.id === "white") {
      body.style.backgroundColor = event.target.id;
    } else if (event.target.id === "blue") {
      body.style.backgroundColor = event.target.id;
    } else if (event.target.id === "yellow") {
      body.style.backgroundColor = event.target.id;
    }
  });
});
