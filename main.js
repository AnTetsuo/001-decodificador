const textArea = document.getElementsByClassName("message")[0];
const resultArea = document.getElementsByClassName("result")[0];

const KEY_MAP = {
  "a": "ai",
  "e": "enter",
  "i": "imes",
  "o": "ober",
  "u": "ufat",
}

textArea.addEventListener("click", resetInnerText)

function getMessage(name) {
  const operation = name == "encrypt";
  const message = document.getElementsByClassName("message")[0]
    .textContent
    .trimEnd()
    .trimStart();

  if (operation) {
    const letters = message.split("")
    const mapped = letters.map(letter => encrypt(letter))
    const encrypted = mapped.join("");
    
    return resultArea.innerHTML = `
      <h2>Sua mensagem criptografada</h2>
      <p>${encrypted}</p>
    `;
  }

  const decrypted = decrypt(message);
  resultArea.innerHTML = `
    <h2>Sua mensagem descriptografada</h2>
    <p>${decrypted}</p>
  `;
}

function encrypt(char) {
  if (KEY_MAP[char]) return KEY_MAP[char]

  return char;
}

function decrypt(message) {
  let messageMut = message;
  const decryptValues = Object.keys(KEY_MAP);
  const cryptValues = Object.values(KEY_MAP);
  const occur = cryptValues.map((key) => {
    return message.includes(key);
  })
  cryptValues.forEach((key, index) => {
    if (occur[index]) 
      messageMut = messageMut.replaceAll(key, decryptValues[index])
  })

  return messageMut;
}

function resetInnerText() {
  const defaultMessage = document.getElementById("placeholderText");
  defaultMessage.textContent = "";
  defaultMessage.innerHTML = "<br>"

  textArea.removeEventListener("click", resetInnerText);
}
