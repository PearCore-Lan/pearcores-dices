const hv = document.getElementById("health_value");
const rv = document.getElementById("rounds_value");
const ppv = document.getElementById("pearpits_value");
const pv = document.getElementById("pears_value");

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function big() {
    document.getElementById("options").style.display = "none";

    var first_img = document.getElementById("first");
    var second_img = document.getElementById("second");
    var third_img = document.getElementById("third");

    var first = Math.round(Math.random()*5+1);
    var second = Math.round(Math.random()*5+1);
    var third = Math.round(Math.random()*5+1);

    const audio = new Audio("shake.mp3");
    audio.play();
    await sleep(4000);

    first_img.src = String(first) + ".jpg";
    second_img.src = String(second) + ".jpg";
    third_img.src = String(third) + ".jpg";

    if(first+second+third > 9) {
        if(Math.round(Math.random()) == 1)
            document.getElementById("pears_value").innerHTML = Number(document.getElementById("pears_value").innerText) + 1;
    }
    else {
        document.getElementById("health_value").innerHTML = Number(document.getElementById("health_value").innerText) - Number(document.getElementById("pearpits_value").innerText)*10;
    }
    document.getElementById("pearpits_value").innerHTML = 1;

    if(Number(document.getElementById("health_value").innerText) <= 0) {
        window.alert("游戏结束，你活了" + Number(document.getElementById("rounds_value").innerText) + "回合！");
        location.reload();
    }

    document.getElementById("options").style.display = "flex";
    rv.innerHTML = Number(rv.innerText) + 1;
}

async function small() {
    document.getElementById("options").style.display = "none";

    var rounds = document.getElementById("rounds_value");
    var first_img = document.getElementById("first");
    var second_img = document.getElementById("second");
    var third_img = document.getElementById("third");

    rounds.innerHTML = Number(rounds.innerText) + 1;

    var first = Math.round(Math.random()*5+1);
    var second = Math.round(Math.random()*5+1);
    var third = Math.round(Math.random()*5+1);

    const audio = new Audio("shake.mp3");
    audio.play();
    await sleep(4000);

    first_img.src = String(first) + ".jpg";
    second_img.src = String(second) + ".jpg";
    third_img.src = String(third) + ".jpg";

    if(first+second+third < 10) {
        if(Math.round(Math.random()) == 1) {
            document.getElementById("pears_value").innerHTML = Number(document.getElementById("pears_value").innerText) + 1;
        }
    }
    else {
        document.getElementById("health_value").innerHTML = Number(document.getElementById("health_value").innerText) - Number(document.getElementById("pearpits_value").innerText)*10;
        document.getElementById("pearpits_value").innerHTML = 1;
    }

    if(Number(document.getElementById("health_value").innerText) <= 0) {
        window.alert("游戏结束，你活了" + Number(document.getElementById("rounds_value").innerText) + "回合！");
        window.open("https://pearpit.github.io/pearpits-dices", "_self");
    }

    document.getElementById("options").style.display = "flex";
}

function eat() {
    if(Number(document.getElementById("pears_value").innerText) == 0 || Number(document.getElementById("health_value").innerText) == 100) {
        return;
    }
    document.getElementById("health_value").innerHTML = Number(document.getElementById("health_value").innerText) + 10;
    document.getElementById("pears_value").innerHTML = Number(document.getElementById("pears_value").innerText) - 1;
    document.getElementById("pearpits_value").innerHTML = Number(document.getElementById("pearpits_value").innerText) + 1;
}