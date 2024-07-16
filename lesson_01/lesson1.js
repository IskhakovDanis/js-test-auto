// boolean 
/*задание:

- В гите создать ветку 01-basis
- Переменные
Создайте переменные разных типов, а затем измените ее тип, присвоив другое значение. С var, let, const.
- Массивы
создай массив. Создай фукнции add, remove, update фукнции, в 3 разных стилях которые добавляют, удаляют и обновляют массив.
- Объекты
Задай в переменную объект машины с полями модель и производитель
след.строкой кода добавь объекту год
след.строкой кода измени модель
след.строкой кода удали производителя
- фукнции

создай IIFE фукнцию, которая напишет привет в консоль*/

// Переменные булевые
true
false
b = "1"
Boolean(2) // true
Boolean(0) // false
Boolean(-0) // false
Boolean('') // false
Boolean('not empty string') // true

// Переменные number
let a_num1 = Number(1)
let a_num2 = Number('5e')
let a_num3 =Number(-15)

console.log(a_num1,a_num2,a_num3)


// Переменные string

let a_str1 = String(1-1) // 1
let a_str2 = String("5e")
let a_str3 = String(-1-[1])

console.log(a_str1,a_str2,a_str3)


// Переменные object
let user = {
  name: "John", // под ключом "name" хранится значение "John"
  age: 30, // под ключом "age" хранится значение 30
};

let a_obj1 = {a: 'some string', b: {a: 'some string'}, user: user}
console.log(a_obj1)

a = {
  ac:1,
  be:"2",
};

/*- Массивы создай массив. Создай фукнции add, remove, update фукнции,
в 3 разных стилях которые добавляют, удаляют и обновляют массив.*/


let myArray = [1, 'duck', false, {}]
function updateArray(exampleArray,value) {
  exampleArray.push(value)
  return exampleArray
}
console.log("123123",updateArray(myArray,4))

// let myArray = [1, 'duck', false, {}]
// function updateArray(exampleArray,value) {
//   return  exampleArray.push(value)
//
// }
// console.log("123123",updateArray(myArray,4))


let myPopArray = [1, 'duck', false, 1]
function deleteLastElementInArray(exampleArray) {
  exampleArray.pop()
  return exampleArray
}
console.log("22222",deleteLastElementInArray(myPopArray))


// - Объекты



function addToObject(obj, key, value) {
  obj[key] = value
  return obj
}


let accc = addToObject(user, "city", "New York");
console.log(accc)

function updateObject(obj, key, newValue) {
  obj[key] = newValue;
}

updateObject(user, 'name', 'Jane');

console.log(user); // { name: 'Jane', age: 30 }


// создай IIFE фукнцию, которая напишет привет в консоль

(function () {
  console.log("Hello")
})();