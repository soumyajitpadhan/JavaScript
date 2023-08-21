let name1 = "Rahul";
// let name1 = "Rahul\""; // \" -> one character"
console.log(name1.length); //length = property

console.log(name1.toUpperCase());

console.log(name1.toLowerCase());

console.log(name1.slice(2, 4));
console.log(name1.slice(2));

console.log(name1.replace("Ra", "Pa"));

let friend = "Naman";
console.log(name1.concat(" is a friend of ", friend, " Ok"));
let na = "Soumya" + "jit" // Also use + operator to concat strings
console.log(na);

let friend2 = "    Meena     ";
console.log(friend2.trim());
// console.log(friend2);

let fr = "Shivika";
// console.log(fr[0]);
// fr[3]= "s";//This is not possible because strings are immutable.
for (let i = 0; i < fr.length; i++) {
    console.log(fr[i]);
}

