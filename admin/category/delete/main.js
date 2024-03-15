const modal = document.querySelector(".modal");
const iconCloseModal = document.querySelector(".modal__header i");
const buttonCloseModal = document.querySelector(".modal__footer .close");
const buttonActiveModal = document.querySelector(".modal__footer .danger");

function toggleModal() {
  modal.classList.toggle("hide");
}

iconCloseModal.addEventListener("click", toggleModal);
buttonCloseModal.addEventListener("click", toggleModal);
buttonActiveModal.addEventListener("click", toggleModal);
