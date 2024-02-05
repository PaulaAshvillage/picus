const button = document.querySelector("#past-shows");
const table = document.querySelector("#past-shows-table");
button.addEventListener("click", function () {
  table.classList.remove("table-hidden");
  table.classList.add("table");
  button.classList.add("btn-hidden");
});
