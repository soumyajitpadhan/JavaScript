let marks_class_12 = [91, 82, 63, 84, null, false, "Not present"];
console.log(marks_class_12);

console.log(marks_class_12[0]);
console.log(marks_class_12[1]);
console.log(marks_class_12[2]);
console.log(marks_class_12[3]);
console.log(marks_class_12[4]);
console.log(marks_class_12[5]);
console.log(marks_class_12[6]);

console.log("The length of marks_class_12 is: ", marks_class_12.length);

marks_class_12[7] = 58; // Adding a new value to the array
marks_class_12[3] = 55; //Changing the value of the array

console.log(marks_class_12);

console.log(typeof marks_class_12);

for(let i = 0; i<marks_class_12.length; i++) {
    console.log(marks_class_12[i]);
}