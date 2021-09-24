let question;
let n;
let arrAnswers = [];


do { //начало игры
    n = false;
    question = +prompt(questionText.z00 + questionText.z1 + questionText.z2);
    if (question == -1) {
        break;
    } else {
        n = isAnswer(questionText.z0, question)
    }
} while (!n);
switch (question) {
    case 1:
        do { //Первый вопрос
            n = false;
            question = +prompt(questionText.a00 + questionText.a1 + questionText.a2 + questionText.a3 + questionText.a4 + 'Для завершения игры введите -1');
            if (question == -1) {
                break;
            } else if (question == 1) {
                arrAnswers.unshift(question); //Добавление ответа в начало массива
                alert('Ответ не верный!');

                break;
            } else if (question == 2) {
                arrAnswers.unshift(question); //Добавление ответа в начало массива
                alert('Ответ не верный!');
                break;
            } else if (question == 3) {
                arrAnswers.unshift(question); //Добавление ответа в начало массива
                alert('Ответ  верный!');
                break;
            } else if (question == 4) {
                arrAnswers.unshift(question); //Добавление ответа в начало массива
                alert('Ответ не верный!');
                break;
            } else {
                n = isAnswer(questionText.a0, question)
            }
        } while (!n);
        switch (question) {
            case 1:
            case 2:
            case 3:
            case 4:
                do {
                    //Второй вопрос
                    n = false;
                    question = +prompt(questionText.b00 + questionText.b1 + questionText.b2 + questionText.b3 + questionText.b4 + 'Для завершения игры введите -1');
                    if (question == -1) {
                        break;
                    } else if (question == 1) {
                        arrAnswers.unshift(question); //Добавление ответа в начало массива
                        alert('Ответ верный!');
                        break;
                    } else if (question == 2) {
                        arrAnswers.unshift(question); //Добавление ответа в начало массива
                        alert('Ответ не верный!');
                        break;
                    } else if (question == 3) {
                        arrAnswers.unshift(question); //Добавление ответа в начало массива
                        alert('Ответ не верный!');
                        break;
                    } else if (question == 4) {
                        arrAnswers.unshift(question); //Добавление ответа в начало массива
                        alert('Ответ не верный!');
                        break;
                    } else {
                        n = isAnswer(questionText.b0, question)
                    }
                } while (!n);
                switch (question) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        do {
                            //Третий вопрос
                            n = false;
                            question = +prompt(questionText.c00 + questionText.c1 + questionText.c2 + questionText.c3 + questionText.c4 + 'Для завершения игры введите -1');
                            if (question == -1) {
                                break;
                            } else if (question == 1) {
                                arrAnswers.unshift(question); //Добавление ответа в начало массива
                                alert('Ответ верный!');
                                break;
                            } else if (question == 2) {
                                arrAnswers.unshift(question); //Добавление ответа в начало массива
                                alert('Ответ не верный!');
                                break;
                            } else if (question == 3) {
                                arrAnswers.unshift(question); //Добавление ответа в начало массива
                                alert('Ответ не верный!');
                                break;
                            } else if (question == 4) {
                                arrAnswers.unshift(question); //Добавление ответа в начало массива
                                alert('Ответ не верный!');
                                break;
                            } else {
                                n = isAnswer(questionText.c0, question);
                            }
                        } while (!n);
                        switch (question) { //Проверка своих ответов
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                                alert('Спасибо за игру!');
                                for (step = 0;;) {
                                    let s;
                                    s = +prompt('Для просмотра ответа на вопрос - введите номер вопроса\n' + 'Для выхода введите \"-1\"');
                                    if (s == -1) {
                                        break;
                                    }
                                    do {
                                        if (s == 1) {
                                            alert('Ваш ответ на 1-й вопрос:' + arrAnswers[2]);
                                        } else if (s == 2) {
                                            alert('Ваш ответ на 2-й вопрос:' + arrAnswers[1]);
                                        } else if (s == 3) {
                                            alert('Ваш ответ на 3-й вопрос:' + arrAnswers[0]);
                                        } else {
                                            s = isAnswer(3, s)
                                        }

                                    } while (!s);

                                }

                        }
                }
        }
}
//проверка числа
function isAnswer(i, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    } else if (event < 1 || event > i) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;
}