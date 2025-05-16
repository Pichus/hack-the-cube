// ####################################################
// ||                                                ||
// ||  Це вже просто код сайту, тут нічого цікавого  ||
// ||                                                ||
// ####################################################


let validateScheduleButtonElement =
  document.getElementById("validate_schedule");

validateScheduleButtonElement.addEventListener("click", () => {
  if (isScheduleValid()) {
    validateScheduleButtonElement.setAttribute("aria-busy", "true");
    setTimeout(() => {
      window.location.replace("../tasks/4.html");
    }, 1000);
  }
});

function isScheduleValid() {
  let result = true;

  let inputSubjectElements = document.querySelectorAll("td#subject > input");
  let inputTeacherElements = document.querySelectorAll("td#teacher > input");

  let realSubjectElements = document.querySelectorAll(".real-class");

  for (let i = 0; i < realSubjectElements.length; i++) {
    let currentInputSubjectElement = inputSubjectElements[i];
    let currentInputTeacherElement = inputTeacherElements[i];

    let currentRealSubject = realSubjectElements[i].dataset.name;
    let currentRealTeacher = realSubjectElements[i].dataset.teacher;

    let subjectsEqual = currentInputSubjectElement.value == currentRealSubject;
    let teachersEqual = currentInputTeacherElement.value == currentRealTeacher;

    updateInputElements(
      subjectsEqual,
      teachersEqual,
      currentInputSubjectElement,
      currentInputTeacherElement
    );

    if (!(subjectsEqual && teachersEqual)) {
      result = false;
    }
  }

  return result;
}

function updateInputElements(
  subjectsEqual,
  teachersEqual,
  subjectElement,
  teacherElement
) {
  if (subjectsEqual) {
    subjectElement.setAttribute("aria-invalid", "false");
  } else {
    subjectElement.setAttribute("aria-invalid", "true");
  }

  if (teachersEqual) {
    teacherElement.setAttribute("aria-invalid", "false");
  } else {
    teacherElement.setAttribute("aria-invalid", "true");
  }
}
