/*Задание 1:
Дан код:
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
d = b++; alert(d);           // 1
c = (2+ ++a); alert(c);      // 5
d = (2+ b++); alert(d);      // 4
alert(a);                    // 3
alert(b);  

Почему код даёт именно такие результаты?

Ответ: Из-за префиксного и постфиксного исполнения инкремента. При ++a сначала происходит инкремент, а потом присваивание, а при b++ сначала идет присваивание, а зател инкремент.  
*/

/*Задание 2:
Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2); 

Ответ: будет равен 5, так как данное выражение эквивалентно x = 1 + 2*2 = 3. Проверим
*/
var a = 2;
var x = 1 + (a *= 2);

(x == 5) ? console.log("Х равен 5, все верно!") : console.log("Х не равен 5, ищем где ошибка!")


/*Задание 3:
Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:

если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
*/

var a = 10;
var b = -5;

if (a >= 0 && b >= 0) {
    console.log("a - b = " + (a - b));
}
else if (a < 0 && b < 0) {
    console.log("a * b = " + (a * b));
}
else {
    console.log("a + b = " + (a + b));
}

/*Задание 4:
Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
*/

a = 8;

//Вариант с использованием стандартного использования switch case.
switch (a) {
    case 0:
        console.log("0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 1:
        console.log("1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 2:
        console.log("2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 3:
        console.log("3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 4:
        console.log("4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 5:
        console.log("5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 6:
        console.log("6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 7:
        console.log("7, 8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 8:
        console.log("8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 9:
        console.log("9, 10, 11, 12, 13, 14, 15");
        break;
    case 10:
        console.log("10, 11, 12, 13, 14, 15");
        break;
    case 11:
        console.log("11, 12, 13, 14, 15");
        break;
    case 12:
        console.log("12, 13, 14, 15");
        break;
    case 13:
        console.log("13, 14, 15");
        break;
    case 14:
        console.log("14, 15");
        break;
    case 15:
        console.log("15");
        break;
    default:
        console.log("Число не входит в заданный диапазон!");
        break;
}

//Вариант из разряда не баг, а фича (может быть он и имелся ввиду).
var tempStr = "";
switch (a) {
    case 0:
        tempStr += "0, "
    case 1:
        tempStr += "1, "
    case 2:
        tempStr += "2, "
    case 3:
        tempStr += "3, "
    case 4:
        tempStr += "4, "
    case 5:
        tempStr += "5, "
    case 6:
        tempStr += "6, "
    case 7:
        tempStr += "7, "
    case 8:
        tempStr += "8, "
    case 9:
        tempStr += "9, "
    case 10:
        tempStr += "10, "
    case 11:
        tempStr += "11, "
    case 12:
        tempStr += "12, "
    case 13:
        tempStr += "13, "
    case 14:
        tempStr += "14, "
    case 15:
        tempStr += "15 "
        break;
    default:
        console.log("Число не входит в заданный диапазон!");
        break;
}

console.log(tempStr);

/*Задание 5:
Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
*/

a = 20;
b = 4;

function sumNunbers(num1, num2) {
    if (!isNaN(num1) && !isNaN(num2)) {
        return num1 + num2;
    }
    else {
        return "Введены некорректные данные!";
    }
}

!isNaN(sumNunbers(a, b)) ? console.log("a + b = " + sumNunbers(a, b)) : console.log(sumNunbers(a, b));

function subtrNunbers(num1, num2) {
    if (!isNaN(num1) && !isNaN(num2)) {
        return num1 - num2;
    }
    else {
        return "Введены некорректные данные!";
    }
}

!isNaN(subtrNunbers(a, b)) ? console.log("a - b = " + subtrNunbers(a, b)) : console.log(subtrNunbers(a, b));

function multNunbers(num1, num2) {
    if (!isNaN(num1) && !isNaN(num2)) {
        return num1 * num2;
    }
    else {
        return "Введены некорректные данные!";
    }
}

!isNaN(multNunbers(a, b)) ? console.log("a * b = " + multNunbers(a, b)) : console.log(multNunbers(a, b));

function divNunbers(num1, num2) {
    if (!isNaN(num1) && !isNaN(num2)) {
        if (num2 !== 0) {
            return num1 / num2;
        }
        else {
            return "Знаменатель не может быть равен нулю!";
        }
    }
    else {
        return "Введены некорректные данные!";
    }
}

!isNaN(divNunbers(a, b)) ? console.log("a / b = " + divNunbers(a, b)) : console.log(divNunbers(a, b));


/*Задание 6:
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
*/

function fourNumOper(num1, num2, funcType) {
    switch (funcType) {
        case "+":
            return sumNunbers(num1, num2);
        case "-":
            return subtrNunbers(num1, num2);
        case "*":
            return multNunbers(num1, num2);
        case "/":
            return divNunbers(num1, num2);
        default:
            return "Некорректно введен тип операции!"
    }
}

a = 20;
b = 0;
var operType = "+";
!isNaN(fourNumOper(a, b, operType)) ? console.log("a " + operType + " b = " + fourNumOper(a, b, operType)) : console.log(fourNumOper(a, b, operType));

var operType = "-";
!isNaN(fourNumOper(a, b, operType)) ? console.log("a " + operType + " b = " + fourNumOper(a, b, operType)) : console.log(fourNumOper(a, b, operType));

var operType = "*";
!isNaN(fourNumOper(a, b, operType)) ? console.log("a " + operType + " b = " + fourNumOper(a, b, operType)) : console.log(fourNumOper(a, b, operType));

var operType = "/";
!isNaN(fourNumOper(a, b, operType)) ? console.log("a " + operType + " b = " + fourNumOper(a, b, operType)) : console.log(fourNumOper(a, b, operType));


/*Задание 7:
Сравнить null и 0. Попробуйте объяснить результат.
*/
console.log(null == 0);
console.log(null === 0);

/*
Ответ: результат сравнение false, так как в этом случае null не приводится к числу 0 в отличие от операторов сравнения < > <= >=.
*/


/*Задание 8:
С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.
*/

function powNum(inpNum, inpPow) {
    if (inpPow > 0) {
        return inpNum * powNum(inpNum, inpPow - 1);
    }
    return 1;
}

a = 2;
var numPow = 9;

console.log(a + " ^ " + numPow + " = " + powNum(a, numPow));
