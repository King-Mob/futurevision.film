//place text in circles

const circleRotations = [-45, 90, 45];
//const circleRotations = [0, 0, -45];

const enter = () => {
    const lockContainer = document.getElementById("lock-container");
    lockContainer.style.animation = "inAndThrough 5s forwards";

    setTimeout(() => {
        lockContainer.style.display = "none";
    }, 5000)

    const descriptionContainer = document.getElementById("description-container");
    descriptionContainer.style.display = "flex";
    descriptionContainer.style.animation = "fromBehind 5s forwards";
}

const circles = document.getElementsByClassName("circle");
const enterButton = document.getElementById("enter-button");

let index = 0;
for (const circle of circles) {
    const letters = circle.innerHTML.split("");
    circle.innerHTML = '';
    letters.map(letter => {
        const letterSpan = document.createElement("span");
        letterSpan.innerHTML = letter;
        letterSpan.classList.add("letter");
        // letterSpan.style.transform = "rotate(-30deg) translate(-90%)";
        circle.append(letterSpan);
    })

    circle.style.transform = `rotate(${circleRotations[index]}deg)`;
    const circleIndex = index;

    circle.onclick = () => {
        circleRotations[circleIndex] += 45;
        circleRotations[circleIndex] %= 360;
        circle.style.transform = `rotate(${circleRotations[circleIndex]}deg)`;

        if (circleRotations.reduce((prev, current) => prev + current) === 0) {
            enterButton.onclick = enter;
            enterButton.innerHTML = "Enter";
        }
        else {
            enterButton.onclick = () => { };
            enterButton.innerHTML = "";
        }
    }

    index++;
}

