
let flag = 0;
// imsge 0,1,2,3  totallength(4)
function slideController(x) {
    flag = flag + x;
    getSlider(flag);
}

getSlider(flag);

function getSlider(num) {
    let slides = document.getElementsByClassName('slide');
    if (num == slides.length) {
        flag = 0;
        num = 0;
    }
    if (num < 0) {
        num = slides.length - 1;
        flag = slides.length - 1;
    }
    for (let y = 0; y < slides.length; y++) {
        // console.log(slides[y]);
        slides[y].style.display = "none";
    }
    slides[num].style.display = "block";
}


setInterval(function () {
    slideController(1);
}, 1000);

