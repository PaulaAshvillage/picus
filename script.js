const button = document.querySelector("#past-shows");
const table = document.querySelector("#past-shows-table");
button.addEventListener("click", function () {
  if (button.innerText === "show less") {
    table.classList.add("table-hidden");
    button.innerText = "show more";
  } else {
    button.innerText = "show less";
    table.classList.remove("table-hidden");
    table.classList.add("table");
  }
});
