// ####################################################
// ||                                                ||
// ||  Це вже просто код сайту, тут нічого цікавого  ||
// ||                                                ||
// ####################################################



let formElement = document.getElementById("form");
let mainElement = document.getElementById("main");
let loadingElementCode =
  '<h1>Відправляємо заявку...</h1><progress value="" max="100" id="progress"/>';

let loadingElement = document.createElement("div");
loadingElement.innerHTML = loadingElementCode;

function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
    (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
  );
}

formElement.addEventListener("submit", async () => {
  const formData = new FormData(formElement);
  let firstName = formData.get("firstName");
  let lastName = formData.get("lastName");

  localStorage.setItem("firstName", firstName);
  localStorage.setItem("lastName", lastName);
  localStorage.setItem("userId", uuidv4());

  let mainElement = document.getElementById("main");
  mainElement.innerHTML = "";

  mainElement.appendChild(loadingElement);
  setTimeout(() => {
    window.location.replace("2.html");
  }, 1000);
});
