const emailInput = document.getElementById("email-input");
const pwInput = document.getElementById("pw-input");
const pushButton = document.getElementById("push-button");

function onInput(event) {
  const id = emailInput.value;
  const pw = pwInput.value;

  if (id.length > 0 && pw.length > 0) {
    pushButton.disabled = false;
  }
}

emailInput.addEventListener("input", onInput);
pwInput.addEventListener("input", onInput);
