/*
Let's play a bit with setTimeout to get comfortable with asynchronous control flow.

Challenge #1
First let's start with a simple exercise.

Instruction
Have our file print out these three words "4311o th3r3 w0r1d" three seconds after the file is run.
All of the words can appear at the same time.
*/
const word = ("4311o th3r3 w0r1d")
// setTimeout(() => {
//     console.log(word)
// }, 1000);
// console.log("4311o")
// console.log("th3r3")
// console.log("w0r1d")


/*
Challenge #2
Next, let's make things more interesting...

Instruction
Instead of printing the entire sentence together, have our code print out each of the three words one at a time, 1 second apart.

It's okay if each of the words appears on a separate line, due to console.log.
*/

// setTimeout(() => {
// console.log("4311o")
// }, 1000);
// setTimeout(() => {
// console.log("th3r3")
// }, 2000);
// setTimeout(() => {
// console.log("w0r1d")
// }, 3000);

const spreaded = word.split(" ")
for(let i in spreaded){
setTimeout(() => {
        console.log(spreaded[i])
    }, 1000 *i);
} 