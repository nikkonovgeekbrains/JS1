/*Задание 1:
Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
*/
//'use strict';

myBoard = {
    width: 8,
    height: 8,
    drawBoard() {
        const myDiv = document.createElement('div');                //Блок с таблицей
        const myBoard = document.createElement('table');            //Таблица
        myBoard.style.width = '400px';
        myBoard.style.height = '400px';
        myBoard.style.borderCollapse = 'collapse';
        myBoard.style.border = '1px solid grey';

        let blackFlag = false;

        //Верхний ряд цифр
        const hRowUp = document.createElement("tr");
        myBoard.appendChild(hRowUp);
        for (let col = 0; col < this.width + 2; col++) {
            const cellEl = document.createElement("th");
            cellEl.textContent = getSymb(col);
            hRowUp.appendChild(cellEl);
        }

        for (let row = 0; row < this.height; row++) {
            const rowEl = document.createElement("tr");
            myBoard.appendChild(rowEl);

            const leftNum = document.createElement("th");
            rowEl.appendChild(leftNum);
            leftNum.textContent = 8 - row;

            for (let col = 0; col < this.width; col++) {
                const cellEl = document.createElement("td");
                if (blackFlag) {
                    cellEl.style.background = "black";
                }
                else {
                    cellEl.style.background = "white";
                }
                cellEl.style.border = '1px solid grey';
                rowEl.appendChild(cellEl);
                blackFlag = !blackFlag;
            }
            blackFlag = !blackFlag;

            const rightNum = document.createElement("th");
            rowEl.appendChild(rightNum);
            rightNum.textContent = 8 - row;
        }


        //Нижний ряд цифр
        const hRowDown = document.createElement("tr");
        myBoard.appendChild(hRowDown);
        for (let col = 0; col < this.width + 2; col++) {
            const cellEl = document.createElement("th");
            cellEl.textContent = getSymb(col);
            hRowDown.appendChild(cellEl);

        }


        myDiv.appendChild(myBoard);
        document.body.appendChild(myDiv);
    }
}

function getSymb(num) {
    switch (num) {
        case 1:
            return 'A';
        case 2:
            return 'B';
        case 3:
            return 'C';
        case 4:
            return 'D';
        case 5:
            return 'E';
        case 6:
            return 'F';
        case 7:
            return 'G';
        case 8:
            return 'H';
        default:
            return '';
    }
}

myBoard.drawBoard();


/*Задание 3:
3. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть только div, в который
будет вставляться корзина, сгенерированная на базе JS:
3.1. Пустая корзина должна выводить строку «Корзина пуста»;
3.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
*/

//С прошлого занятия
const cart = [
    ['wheel', 3500, 2],
    ['frame', 15000, 1],
    ['pedal', 3700, 4],
    ['fork', 17000, 3],
    ['spoke', 17, 32]
];

function procSumCartCoast(cartArr) {
    let sumCoast = 0;
    for (let i = 0; i < cartArr.length; i++) {
        sumCoast += cartArr[i][1] * cartArr[i][2];
    }
    return sumCoast;
}

cartItem = {
    name: "Wheel",
    coast: 3500,
    count: 2,
    sumTempCoast: 7000
};

myCart = {
    itemList: [],
    addItem: function (prName, prCoast, prCount) {
        //this.itemCount++;
        this.itemList.push({
            name: prName,
            coast: prCoast,
            count: prCount,
            sumTempCoast: prCoast * prCount
        });
    },
    procCoast: function () {
        let tempCoast = 0;
        for (item in this.itemList) {
            tempCoast += this.itemList[item].sumTempCoast;
        }
        console.log("Стоимость всей корзины: " + tempCoast);
        return tempCoast;
    },
    procCount: function () {
        return this.itemList.length;
    }
}

console.log(cartItem);
console.log(myCart);

myCart.addItem("wheel", 3500, 2);
myCart.addItem("frame", 15000, 1);
myCart.addItem("pedal", 3700, 4);
myCart.addItem("fork", 17000, 3);
myCart.addItem("spoke", 17, 32);
console.log(myCart);

myCart.procCoast();
// Конец предыдущего занятия



const cartLine = document.createElement('p');
if (myCart.procCount() > 0) {
    cartLine.textContent = "В Корзине " + myCart.procCount() + " товаров на сумму " + myCart.procCoast() + " рублей";
}
else {
    cartLine.textContent = "Корзина пуста";
}

document.getElementById('myCart').appendChild(cartLine);









