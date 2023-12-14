const modal = document.querySelector(".modal");
const btn = document.querySelector(".btn");
const close = document.querySelector(".close");

function openModal(e) {
  e.preventDefault();
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}

btn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);
