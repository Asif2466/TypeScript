//String 
let title: string = "Think and Grow Rich";
title = "Richest Man in Babylon";
title.toUpperCase();
// title = 9; // it will throw an ERROR

//Number
let num: number = 10;
num = 11;
// number = "ten" // it will throw an ERROR

//Boolean
let flag: boolean = true;
flag = false;
//flag = "true";// it will throw an ERROR


//Type Inference // In this, we don't have to mention the type of the variable
let myName = "asif";
myName = "abdul";
//myName = false; // it will throw an ERROR

let isFunny = true;
isFunny = false;
// isFunny = "asif" // it will throw an ERROR

// any Type
let thing: any = "Asif";
thing = 1; // valid
thing = true;// valid
thing(); // valid
thing.toUpperCase(); // valid

const names = ["Asif", "Abdu"];
let name1; // ===>By defualt its 'any' type
//let name1: string;
for(let name of names){
    if(name === "Asif"){
        name1 = name; // still the name1 is in 'any' type
    }
}
//so............
name1 = 1; // valid
name1 = true; // valid
name1(); // valid
name1.adcd(); // valid
