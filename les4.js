/*Задание 1:
Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, надо получить на выходе объект,
в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 надо получить следующий объект:
{‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/

function NumToObj(inpNum) {
    return {
        units: inpNum % 10,
        dec: Math.floor(inpNum / 10) % 10,
        hundreds: Math.floor(inpNum / 100)
    }
}

myNumObj = NumToObj(234);
console.log(myNumObj);


/*Задание 2:
2.Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/

/*
Корзина без применения объектов:
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
*/

cartItem = {
    name: "Wheel",
    coast: 3500,
    count: 2,
    sumTempCoast: 7000
};

myCart = {
    itemList: [],
    itemCount: 0,
    sumCoast: 0,
    addItem: function (prName, prCoast, prCount) {
        this.itemCount++;
        this.itemList.push({
            name: prName,
            coast: prCoast,
            count: prCount,
            sumTempCoast: prCoast * prCount
        });
    },
    procCoast: function () {
        this.sumCoast = 0;
        for (item in this.itemList) {
            this.sumCoast += this.itemList[item].sumTempCoast;
        }
        console.log("Стоимость всей корзины: " + this.sumCoast);
        return this.sumCoast;
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

console.log("Можем в целом вернуть стоимость при расчете: " + myCart.procCoast());