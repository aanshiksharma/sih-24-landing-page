const loginButtons = document.querySelectorAll(".loginButton");
const signupButtons = document.querySelectorAll(".signupButton");
const crossButtons = document.querySelectorAll(".cross-button");

const loginModal = document.querySelector("#loginModal");
const signupModal = document.querySelector("#signupModal");

Array.from(loginButtons).forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector("#loginWindow").style.display = "grid";
    signupModal.style.display = "none";
    loginModal.style.display = "grid";
  });
});

Array.from(signupButtons).forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector("#loginWindow").style.display = "grid";
    loginModal.style.display = "none";
    signupModal.style.display = "grid";
  });
});

Array.from(crossButtons).forEach((button) => {
  button.addEventListener("click", () => {
    loginModal.style.display = "none";
    signupModal.style.display = "none";
    document.querySelector("#loginWindow").style.display = "none";
  });
});

// Text Animation

const animatedTextBox = document.querySelector(".animated-text");

let textArr = [
  "Government and Private Jobs.",
  "Mentorship Programs.",
  "Internships, Courses and Career Guidance.",
  "Resume Building Resources.",
  "AI-based matchmaking with Professionals.",
];

let displayArr = [];
let isDeleting = false;

let arrIndex = 0;
let strIndex = 0;

let animationTime = 100;
let waitTime = 1500;

animateText();

// The function that aimates the text
function animateText() {
  animatedTextBox.innerHTML = displayArr.join("");

  if (arrIndex < textArr.length) {
    if (!isDeleting && strIndex == textArr[arrIndex].length) {
      isDeleting = true;
    }

    if (isDeleting && strIndex >= 0) {
      displayArr.pop();
      strIndex--;
    }

    if (!isDeleting && strIndex < textArr[arrIndex].length) {
      displayArr.push(textArr[arrIndex][strIndex]);
      strIndex++;
    }

    if (isDeleting && strIndex < 0) {
      arrIndex++;
      strIndex = 0;
      isDeleting = false;
    }

    if (arrIndex >= textArr.length) arrIndex = 0;
  }

  if (isDeleting && strIndex == textArr[arrIndex].length - 1)
    setTimeout(animateText, waitTime);
  else setTimeout(animateText, animationTime);
}
