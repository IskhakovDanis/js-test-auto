/* Задание
- название ветки - 02-objects
1. добавь свойство к глобальному объекту,
а затем получи к нему доступ из функции.
2. Создай объект person и переопредели его метод toString,
чтобы предоставить собственное строковое представление.
3. Создай объект account со свойством balance. сво-во Balance
представлен в рублях. переопредели его метод valueOf так, чтобы возвращал баланс в USD
4. создай фукнцию login которая принимает роль (admin, anonim, guest).
С помощью замыкания сделай так, чтобы мы могли залогинется в приложение как на примере
*/


// пример обьекта

let user1 = {     // объект
  name: "John",  // под ключом "name" хранится значение "John"
  age: 30        // под ключом "age" хранится значение 30
};

// let user2 = new Object(); // синтаксис "конструктор" - BAD PRACTICES
let user3 = {};

//Глобальные обьеты

Infinity // из глобального объекта
globalThis.Infinity === Infinity === Number.Infinity


globalThis.for_this_test = 17
console.log(for_this_test)
for_this_test = 19
console.log(for_this_test)
globalThis.myProp = 'hello'
console.log(myProp) // hello

// 1. добавь свойство к глобальному объекту,
// а затем получи к нему доступ из функции.

// Функция для получения свойства глобального объекта
function getGlobalProperty(propertyName) {
    // Проверка, существует ли свойство в глобальном объекте
    if (globalThis.hasOwnProperty(propertyName)) {
        return globalThis[propertyName];
    } else {
        console.log("error")
    }
}


// Пример использования функции

// Добавление свойства к глобальному объекту
globalThis.myGlobalProperty = "This is a global property";

// Получение свойства с помощью функции
try {
    const propertyValue = getGlobalProperty("myGlobalProperty");
    console.log(propertyValue); // Выведет: "This is a global property"
} catch (error) {
    console.error(error.message);
}

// Попытка получить несуществующее свойство
try {
    const nonExistentProperty = getGlobalProperty("nonExistentProperty");
    console.log(nonExistentProperty);
} catch (error) {
    console.error(error.message); // Выведет: "Property "nonExistentProperty" does not exist on the global object."
}

// 2. Создай объект person и переопредели его метод toString,
// чтобы предоставить собственное строковое представление.


// Создание объекта person
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    // Переопределение метода toString
    toString() {
        return `Person: ${this.firstName} ${this.lastName}, Age: ${this.age}`;
    }

};

// Пример использования
console.log(person.toString()); // Выведет: "Person: John Doe, Age: 30"

console.log(person); /*            Выведет: {

                                              firstName: 'John',
                                              lastName: 'Doe',
                                              age: 30,
                                              toString: [Function: toString]
                                            }
                                            */

// 3. Создай объект account со свойством balance. сво-во Balance
// представлен в рублях. переопредели его метод valueOf так, чтобы возвращал баланс в USD
const account = {
    balance: "rub",

    // Переопределение метода valueOf

    valueOf() {
        return `account value is  ${this.balance}`;
    }
}

console.log(account.valueOf())



// 4. создай фукнцию login которая принимает роль (admin, anonim, guest).
// С помощью замыкания сделай так, чтобы мы могли залогинется в приложение как на примере


function login(role) {
    return function (email, password) {
        console.log(`hello ${email}  you are ${role}`);
    }
}


let loginAdmin = login('admin')
loginAdmin('admin@qwe.com', 'passwrd') // hello admin@qwe.com. You are admin role

