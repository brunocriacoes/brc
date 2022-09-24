
const $image = document.querySelector("body svg")

const play = {
    size: 120,
    x: 45,
    y: 75
}

let direction = {
    x: 4,
    y: 4,
}

var colors = [
    "#ecf0f1",
    "#8e44ad",
    "#3498db",
    "#2ecc71",
    "#1abc9c",
    "#e67e22",
    "#e74c3c",
]

const tela = {
    w: window.innerWidth,
    h: window.innerHeight,
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

var color = colors[0]
function loop() {




    if (play.x > (tela.w - (play.size + 7))) {
        direction.x = direction.x * -1
        color = colors[getRandomInt(0, colors.length)]
    }

    if (play.x < -1) {
        direction.x = direction.x * -1
        color = colors[getRandomInt(0, colors.length)]
    }

    if (play.y < -1) {
        direction.y = direction.y * -1
        color = colors[getRandomInt(0, colors.length)]
    }

    if (play.y > (tela.h - (play.size + 15))) {
        direction.y = direction.y * -1
        color = colors[getRandomInt(0, colors.length)]
    }

    play.x += direction.x
    play.y += direction.y

    $image.style.marginLeft = play.x
    $image.style.marginTop = play.y
    $image.style.width = play.size
    $image.style.color = color

    requestAnimationFrame(loop)
}

loop()