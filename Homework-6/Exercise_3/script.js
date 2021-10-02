let arrImgs = ['img_1.jpg', 'img_2.jpg', 'img_3.jpg'];
let indexImg = 0;
let img = document.getElementById('main');

function nextButton() {
    (indexImg == arrImgs.length - 1) ? indexImg = 0: indexImg++;

    img.src = "img/" + arrImgs[indexImg];
}

function backButton() {
    (indexImg == 0) ? indexImg = arrImgs.length - 1: indexImg--;

    img.src = "img/" + arrImgs[indexImg];
}