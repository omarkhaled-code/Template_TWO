let landing = document.querySelector(".landing");
let mainimg = document.querySelector(".landing img")
let imgs = ["IMG/magic mounitan.jpg",
    "IMG/magic world.jpg",
    "IMG/Moon.jpg"]
let num = 0;

function next() {
    num++
    if (num > imgs.length - 1) {
        num = 0;
        mainimg.src = imgs[num]
    } else {
        mainimg.src = imgs[num]
    }
}
function back() {
    num--;
    if (num < 0) {
        num = imgs.length - 1;
        mainimg.src = imgs[num]
    } else {
        mainimg.src = imgs[num]
    }
}



