// Бургеры
// У вас есть 2 вида бургеров - гамбургер и чизбургер. Они отличаются по составу, 
// весу и калорийности. 
// У чизбургера есть сыр и котлета из курицы, 
// у гамбургера - говядина и сыра нет. 
// Есть 2 размера md/xl
// К ним можно заказать 
// двойную котлету и выбрать какого именно вида, 
// двойной соус, 
// а для чизбургера - еще и двойной сыр. 
// Можете дополнительно добавить картофель и полить майонезом или кетчупом.
//
// Напишите программу, расчитывающую стоимость и калорийность гамбургера. 
// конструктор Бургер, константы, методы для выбора опций и расчета нужных величин. 
// Используйте дополнительные классы, по необходимости.
//
//     Пример работы кода:
//
// var hamburger = new Hamburger(Hamburger.SIZE_SMALL);
// добавка из майонеза
//// hamburger.addTopping(Hamburger.TOPPING_MAYO);
// // спросим сколько там калорий
//// console.log(“Calories: “ + hamburger.calculateCalories());
// сколько стоит
//// console.log("Price: “ + hamburger.calculatePrice());
// я тут передумал и решил добавить еще приправу
// hamburger.addTopping(Hamburger.TOPPING_SAUCE);
// А сколько теперь стоит?
// console.log("Price with sauce: “ + hamburger.calculatePrice());

const SIZE_MEDIUM = {
    name: 'medium',
    price: 30,
    calories: 20
};
const SIZE_LARGE = {
    name: 'large',
    price: 50,
    calories: 30
};
const STUFFING_CHEESE = {
    name: 'cheese',
    price: 20,
    calories: 15
};
const CHICHEN_CHOP = {
    name: 'chichen chop',
    price: 30,
    calories: 20
};
const BEEF_CHOP = {
    name: 'beef chop',
    price: 30,
    calories: 20
};
const STUFFING_POTATO = {
    name: 'potato',
    price: 30,
    calories: 20
};
const TOPPING_SAUCE = {
    name: 'sauce',
    price: 30,
    calories: 20
};
const TOPPING_MAYO = {
    name: 'mayo',
    price: 30,
    calories: 20
};
const TOPPING_KETCHUP = {
    name: 'ketchup',
    price: 30,
    calories: 20
};

function Burger(name, size) {
    this.name = name;
    this.size = size;
    this.stuffing = [];
    this.topping = []
}

Burger.prototype.getName = function () {
    return this.name;
};

Burger.prototype.addStuffing = function (stuffing) {
    this.stuffing.push(stuffing);
};

Burger.prototype.addTopping = function (topping) {
    this.topping.push(topping);
};

Burger.prototype.getSumCalories = function () {
    let stuffingCalories = this.stuffing.reduce(function (accumStuf, item) {
        accumStuf += item.calories;
        return accumStuf;
    },0);
    let toppingCalories = this.topping.reduce(function (accumTop, item) {
        accumTop += item.calories;
        return accumTop;
    },0);
    let sumCalories = this.size.calories + stuffingCalories + toppingCalories;

    return sumCalories;
};

Burger.prototype.getTotalPrice = function () {
    let stuffingPrice = this.stuffing.reduce(function (accumStufPrice, item) {
        accumStufPrice +=item.price;
        return accumStufPrice;
    },0);
    let toppingPrice = this.topping.reduce(function (accumTopPrice, item) {
        accumTopPrice +=item.price;
        return accumTopPrice;
    },0);
    let totalPrice = this.size.price + stuffingPrice + toppingPrice;
    return totalPrice;
};

const cheeseBurger = new Burger('Cheeseburger',SIZE_MEDIUM);
console.log(cheeseBurger.getName());
cheeseBurger.addStuffing(STUFFING_CHEESE);
cheeseBurger.addStuffing(CHICHEN_CHOP);
cheeseBurger.addTopping(TOPPING_MAYO);
cheeseBurger.addTopping(TOPPING_KETCHUP);
console.log(cheeseBurger);
console.log('Total calories amount: '+ cheeseBurger.getSumCalories());
console.log('Total price: '+ cheeseBurger.getTotalPrice());

// я тут передумал и решил добавить еще приправу
cheeseBurger.addTopping(TOPPING_SAUCE);
// А сколько теперь стоит?
console.log('Price with sauce: '+ cheeseBurger.getTotalPrice());
// console.log(cheeseBurger);
// Add another cheese
cheeseBurger.addStuffing(STUFFING_CHEESE);
console.log('Price with 2 cheese: ' + cheeseBurger.getTotalPrice());
console.log('---------------------------');

const hamburger = new Burger('Hamburger', SIZE_LARGE);
console.log(hamburger.getName());
hamburger.addStuffing(BEEF_CHOP);
hamburger.addTopping(TOPPING_MAYO);
hamburger.addTopping(TOPPING_KETCHUP);
hamburger.addStuffing(BEEF_CHOP);
console.log('Hamburger with two beef chop');
console.log('Total calories: '+ hamburger.getSumCalories());
console.log('Total price '+ hamburger.getTotalPrice());
console.log(hamburger);
// I want to add potato
hamburger.addStuffing(STUFFING_POTATO);
console.log('Hamburger price with potato: ' + hamburger.getTotalPrice());
// console.log(hamburger);




