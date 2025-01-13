//place text in circles

const circleRotations = [-45, 90, 45];

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
            enterButton.style.display = "block";
        }
    }

    index++;
}


enterButton.onclick = () => {
    const html = document.getElementsByTagName("html")[0];
    html.style.animation = "inAndThrough 5s";
}
