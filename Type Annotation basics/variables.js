//String 
var title = "Think and Grow Rich";
title = "Richest Man in Babylon";
title.toUpperCase();
// title = 9; // it will throw an ERROR
//Number
var num = 10;
num = 11;
// number = "ten" // it will throw an ERROR
//Boolean
var flag = true;
flag = false;
//flag = "true";// it will throw an ERROR
//Type Inference // In this, we don't have to mention the type of the variable
var myName = "asif";
myName = "abdul";
//myName = false; // it will throw an ERROR
var isFunny = true;
isFunny = false;
// isFunny = "asif" // it will throw an ERROR
// any Type
var thing = "Asif";
thing = 1; // valid
thing = true; // valid
thing(); // valid
thing.toUpperCase(); // valid
var names = ["Asif", "Abdu"];
var name1; // ===>By defualt its 'any' type
//let name1: string;
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    if (name_1 === "Asif") {
        name1 = name_1; // still the name1 is in 'any' type
    }
}
//so............
name1 = 1; // valid
name1 = true; // valid
name1(); // valid
name1.adcd(); // valid
