// property maniuoation

let person = { name: 'Steve'};
//console.log(person);

for (let key in person) {
    //console.log(key);
}

//console.log(Object.keys(person));

let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase,'toString');
//console.log(descriptor);

Object.defineProperty(person, 'name',{
    writeable:false, //  change
    enumerable: false, // iterate
    configurable: false // delete
});


