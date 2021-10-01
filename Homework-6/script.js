window.onload = eventElementHandler;

function eventElementHandler() {
    let images = document.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
        images[i].onclick = checkBigImg;
    }

}

function checkBigImg(eventObject) {
    let checkBlockDiv = document.querySelector('.check_img');
    checkBlockDiv.innerHTML = '';
    let eventElem = eventObject.target;
    let imgPartsName = eventElem.id.split(' ');
    let src = 'big_img/' + imgPartsName + '.jpg';
    let imgDomElem = document.createElement('img');
    imgDomElem.src = src;
    checkBlockDiv.appendChild(imgDomElem);
}