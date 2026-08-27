let myDate = new Date();
console.log(myDate.toString()); // Outputs the current date and time
console.log(myDate.toDateString()); // Outputs the current date and time
console.log(myDate.toISOString()); // Outputs the current date and time
console.log(myDate.toJSON()); // Outputs the current date and time
console.log(myDate.toLocaleString()); // Outputs the current date and time

let mycreatedDate = new Date(2023, 0, 23); // June 15, 2023 (months are zero-indexed)
console.log(mycreatedDate.toString()); // Outputs the created date and time