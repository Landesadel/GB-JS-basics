let question;
let n;
let arrAnswers = [];

do {
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
                alert('Ответ не верный!');
                //сюда вставить присвоение ответа к массиву
                break;
            } else if (question == 2) {
                alert('Ответ не верный!');
                //сюда вставить присвоение ответа к массиву
                break;
            } else if (question == 3) {
                alert('Ответ  верный!');
                //сюда вставить присвоение ответа к массиву
                break;
            } else if (question == 4) {
                alert('Ответ не верный!');
                //сюда вставить присвоение ответа к массиву
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
                        alert('Ответ верный!');
                        //сюда вставить присвоение ответа к массиву
                        break;
                    } else if (question == 2) {
                        alert('Ответ не верный!');
                        //сюда вставить присвоение ответа к массиву
                        break;
                    } else if (question == 3) {
                        alert('Ответ не верный!');
                        //сюда вставить присвоение ответа к массиву
                        break;
                    } else if (question == 4) {
                        alert('Ответ не верный!');
                        //сюда вставить присвоение ответа к массиву
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
                                alert('Ответ верный!');
                                //сюда вставить присвоение ответа к массиву
                                break;
                            } else if (question == 2) {
                                alert('Ответ не верный!');
                                //сюда вставить присвоение ответа к массиву
                                break;
                            } else if (question == 3) {
                                alert('Ответ не верный!');
                                //сюда вставить присвоение ответа к массиву
                                break;
                            } else if (question == 4) {
                                alert('Ответ не верный!');
                                //сюда вставить присвоение ответа к массиву
                                break;
                            } else {
                                n = isAnswer(questionText.c0, question)
                            }
                        } while (!n);
                        switch (question) {
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                                alert('Спасибо за игру!');
                                //Добавить вывод ответов из массива и  вывод: правильный\неправильный ответ
                        }
                }
        }
}

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
//Добавить функцию вывода ответов в массив