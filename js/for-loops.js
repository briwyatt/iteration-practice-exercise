// test 
console.log("this .js is linked ✓ to index.html");

// Increment by 10
console.log("Increment by 10");
// Write a for loop that uses a counter variable initialized at 5
// and then increments it by 10 every time it executes.
// Use console.log() to output the value of the counter variable each time 
// through the loop.
// Stop execution of the loop if the counter variable's value is greater than 120.
var counter1 = 5;
for (i = 0; i < 120; i += 10) {
    console.log("counter 1", counter1);
    counter1 += 10;
};

// Decrement by division
console.log("Decrement by division:");
// Write a for loop with a counter variable initialized at 4096. Each time the loop executes divide the counter variable's value by 2.
// Use console.log() to output its value every time.
// When the counter variable's value is 1, stop execution.
var counter2 = 4096;
for (i = 4096; i >= 1; i /= 2) {
    console.log("counter 2", counter2);
    counter2 /= 2;
};


// Array iteration
console.log("Array iteration:");
// Create an array that contains the names of American Presidents. Loop over that array with a for loop, and use string concatenation with console.log() to output the order and name of each President (see example below).
var presidents = ["George Washington", "John Adams", "Thomas Jefferson", "James Madison", "James Monroe", "John Quincy Adams", "Andrew Jackson"];
var counter = 1;
for (i=0; i<presidents.length; i++){
console.log("President # " + [counter]);
console.log("was " + presidents[i]);
counter += 1;
}

// Object iteration
console.log("Object iteration:");
// You can use another kind of for loop to iterate over objects. (For/In Loop)
// Iterate over the object below and use console.log() to output the names of the keys in the object.

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

var counter = 0;
for (key in antSpecies){
console.log("key name #" + [counter] + " " + key);
counter++;
}


// for(key in obj){
    // The key is key
    // The value is obj[key]


