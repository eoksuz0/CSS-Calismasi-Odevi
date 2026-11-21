const form = document.querySelector("#form");
const emailInput = document.querySelector("#email");

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();

  if (email === "" || !isValidEmail(email)) {
    form.classList.add("form--error");
    return;
  }

  form.classList.remove("form--error");
  emailInput.value = "";
});