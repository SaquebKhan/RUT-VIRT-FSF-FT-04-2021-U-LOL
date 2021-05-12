var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;
  console.log(event.target);

if (element.matches(".box")) {
  var state = element.getAttribute("data-state");

  if (state ==="hidden") {
    element.textContent = element.dataset.number; //element.getattribute("data-number")
    element.dataset.state = "visible";
  }
else {
  element.textContent = "";
  element.setAttribute("data-state", "hidden")
  }
}
  // TODO: Complete function
});
