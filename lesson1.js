// boolean 

true
false
 

b = "1"
Boolean(2) // true
Boolean(0) // false
Boolean(-0) // false
 
Boolean('') // false
Boolean('not empty string') // true


	
 
let a1 = {a: 'some string'} // object, 1 depth
 
let user = {
  // объект
  name: "John", // под ключом "name" хранится значение "John"
  age: 30, // под ключом "age" хранится значение 30
};
 

a = {
  ac:1,
  be:"2",
};


[1, 'duck', false, {}] // array
 


function hellower() {
  console.log('Hi there! Nice to meet you')
}

function addToObject(obj, key, value) {
  obj[key] = value
  return obj
}


let accc = addToObject(user, "city", "New York");
console.log(accc)


function updateObject(obj, key, newValue) {
  obj[key] = newValue;
}


console.log(user); // { name: 'John', age: 30 }

updateObject(user, 'name', 'Jane');

console.log(user); // { name: 'Jane', age: 30 }


(function () {
  console.log("Hello")
})();