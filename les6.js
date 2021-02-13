/*Задание 1:
1. Доработать модуль корзины.
a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы
b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида
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
    cartLine.textContent = "В Корзине" + myCart.procCount() + " товаров на сумму " + myCart.procCoast() + " рублей";
}
else {
    cartLine.textContent = "Корзина пуста";
}


document.getElementById('myCart').appendChild(cartLine);

// Конец предыдущего занятия

buttonTag = document.getElementById('myButton');
buttonTag.addEventListener('click', addNewProd);

function addNewProd() {
    myCart.addItem(document.getElementById('newProdName').textContent, document.getElementById('newProdCoast').textContent, document.getElementById('newProdCount').textContent);
    if (myCart.procCount() > 0) {
        cartLine.textContent = "В Корзине" + myCart.procCount() + " товаров на сумму " + myCart.procCoast() + " рублей";
    }
    else {
        cartLine.textContent = "Корзина пуста";
    }
}