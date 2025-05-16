import { fakerUK } from "https://esm.sh/@faker-js/faker";

localStorage.setItem("Математичний аналіз", "76");
localStorage.setItem("Алгебра та геометрія", "88");
localStorage.setItem("Вступ до університетських студій", "90");
localStorage.setItem("Дискретна математика", "86");
localStorage.setItem("Програмування", "89");
localStorage.setItem("Англійська мова", "91");

class Student {
  firstName = "";
  lastName = "";
  score = 0;
  isSpecial;

  constructor(firstName, lastName, score, isSpecial = false) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.score = score;
    this.isSpecial = isSpecial;
  }
}

function createRowElement(position, student) {
  let crossMark = `xmark`;
  let checkMark = `check`;

  let scholarship = position <= 10 ? checkMark : crossMark;

  let rowCode = `
    <td>${position}</td>
    <td>${student.firstName}</td>
    <td>${student.lastName}</td>
    <td>${student.score}</td>
    <td><i class="fa-solid fa-${scholarship}"></i></td>`;
  let rowElement = document.createElement("tr");

  if (student.isSpecial) {
    rowElement.setAttribute("class", "td-color-inherit pico-color-purple-400");
  }

  rowElement.innerHTML = rowCode;
  return rowElement;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function generateRandomStudent() {
  let gender = fakerUK.person.gender();
  let firstName = fakerUK.person.firstName(gender);
  let lastName = fakerUK.person.lastName(gender);
  let score = getRandomArbitrary(60, 100).toFixed(2);

  return new Student(firstName, lastName, score);
}

function generateStudentList(numberOfStudents) {
  let studentList = [];

  for (let i = 0; i < numberOfStudents; i++) {
    let student = generateRandomStudent();
    studentList.push(student);
  }

  return studentList;
}

function sortStudentListByScore(studentList) {
  studentList.sort((a, b) => a.score - b.score);
  studentList.reverse();
}

function getCurrentStudent() {
  let subjectScores = [
    localStorage.getItem("Алгебра та геометрія"),
    localStorage.getItem("Англійська мова"),
    localStorage.getItem("Вступ до університетських студій"),
    localStorage.getItem("Дискретна математика"),
    localStorage.getItem("Програмування"),
    localStorage.getItem("Математичний аналіз"),
  ];

  let firstName = localStorage.getItem("firstName");
  let lastName = localStorage.getItem("lastName");

  subjectScores = subjectScores.map((el) => parseFloat(el));

  let averageScore =
    subjectScores.reduce((a, b) => a + b) / subjectScores.length;
  averageScore = averageScore.toFixed(2);

  let currentStudent = new Student(
    firstName,
    lastName,
    averageScore,
    true
  );

  return currentStudent;
}

function renderStudentRowElements(students) {
  let ratingTableElement = document.getElementById("rating");
  ratingTableElement.innerHTML = "";

  let specialStudentIndex = students.findIndex((student) => student.isSpecial);
  if (specialStudentIndex > -1) {
    students.splice(specialStudentIndex, 1);
  }

  students.push(getCurrentStudent());

  sortStudentListByScore(students);

  for (let i = 0; i < students.length; i++) {
    ratingTableElement.appendChild(createRowElement(i + 1, students[i]));
  }
}

function taskCompleted() {
  const modal = document.getElementById("modal_task_done");
  openModal(modal);
  setTimeout(() => {
    window.location.replace("../finish.html");
  }, 2000);
}

let studentList = generateStudentList(49);

renderStudentRowElements(studentList);

window.addEventListener("storage", (event) => {
  if (event.newValue > 100 || event.newValue < 0) {
    localStorage.setItem(event.key, event.oldValue);
    return;
  }

  renderStudentRowElements(studentList);

  let specialStudentIndex = studentList.findIndex(
    (student) => student.isSpecial
  );

  if (specialStudentIndex >= 0 && specialStudentIndex <= 9) {
    setTimeout(() => {
      taskCompleted();
    }, 1000);
  }
});
