const textArea = document.getElementsByClassName("message")[0];
const resultArea = document.getElementsByClassName("result")[0];

const KEY_MAP = {
  "e": "enter",
  "i": "imes",
  "a": "ai",
  "o": "ober",
  "u": "ufat",
}

textArea.addEventListener("click", resetInnerText)

function getMessage(name) {
  const message = document.getElementsByClassName("message")[0].textContent;

  if (name == "encrypt") {
    const letters = message
    .trimEnd()
    .trimStart()
    .split("")
    const mapped = letters.map(letter => encrypt(letter))
    const encrypted = mapped.join("");
    
    return resultArea.innerHTML = `
      <h2>Sua mensagem criptografada</h2>
      <p>${encrypted}</p>
      `;
  }
}

function encrypt(char) {
  if (KEY_MAP[char]) return KEY_MAP[char]

  return char;
}

function resetInnerText() {
  const defaultMessage = document.getElementById("placeholderText");
  defaultMessage.textContent = "";
  defaultMessage.innerHTML = "<br>"

  textArea.removeEventListener("click", resetInnerText);
}
