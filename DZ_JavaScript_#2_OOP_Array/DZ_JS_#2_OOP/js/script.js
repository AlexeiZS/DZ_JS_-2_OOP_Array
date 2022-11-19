

console.log('<<Язык сценариев JavaScript и библиотека jQeerty>>');
console.log('                Модуль2');
console.log('           Домашнее задание № 2')
console.log('');
console.log('ТЕМА: ОБЪЕКТ.МАССИВЫ.ОБЪЕКТ ARRAY.СТРОКИ.ОБЪЕКТ STRING. DATE.MATH. ВВЕДЕНИЕ В ООП')
console.log('              ','Задание # 1');
/* Создать массив <<Список покупок>>. Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы
с таким массивом.

 1. Вывод всего списка на экран таким образом, 
    чтобы сначала шли некупленные продукты, 
    а потом – купленные.
 2. Добавление покупки в список. 
    Учтите, что при добавлении покупки 
    с уже существующим в списке продуктом, 
    необходимо увеличивать количество в 
    существующей покупке, а не добавлять новую.
 3. Покупка продукта. Функция принимает 
    название продукта и отмечает его как купленный.
 */
 let arrShoppingList = [
   { name: "Bread", reguiredQuantity: 1, purchased: true },
   { name: "Milk", reguiredQuantity: 1, purchased: false },
   { name: "Sugar", reguiredQuantity: 5, purchased: true },
   { name: "Salt", reguiredQuantity: 2, purchased: false },
   { name: "Coffee", reguiredQuantity: 3, purchased: true },
   { name: "Eggs", reguiredQuantity: 20, purchased: false },
   { name: "Potato", reguiredQuantity: 10, purchased: false },
   { name: "Juice", reguiredQuantity: 3, purchased: true }
 ];
 let showArrShopping = () =>{
  console.log(' Array list: ');
  arrShoppingList.sort(compare);// сортируем (впереди не купленные продукты)
  for(let i in arrShoppingList){
    console.log((+i+1),arrShoppingList[i]);
  }
 }
 //сравнение
 let compare = (a, b) => {
   if (a.purchased === false && b.purchased === true) return -1;
   if (a.purchased === true && b.purchased === false) return 1;
   return 0;
 };
 
 //добавление покупок
 function addPurchased (name, count){
  
   for (let i in arrShoppingList) {
     //toLowerCase()- преобразовываем к нижнему регистру
     if (arrShoppingList[i].name.toLowerCase() == name.toLowerCase()) {
       arrShoppingList[i].reguiredQuantity += count;
       console.log('count: ');
       arrShoppingList[i].purchased = true;
       break;
      } 
      else  {
        let obj = {};
        obj.name = name;
        obj.reguiredQuantity = count;
        obj.purchased = true;
        arrShoppingList.unshift(obj);  //добавляем объект в начало массива
        break;
     }
   }
 };
 
 //покупка
 function purchase(name){
  for( let i in arrShoppingList){
    if(arrShoppingList[i].name.toLowerCase() == name.toLowerCase()){
    arrShoppingList[i].purchased = true;
    break;
    }
  }
 }

 
 
  //вывод отсортированного массива
  showArrShopping();
  // Добавление покупок
  addPurchased("Chicken", 2);
  addPurchased("Cheese", 1);
  addPurchased("Curd", 3);
  addPurchased("Bread",2);
  //вывод отсортированного массива
  showArrShopping();
  //покупка
  purchase("Milk") ; 
  showArrShopping();



 

//-------------------------------------
console.log('');
console.log('              ','Задание # 2');
/*
Создать массив, описывающий чек в магазине. 
Каждый элемент массива состоит из названия 
товара, количества и цены за единицу товара. 
Написать следующие функции:
    Распечатка чека на экран;
    Подсчет общей суммы покупки;
    Получение самой дорогой покупки в чеке;
    Подсчет средней стоимости одного товара в чеке.
*/
let arrCheque = [
  { name: 'TV', quantity: 1, price: 100.50 },
  { name: 'Smartfone', quantity: 1, price: 25.99 },
  { name: "Chair", quantity: 4, price: 10.22 },
  { name: "Table", guantity: 1, price: 20.10 },
];

let arr2 = arrCheque.slice(); //копирование массива

//вывод чека
let showCheque = () => {
  for (let i in arr2) {
    let p = document.createElement("p");
    p.className = arr2[i].name;
    p.innerHTML = `<strong> position ${+i + +1} :</strong> 
    <br> name: ${arr2[i].name};
    <br> quantity : ${arr2[i].quantity}; 
    <br> price: ${arr2[i].price};`;
    document.getElementById("arrayReceipt").append(p);
  }
};

//сумма общая
let summ = () => {
  let sum = 0;
  for (let i in arr2) {
    sum += +arr2[i].price;
  }

  let p = document.createElement("p");
  //p.className = "Total";
  p.innerHTML = `<strong>----------------------
  total purchase amount :</strong> ${sum}`;
  document.getElementById("arrayReceipt").append(p);
};

//получение самой дорогой покупки в чеке
let maxCost = () => {
  let max = 0;
  let elemMax;
  for (let i in arr2) 
    if (max < arr2[i].price){
       max = arr2[i].price;
       elemMax = arr2[i];
    }

  let p = document.createElement("p");
  //p.className = elemMax;
  p.innerHTML = `<strong>-----------------------
  maximum cost :</strong> 
  <br> name : ${elemMax.name}; 
  <br> product: ${elemMax.quantity};
  <br> price: ${elemMax.price};`;
  document.getElementById("arrayReceipt").append(p);
    
};

//средняя стоимость
let averageСost = () => { 
  let sum = 0, averCost = 1;
  for (let i in arr2)  
  sum += arr2[i].price;
  
  averCost = sum / arr2.length;
  let p = document.createElement("p");
  //p.className = "Average";
  p.innerHTML = `<strong> ----------------------
  average cost:</strong> ${averCost.toFixed(2)}`;
  document.getElementById("arrayReceipt").append(p);
};

showCheque();
summ();
maxCost();
averageСost();


//-------------------------------------
console.log('');
console.log('              ','Задание # 3');
// Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.).
// Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и
// значение стиля. Написать функцию, которая принимает массив стилей и текст, и выводит
// этот текст с помощью document.write() в тегах <p></p>, добавив в открывающий тег
// атрибут style со всеми стилями, перечисленными в массиве.



const arr3 = [
   { name: "text-shadow :",value: " 6px 2px 4px grey ;" },
   { name: "text-align :", value: " center ;" },
   { name: "font-family :", value: " Helvetica, Arial, sans-serif ;"},
   { name: "font-size :", value: "20px ;" },
   { name: "color :", value: " rgb(160,130,255);" },
   { name: "letter-spacing :", value: "10px ;" },
   { name: "line-height :", value: " 2 ;" },
   { name: "font-stretch :", value: "extra-expanded ;" }
 ];
 
 const text = 'Lorem - The Battle of the Defile was fought over three days in July 731 in and near the Takhtakaracha Pass (in modern Uzbekistan) between a large army of the Umayyad Caliphate and forces of the Türgesh Khaganate. The Türgesh had been besieging Samarkand.'


//document.write(Дописывает в документ все что угодно!):
 function styleText (arr, text){
   document.write(' <p style = " ');
   for (let i in arr)  document.write(arr[i].name + arr[i].value);
   document.write('">' + text + "</p>");
 };
 
 styleText(arr3, text);

//-------------------------------------



console.log('');
console.log('              ','Задание # 4');

/*
 Создать массив аудиторий академии.
 Объект-аудитория состоит из названия,
 количества посадочных мест (от 10 до 20)
 и названия факультета, для которого
 она предназначена. Написать несколько
 функций для работы с ним

 1.Вывод на экран всех аудиторий;
 2.Вывод на экран аудиторий для указанного факультета;
 3.Вывод на экран только тех аудиторий, которые подходят 
   для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;   
 4. Функция сортировки аудиторий по количеству мест;
 5. Функция сортировки аудиторий по названию (по алфавиту).
*/

const arr4 = [
   { name: "mmm", places: "15", nameFaculty: "Physics" },
   { name: "hhh", places: "10", nameFaculty: "Engineering" },
   { name: "eee", places: "20", nameFaculty: "Economic" },
   { name: "bbb", places: "17", nameFaculty: "Mathematics" },
   { name: "fff", places: "12", nameFaculty: "Software" },
   { name: "ccc", places: "19", nameFaculty: "Chemistry" },
   { name: "rrr", places: "20", nameFaculty: "Languages" },
 ];
 // група
 const groupObj = { 
   nameGroup: "www", 
   numStud: "15",
   faculty: 'Physics',
  };
//факультет
  const faculty = "Physics"; 

 //сортировка по количеству
 let arrSortPlace = (arr) => {
   arr.sort((a, b) => { return a.places - b.places;});
 };

 //сортировка по названию (по алфавиту)
 let arrSortName = (arr) => {
   arr.sort((a, b) => {return a.name - b.name;});
 };

 //возвращает строку, названий аудиторий
 let showClassrooms = (arr) => {
   let strArr = [];
   for (let i in arr) 
     strArr.push(arr[i].name);
   return `All name audiences : ${strArr.join("; ")}.`;
 };
 
 //  определяем для факультетов
 const showFaculty = (arr, faculty) => {
   let strArr2 = [];
   for (let i in arr) {
     if (arr[i].nameFaculty.toLowerCase() == faculty.toLowerCase()) {
       strArr2.push(arr[i].nameFaculty);
     }
   }
   return `All audiences of "${strArr2}" faculty : "${strArr2.join("; ")}".`;
 };
 
 // определяем аудитории для групы
 const showGroup = (arr, groupObj) => {
   let strArr3 = [];
   for (let i in arr) {
     if (groupObj.faculty.toLowerCase() ==
           arr[i].nameFaculty.toLowerCase() ) {
           strArr3.push(arr[i].name);
     }
   }
   return `All audiences for "${groupObj.nameGroup}"
    group : "${strArr3.join("; ")}".`;
 };


 //вывод на страницу
 const divId = document.getElementById("content");
 const show = strAr => {
   const div = document.createElement("div");
   div.textContent = strAr;
   div.className = strAr;
   divId.appendChild(div);
 };

 //--------------------------------

 let strAr = arrSortPlace(arr4);
 show(strAr);

 strAr = arrSortName(arr4);
 show(strAr);
 

 strAr = showClassrooms(arr4);
 show(strAr);
 
 strAr = showFaculty(arr4, faculty);
 show(strAr);
 
 strAr = showGroup(arr4, groupObj);
 show(strAr);



//--------------------------------------