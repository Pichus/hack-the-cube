// клас листа, можна не звертати уваги
class Letter {
  sender = "";
  content = "";
  heading = "";
  link = "";
  markedAsRead = false;

  constructor(sender, heading, content, link) {
    this.sender = sender;
    this.heading = heading;
    this.content = content;
    this.link = link;
  }

  markAsRead() {
    this.markedAsRead = true;
  }
}

// список усіх листів користувача
let currentUserMail = [
  new Letter(
    "КНУ",
    "Вітаємо, вас прийнято до КНУ на факультет кібер...",
    "Вітаємо!!!",
    "../mail/enrollment-letter.html"
  ),
  new Letter(
    "Студпарламент ФКНК",
    "Крутючий абітурієнтський чат в тг",
    "Приєднуйся до абітчату!",
    "https://t.me/abit_cyberknu_2025"
  ),
];

// функція, яка викликається, коли користувач натискає на "Оновити пошту"
function refresh() {
  // там далі опис того, що робить ця функція
  loadUserMail(karent_yuser_male);

  // на це можна не зважати :)
  handleMailClick();
}

// функція, яка завантажує усі листи користувача на сторінку
function loadUserMail(userMail) {
  let allMailElement = document.querySelector("table#mail_table > tbody");

  if (userMail.length > 0) {
    let noMailTextElement = document.getElementById("no_mail_text");
    noMailTextElement.remove();
  }

  for (i = 0; i < userMail.length; i++) {
    let letterCode = `
              <th scope="row">${userMail[i].sender}</th>
              <td>${userMail[i].heading}</td>
              <td>${getCurrentDateText()}</td>`;

    let letterElement = document.createElement("tr");
    letterElement.dataset.letterId = i;
    letterElement.innerHTML = letterCode;

    allMailElement.appendChild(letterElement);
  }
}

// ####################################################
// ||                                                ||
// ||  Це вже просто код сайту, тут нічого цікавого  ||
// ||                                                ||
// ####################################################

let refreshButtonElement = document.getElementById("refresh");

refreshButtonElement.addEventListener("click", () => {
  refresh();
});

function getCurrentDateText() {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

function letterClick(letterId) {
  let link = currentUserMail[letterId].link;
  window.location.replace(link);
}

function handleMailClick() {
  document.querySelectorAll("table#mail_table > tbody > tr").forEach((row) => {
    const letterId = row.dataset.letterId;

    row.addEventListener("click", () => {
      letterClick(letterId);
    });
  });
}
