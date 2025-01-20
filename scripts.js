//place text in circles

/*
const descriptionText = document.getElementById("description-text");
const letters = descriptionText.innerHTML.split("");
descriptionText.innerHTML = '';
letters.forEach((letter, i) => {
    const letterSpan = document.createElement("span");
    letterSpan.innerHTML = letter;
    letterSpan.classList.add("letter-description");
    const angle = 6 * i;
    letterSpan.style.transform = `rotate(${angle}deg) translate(-11rem) rotate(-${angle}deg)`;
    descriptionText.append(letterSpan);
})*/

/*
const emailText = document.getElementById("email-text");
const emailLetters = emailText.innerHTML.split("");
emailText.innerHTML = '';
emailLetters.forEach((letter, i) => {
    const letterSpan = document.createElement("span");
    letterSpan.innerHTML = letter;
    letterSpan.classList.add("letter-email");
    const angle = 250 + 6 * i;
    letterSpan.style.transform = `rotate(-${angle}deg) translate(11rem) rotate(${angle}deg)`;
    emailText.append(letterSpan);
})
*/

const randomPosition = () => 45 + Math.round(Math.random() * 6) * 45;

//const circleRotations = [randomPosition(), randomPosition(), randomPosition()];
const circleRotations = [0, 0, -45];

const circles = document.getElementsByClassName("circle");
const enterButton = document.getElementById("enter-button");

const enter = () => {
  const circle1 = document.getElementById("circle1");
  const circle2 = document.getElementById("circle2");
  const circle3 = document.getElementById("circle3");

  enterButton.style.animation = `lockIn 5s forwards`;
  circle3.style.animation = "lockIn 5s 0.5s forwards";
  circle2.style.animation = "lockIn 5s 1s forwards";
  circle1.style.animation = "lockIn 5s 1.5s forwards";

  for (const child of circle1.children) {
    child.style.animation = "fadeIn reverse 4s 1.5s forwards";
  }

  const descriptionContainer = document.getElementById("description-circle");
  descriptionContainer.style.animation = "fadeIn 3s 1s forwards";

  setTimeout(() => {
    circle1.style.zIndex = "-1";
  }, 6000);
};

let index = 0;
for (const circle of circles) {
  const letters = circle.innerHTML.split("");
  circle.innerHTML = "";
  letters.forEach((letter) => {
    const letterSpan = document.createElement("span");
    letterSpan.innerHTML = letter;
    letterSpan.classList.add("letter");
    // letterSpan.style.transform = "rotate(-30deg) translate(-90%)";
    circle.append(letterSpan);
  });

  circle.style.transform = `rotate(${circleRotations[index]}deg)`;
  const circleIndex = index;

  circle.onclick = () => {
    circleRotations[circleIndex] += 45;
    circleRotations[circleIndex] %= 360;
    circle.style.transform = `rotate(${circleRotations[circleIndex]}deg)`;

    if (circleRotations.reduce((prev, current) => prev + current) === 0) {
      enterButton.onclick = enter;
      enterButton.innerHTML = "Enter";
      enterButton.classList.remove("wrong");
    } else {
      enterButton.onclick = () => {};
      enterButton.innerHTML = "";
      enterButton.classList.add("wrong");
    }
  };

  index++;
}
