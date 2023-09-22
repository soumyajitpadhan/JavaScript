/*try {
    rahul;
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}*/


// ..........custom Error.........
/*try {
    console.log(rahul);
    throw new ReferenceError("Rahul is not good.")
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}*/

//........Throwing Custom Error........
try {
    let age = prompt("Enter your age");
    age = Number.parseInt(age);
    if (age > 150) {
        throw new ReferenceError("This is probably not true.");
    }
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

console.log("This script is still running.")