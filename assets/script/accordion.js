const buttons = document.querySelectorAll(".p-accordion__button");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    handleAccordion(button);
  });
});

function handleAccordion(button) {
  const accordion = button.parentElement;
  const isOpen = button.parentElement.classList.contains(
    "p-accordion__item--open"
  );
  if (isOpen) {
    accordion.classList.remove("p-accordion__item--open");
  } else {
    accordion.classList.add("p-accordion__item--open");
  }
}
