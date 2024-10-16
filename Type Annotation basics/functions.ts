function square(num: number){ // if we didn't mention the type here, it will be considered as 'any' type
    return num * num;
}


function greet(name: string = "stranger"){// Adding defualt value for the parameter
    // return name * name;// valid in case name is 'any' type
   return `hi there, ${name}`;
    //return 9; // if there no return type, its kind of a function with the return type 'any'. It is valid.
}

// An arrow function stored in a variable
const doSomething = (person: string, age: number, isFunny: boolean) => {};

square(3); // valid
//square("three"); //valid in case num is 'any' type
//square(true); //valid in case num is 'any' type

greet(); // in this case "stranger" will be printed.
greet("Asif"); // in this case "Asif" will be printed

doSomething("asif", 21, false);


function square2(num: number): number{ // Adding return type to the function
    return num * num;
}


function rando(num: number){// Here in this case, this function will return string || number
    if(Math.random() < 0.5){
        return num.toString();
    }
    else{
        return num;
    }
}


const add = (x: number, y: number): number => {
    return x+y;
}


const colors = ["red", "yellow", "blue"];
colors.map(color => { // TypeScript can figure it out the return type of the color
    color.toUpperCase();
});

const isLeapYear = (year: number): boolean => {
    return (year % 4 === 0 && year % 100!== 0) || year % 400 === 0;
}

// // This works because square2 is hoisted
// console.log(square2(3)); // Output: 9

// // This throws an error because add is not hoisted
// console.log(add(3, 4)); // Error: Cannot access 'add' before initialization

// function square2(num: number): number {
//     return num * num;
// }

// const add = (x: number, y: number): number => {
//     return x + y;
// }