let button = document.getElementById("button_E");
let number = document.getElementById("numberID");

let score1 = 0;
let score2 = 0;
let scoreText1 = document.getElementById("h3Num1");
let scoreText2 = document.getElementById("h3Num2");

let increment1 = 0;
let increment2 = 0;
let potion1 = document.getElementById("luck_potion_kenidh");
let potion2 = document.getElementById("luck_potion_41dih");

const global1 = 67;
const global2 = 41;

let boost1 = 0;
let boost2 = 0;

function updatePotions() {
    potion1.style.display = increment1 > 0 ? "block" : "none";
    potion2.style.display = increment2 > 0 ? "block" : "none";
}

potion1.onclick = function () {
    if (increment1 > 0) {
        increment1--;
        boost1 += 3;
        updatePotions();
    }
};

potion2.onclick = function () {
    if (increment2 > 0) {
        increment2--;
        boost2 += 3;
        updatePotions();
    }
};

button.onclick = function () {
    let chance1 = Math.floor(Math.random() * 100) + 1;
    let chance2 = Math.floor(Math.random() * 100) + 1;

    if (chance1 >= 90) increment1++;
    if (chance2 >= 90) increment2++;

    updatePotions();

    let randomNumber = Math.floor(Math.random() * 100) + 1;

    if (boost1 > 0 && randomNumber >= 60 && randomNumber <= 75) {
        randomNumber = global1;
    }
    if (boost2 > 0 && randomNumber >= 30 && randomNumber <= 45) {
        randomNumber = global2;
    }

    if (randomNumber === global1) {
        score1++;
        scoreText1.textContent = `score: ${score1}`;
        number.style.color = "rgb(255, 0, 0)";
    } else if (randomNumber === global2) {
        score2++;
        scoreText2.textContent = `score: ${score2}`;
        number.style.color = "rgb(0, 128, 0)";
    } else {
        number.style.color = "rgb(0, 0, 0)";
    }

    if (boost1 > 0) boost1--;
    if (boost2 > 0) boost2--;

    number.textContent = randomNumber;
};
