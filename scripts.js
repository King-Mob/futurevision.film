//place text in circles

//const circleRotations = [-45, 90, 45];
const circleRotations = [0, 0, -45];

const circles = document.getElementsByClassName("circle");
const enterButton = document.getElementById("enter-button");

const enter = () => {
    enterButton.style.animation = `lockIn 5s forwards`;
    let offset = 1.5;
    let index = 0
    for (const circle of circles) {
        if (index > 0) {
            circle.style.animation = `lockIn 5s ${offset}s forwards`;
        }
        else {
            circle.style.animation = `fadeIn 4s 1s reverse forwards`;
        }
        index++
        offset -= 0.5;
    }


    const descriptionContainer = document.getElementById("description-circle");
    descriptionContainer.style.display = "flex";
    descriptionContainer.style.animation = "fadeIn 5s 2s forwards";
}

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

