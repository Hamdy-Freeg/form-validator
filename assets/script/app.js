// Show error message
function showError(input, message = "This feild is requierd") {
  const formControl = input.parentElement;
  formControl.classList = "content error";
  const small = formControl.lastElementChild;
  small.textContent = message;
}

// show success message
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList = "content success";
}

// check email is valid
function isValidEmail(email) {
  const re =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return re.test(String(email).toLowerCase());
}

// Event listeners
form.addEventListener("submit", (ele) => {
  ele.preventDefault();

  if (userName.value === "") {
    showError(userName);
  } else if (userName.value.length < 3 && !0) {
    showError(userName, "Username must be at least 3 characters    ");
  } else {
    showSuccess(userName);
  }

  if (email.value === "") {
    showError(email);
  } else if (!isValidEmail(email.value)) {
    showError(email, "Email is not valid");
  } else {
    showSuccess(email);
  }

  if (password.value === "") {
    showError(password);
  } else if (password.value.length < 6 && !0) {
    showError(password, "password must be at least 3 character");
  } else {
    showSuccess(password);
  }

  if (confirm.value === "") {
    showError(confirm);
  } else if (confirm.value === password.value) {
    showSuccess(confirm);
  } else {
    showError(confirm, "Password don't match");
  }
});
