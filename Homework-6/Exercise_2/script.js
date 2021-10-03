let item_1 = {
    name: 'product_1',
    imgSrc: 'product_img/product_1.png',
    price: 540
};
let item_2 = {
    name: 'product_2',
    imgSrc: 'product_img/product_2.png',
    price: 480
};
let item_3 = {
    name: 'product_3',
    imgSrc: 'product_img/product_3.png',
    price: 1200
};
let item_4 = {
    name: 'product_4',
    imgSrc: 'product_img/product_4.png',
    price: 870
};
let arrayItems = [item_1, item_2, item_3, item_4];
let sum = 0;
let divCart = document.querySelector('.cart'),
    miniheader, tableCart, spanCart;
//создаём заголовок корзины
miniheader = document.createElement('h3');
miniheader.innerHTML = 'Cart';
divCart.appendChild(miniheader);
//создаём таблицу
tableCart = document.createElement('table');
tableCart.setAttribute('class', 'selected_items');
divCart.appendChild(tableCart);
//место для вывода общей суммы
spanCart = document.createElement('span');
spanCart.setAttribute('class', 'sum');
divCart.appendChild(spanCart);

let divProd = document.querySelector('.product'),
    miniHeaderProd, divCatalog;
//создаём заголовок каталога
miniHeaderProd = document.createElement('h3');
miniHeaderProd.innerHTML = 'Product';
divProd.appendChild(miniHeaderProd);
// создаём блок каталога
divCatalog = document.createElement('div');
divCatalog.setAttribute('class', 'catalog');
divProd.appendChild(divCatalog);


window.onload = createCatalogItems;

// создаём блоки товаров из массива через функцию
function createCatalogItems() {
    let catalogItems = document.querySelector('.catalog'),
        n, item;
    for (n = 0; n < arrayItems.length; n++) {
        item = document.createElement('div');
        item.setAttribute('class', 'div_item');
        item.appendChild(document.createTextNode(arrayItems[n].name));

        //тут добавляем к каждому товару фото
        imgItem = document.createElement('img');
        imgItem.src = arrayItems[n].imgSrc;
        imgItem.style.display = 'block';
        imgItem.style.height = '157px';
        imgItem.style.width = '200px';
        item.appendChild(imgItem);

        item.appendChild(document.createTextNode(arrayItems[n].price + '\u20bd'));
        //прикрепляем к каждому товару кнопку с функцией отправки в корзину
        btnItem = document.createElement('button');
        btnItem.setAttribute('class', 'btn_item');
        btnItem.textContent = 'Buy!';
        btnItem.id = 'btn_' + n;
        btnItem.onclick = addItem;
        item.appendChild(btnItem);

        catalogItems.appendChild(item);
    }
}

function addItem(event) {
    let button = event.target;
    let mas = button.id.split('_');
    let id = mas[1];
    let selectItem = arrayItems[id];
    let selectItems = document.getElementsByClassName('selected_items')[0];
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.innerHTML = selectItem.name;
    tr.appendChild(td);
    selectItems.appendChild(tr);
    let td2 = document.createElement('td');
    td2.style.textAlign = 'center';
    td2.style.width = '100px';
    tr.appendChild(td2);
    td2.appendChild(document.createTextNode('  ' + selectItem.price + '\u20bd'));

    sum += selectItem.price;
    document.getElementsByClassName('sum')[0].textContent = 'sum: ' + sum + '\u20bd';
}