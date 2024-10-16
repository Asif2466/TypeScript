function square(num) {
    return num * num;
}
function greet(name) {
    if (name === void 0) { name = "stranger"; }
    // return name * name;// valid in case name is 'any' type
    return "hi there, ".concat(name);
    //return 9; // if there no return type. It is true.
}
square(3); // valid
//square("three"); //valid in case num is 'any' type
//square(true); //valid in case num is 'any' type
greet(); // in this case "stranger" will be printed.
greet("Asif"); // in this case "Asif" will be printed
