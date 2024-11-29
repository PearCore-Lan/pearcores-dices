const hv = document.getElementById("health_value");
const rv = document.getElementById("rounds_value");
const ppv = document.getElementById("pearpits_value");
const pv = document.getElementById("pears_value");
const sv = document.getElementById("substitutes_value");

new Image().src = "https://pearpit.github.io/pearpits-dices/4.jpg";
new Image().src = "https://pearpit.github.io/pearpits-dices/5.jpg";
new Image().src = "https://pearpit.github.io/pearpits-dices/6.jpg";

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function shv(value) {
    hv.innerHTML = Number(value);
}

function srv(value) {
    rv.innerHTML = Number(value);
}

function sppv(value) {
    ppv.innerHTML = Number(value);
}

function spv(value) {
    pv.innerHTML = Number(value);
}

function ssv(value) {
    sv.innerHTML = Number(value);
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
            pv.innerHTML = Number(pv.innerText) + 1;
    }
    else {
        if(Number(hv.innerText) <= Number(ppv.innerText)*10 && Number(sv.innerText) > 0) {
            sv.innerHTML = Number(sv.innerText) - 1;
        }
        else
            hv.innerHTML = Number(hv.innerText) - Number(ppv.innerText)*10;
        if(Math.round(Math.random()*5) == 3)
            sv.innerHTML = Number(sv.innerText) + 1;
    }
    ppv.innerHTML = 1;

    if(Number(hv.innerText) <= 0) {
        window.alert("游戏结束，你活了" + Number(rv.innerText) + "回合！");
        location.reload();
    }

    document.getElementById("options").style.display = "flex";
    rv.innerHTML = Number(rv.innerText) + 1;
}

async function small() {
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

    if(first+second+third < 10) {
        if(Math.round(Math.random()) == 1) {
            pv.innerHTML = Number(pv.innerText) + 1;
        }
    }
    else {
        if(Number(hv.innerText) <= Number(ppv.innerText)*10 && Number(sv.innerText) > 0) {
            sv.innerHTML = Number(sv.innerText) - 1;
        }
        else
            hv.innerHTML = Number(hv.innerText) - Number(ppv.innerText)*10;
        if(Math.round(Math.random()*5) == 3)
            sv.innerHTML = Number(sv.innerText) + 1;
    }
    ppv.innerHTML = 1;

    if(Number(hv.innerText) <= 0) {
        window.alert("游戏结束，你活了" + Number(rv.innerText) + "回合！");
        window.open("https://pearpit.github.io/pearpits-dices", "_self");
    }

    document.getElementById("options").style.display = "flex";
    rv.innerHTML = Number(rv.innerText) + 1;
}

function eat() {
    if(Number(pv.innerText) == 0 || Number(hv.innerText) == 100) {
        return;
    }
    hv.innerHTML = Number(hv.innerText) + 10;
    pv.innerHTML = Number(pv.innerText) - 1;
    ppv.innerHTML = Number(ppv.innerText) + 1;
}