const button = document.querySelector("#past-shows");
const table = document.querySelector("#past-shows-table");
button.addEventListener("click", function () {
  table.classList.toggle("table-hidden");
  button.style.display = "none";
});
