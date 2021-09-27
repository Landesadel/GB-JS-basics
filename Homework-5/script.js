function drawChessBoard() {
    let table = document.createElement('table');
    let flag = true;
    let trr = document.createElement('tr');
    let arrLetter = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    // Первый ряд букв
    let trtop = document.createElement('tr');
    for (let l = 0; l < 9; l++) {
        let tdLetter = document.createElement('td');
        tdLetter.style.with = '60px';
        tdLetter.style.height = '40px';
        tdLetter.style.background = 'white';
        tdLetter.style.padding = '0 0 0 35px';
        tdLetter.style.transform = 'rotate(180deg)';
        tdLetter.innerHTML = arrLetter[l];
        trtop.appendChild(tdLetter);
    }
    table.appendChild(trtop);
    for (let i = 0; i < 8; i++) {

        // создаём строки
        let tr = document.createElement('tr');

        // ячейки для цифр
        let tdnum = document.createElement('td');
        tdnum.innerHTML = 8 - i;
        tdnum.style.padding = '0 0 0 14px';
        tdnum.style.witn = '55px';
        tdnum.style.height = '55px';
        tr.appendChild(tdnum);

        for (let j = 0; j < 8; j++) { // ячейки строки

            if (j == 0) flag = !flag;

            let td = document.createElement('td');
            if (flag) {
                td.className = 'block';
                td.style.background = 'black';
            } else {
                td.style.background = 'white';
                td.className = 'block';
            }
            tr.appendChild(td);
            flag = !flag;

        }
        //второй столбик цифр
        let tdnum2 = document.createElement('td');
        tdnum2.innerHTML = 8 - i;
        tdnum2.style.padding = '0 14px 0 14px';
        tdnum2.style.witn = '55px';
        tdnum2.style.height = '55px';
        tdnum2.style.transform = 'rotate(180deg)';
        tr.appendChild(tdnum2);
        table.appendChild(tr);
    }

    //  нижний ряд букв
    for (let l = 0; l < 9; l++) {
        let tdLetter = document.createElement('td');
        tdLetter.style.with = '60px';
        tdLetter.style.height = '40px';
        tdLetter.style.background = 'white';
        tdLetter.style.padding = '0 0 0 35px';
        tdLetter.innerHTML = arrLetter[l];
        trr.appendChild(tdLetter);
    }
    table.appendChild(trr);

    document.body.appendChild(table);
}
drawChessBoard();