const person = {
    name: "Akhil Chandran",
    age: 32,
    hobbies: ['swimming', 'dansing', 'pool', 'chess'],
    greeting: function (){
        alert("you are years old, so you can have these hobbies");
        
    }
}


// print object property name
console.log(person.name)

// adding new property to person object
person.gender = "male";
console.log(person);

// deleting greeting property from person object
delete person.greeting;
// NOTE:( person.greeting = undefined ) will delete the property just like above line of code
console.log(person);

// addind new STRING property to object
person["monthely salary"] = 3500;
console.log(person);