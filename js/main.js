// 1. Створити обєкт який описує тварину (назву, вагу, вік, середню швидкість), і наступні функції для роботи з ним:

// Функція яка виведе всю інформацію про тварину. Функція яка виведе за скільки тварина зможе подолати 1000 км. (врахуйте що тварина може рухатись не більше 12 годин у день). Функція яка зможе змінити назву тварини на більш детальну. 

// let lion = {
//   name: 'Lion',
//   weight: '120',
//   age: '5',
//   midleSpeed: '30'
// };

// function aboutLion (a) {
//   for(let key in lion) {
//     alert(lion[key]);
//   }
// }
// aboutLion(lion);


// function timeForThouthandKm(a) {

//   let counterHours = 1000 / lion.midleSpeed;
 
//   let counterDays = Math.floor(counterHours / 12);
 
//   let hours = counterHours % 12;
  
//   alert(`${counterDays} days and ${+hours.toFixed(2)} hours`);
// }
// timeForThouthandKm(lion);


// function fullName() {
//   lion.name = 'Lion - king of animals';
//   alert(lion.name);
// }

// fullName();











// 2. Створіть обєкт який має у собі 2 довжини сторін фігури. Додайте методи які будуть робити наступне - рахувати площу фігури, периметр фігури, зроблять фігуру 3-д, зададуть назву фігури, переведуть значення з сантиметрів у метри.

// let square = {
//   length: 5,
//   width: 5
// }

// function areaSquare() {
//   let area = square.length * square.width;
//   return(area;)
// } 


// square.area = areaSquare;
// square.area();


// function perimeter() {
//   let perimeter = (square.length + square.width) * 2;
//   return(perimeter);
// }


// square.perimeterSquare = perimeter;
// square.perimeterSquare();


// function axisZ () {
//   square.hight = 5;
// }
// square.hight = axisZ;
// square.hight();


// function nameFigure () {
//   square.name = 'square'
// }
// square.name = nameFigure;
// square.name();

// console.log(square);






// 3. Створимо аналог списка покупок (мінімум 5 покупок з всіма заданими пропертями. )
//   tomato: {
//     count: 5,
//     price: 50,
//     buy: false,
//     outOfstore: true
//   } , 

// }
 

// Додаємо функцію яка дозволить купити продукт.
// let list = {
//     tomato: {
//     count: 5,
//     price: 25,
//     buy: false,
//     outOfstore: true
//   },

//   potato: {
//     count: 7,
//     price: 12,
//     buy: false,
//     outOfstore: false
//   },

//   orange: {
//     count: 3,
//     price: 27,
//     buy: true,
//     outOfstore: true
//   },

//   juice: {
//     count: 1,
//     price: 30,
//     buy: false,
//     outOfstore: false
//   },

//   cake: {
//     count: 9,
//     price: 15,
//     buy: true,
//     outOfstore: true
//   }
  
// };

 
// Виводимо список покупок - спочатку ті які є в магазині потім яких немає,
// function inStore (innerList) {
//   let inStore = [];
//   let outOfStore = [];
//   for(let key in innerList) {
//     if (innerList[key].outOfstore) {
//       outOfStore.push(key);
//     } else {
//       inStore.push(key);
//     }
//   }
//   console.log(inStore);
//   console.log(outOfStore);
// }
// inStore(list);


// Додаємо функцію яка просумує всі зроблені покупки і виведе результат.(не забуваємо що є значення кількості та ціни за одиницю товару)
// function moneySpent (innerList) {
//   let sum = 0;
//   for(let key in innerList) {
//     if (innerList[key].buy) {
//       sum += innerList[key].price * innerList[key].count;
//     } 
//   }
//   console.log(sum);
// }
// moneySpent(list);



// Виводимо список покупок які ми купили.
// function boughtItem (innerList) {
//   let boughtItems = [];
//   for(let key in innerList) {
//     if (innerList[key].buy) {
//       boughtItems.push(key);
//     } 
//   }
//   console.log(boughtItems);
// }
// boughtItem(list);


//Додаємо функцію яка дозволить купити продукт.

// function changeBuy (innerList) {
//   for(let key in innerList) {
//     if (innerList[key].buy === false) {
//       innerList[key].buy = true;
//     } 
//   }
// }
// changeBuy(list);





// Додаємо можливість збільшувати кількість товару.

// function addItem (item) {
//   item.count++; 
// }
// addItem(list.cake);



// Додаємо можливість зменшувати кількість товару(менше 0 бути не може).
// function removeItem (item) {
//   if (item.count !== 0) {
//     item.count--;
//   }
// }
// removeItem(list.tomato);







// 4. Задана колекція [{name: "Yura", age: 55, hobby: ["films", "games", "hiking"], type: "Admin"}, {}, {},{}]. .

let collection = [{name: "Yura", age: 55, hobby: ["films", "games", "hiking"], type: "Admin"},

                  {name: "Oleg", age: 48, hobby: ["films", "fishihg", "hiking"], type: "User"},

                  {name: "Stepan", age: 28, hobby: ["joging", "games", "hiking"], type: "Admin"},

                  {name: "Dmytro", age: 23, hobby: ["films", "games", "diving"], type: "User"}]


// Вивести всіх адмінів  

// function allAdmins(inputArray) {
//   let admins = [];
//   inputArray.forEach((user, index) => {
//     if (user.type === 'Admin') {
//       admins.push(user.name);
//     }
//   })
//   console.log(admins);
// }
// allAdmins(collection);



//Вивести середній вік усіх працівників.

// function average (inputArray) {
//   let sumAverage = 0;
//   inputArray.forEach((user) => {
//     sumAverage += user.age;
//   })
//   let result = sumAverage / inputArray.length;
//   console.log(result);
// }
// average(collection);



//Вивести тільки унікальні хоббі працівників.

function uniqueHobby (inputArray) {
  let allHobbies = [];
  inputArray.forEach((user) => {
    allHobbies.push(...user.hobby);
  })
  let uniqueResult = [];
  allHobbies.forEach((hobby) => {
    let a = allHobbies.filter((hobby1) => {
      return hobby === hobby1
    })
    if(a.length === 1) {
      uniqueResult.push(a[0]);
    }
  })
  console.log(uniqueResult);
}

uniqueHobby(collection);