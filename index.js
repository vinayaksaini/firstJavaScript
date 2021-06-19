console.log("START index.js .......................................")

let a =10;

console.log(a);
let person={
    pName:'VS',
    pAge:23
};

console.log(person);
console.log("MY NAME IS =");
console.log(person.pName);
//Alternate method

person['pName']='abc';
console.log(person['pName']);

let tmp ='pAge';
console.log(person.pAge);
person[tmp]=24;
console.log(person[tmp]);


console.log("END OF index.js ............................................");