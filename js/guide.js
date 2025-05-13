// ####################################################
// ||                                                ||
// ||  Це вже просто код сайту, тут нічого цікавого  ||
// ||                                                ||
// ####################################################


let htmlCode = `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

<h1 id="hello_text">Hello, world!</h1>

<script src="index.js"><\/script>
<\/body>
<\/html>`;


let cssCode = `body {
  background-color: pink;
  padding: 15px
}

h1 {
  font-weight: bold;
  font-size: 25px;
  color: blueviolet;
  font-family: Arial, sans-serif;
}`;

let jsCode = `let counter = 0;

let helloTextElement = document.getElementById("hello_text");
let helloButton = document.getElementById("hello_button");

helloButton.onclick = () => {
  counter++;
  helloTextElement.innerText = "Hello, world!" + counter;
};`;

let htmlCodeElement = document.getElementById("html_code");
let cssCodeElement = document.getElementById("css_code");
let jsCodeElement = document.getElementById("js_code");

let htmlText = document.createTextNode(htmlCode);
let cssText = document.createTextNode(cssCode);
let jsText = document.createTextNode(jsCode);

htmlCodeElement.appendChild(htmlText);
cssCodeElement.appendChild(cssText);
jsCodeElement.appendChild(jsText);

hljs.highlightAll();

let counter = 0;

let helloTextElement = document.getElementById("hello_text");
let helloButton = document.getElementById("hello_button");

helloButton.onclick = () => {
  counter++;
  helloTextElement.innerText = "Hello, world!" + counter;
};