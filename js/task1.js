let formElement = document.getElementById("form");
let mainElement = document.getElementById("main");
let loadingElementCode =
  '<h1>Відправляємо заявку...</h1><progress value="" max="100" id="progress"/>';

let loadingElement = document.createElement("div");
loadingElement.innerHTML = loadingElementCode;

formElement.addEventListener("submit", async () => {
  let mainElement = document.getElementById("main");
  mainElement.innerHTML = "";

  mainElement.appendChild(loadingElement);
  setTimeout(() => {
    window.location.replace("2.html");
  }, 1000);
});
