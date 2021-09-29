function drawChessBoard() {
    let table = document.createElement('table');
    let flag = true;
    let trr = document.createElement('tr');
    let arrLetter = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    blackFigs1 = ['&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;', '&#9821;', '&#9822;', '&#9820;'],
        whiteFigs1 = ['&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812;', '&#9815;', '&#9816;', '&#9814;'],
        blackFigs2 = ['&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;'],
        whiteFigs2 = ['&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;'];
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
                td.style.background = '#5f4d25';
            } else {
                td.style.background = '#c9b894';
                td.className = 'block';
            }
            tr.appendChild(td);
            flag = !flag;

            switch (i) { //Заполняем фигуры в ячейки по строкам

                case 0:
                    td.innerHTML = blackFigs1[j];
                    td.className = 'block figstyle';
                    break;
                case 1:
                    td.innerHTML = blackFigs2[j];
                    td.className = 'block figstyle';
                    break;
                case 6:
                    td.innerHTML = whiteFigs2[j];
                    td.className = 'block figstyle';
                    break;
                case 7:
                    td.innerHTML = whiteFigs1[j];
                    td.className = 'block figstyle';
                    break;
            }

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