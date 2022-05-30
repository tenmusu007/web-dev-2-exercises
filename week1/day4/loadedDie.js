/* CLOSURE EXERCISE
The following function implements the roll of a die; it returns a random number between 1 and 6 each time it is called.

const rollDie = function () {
  return Math.floor(1 + Math.random() * 6);
}

console.log(rollDie());  // 1 (for example)
However, instead of a random die, we want to create a cheat die that would let us predict the next number. Create a function called makeLoadedDie() which returns a function that when called, seems to generate random numbers between 1 and 6, but in fact returns numbers in a row from a hardcoded list.
*/
function makeLoadedDie() {
  const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  let i =-1
  // console.log(i)


  return function () {
    if(i >= list.length -1){
      i = 0
    }else{
      i++
    }
    return list[i] 
  }
}

const rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie()); // 5
console.log(rollLoadedDie()); // 4
console.log(rollLoadedDie()); // 6
console.log(rollLoadedDie()); // 5
console.log(rollLoadedDie()); // 4
console.log(rollLoadedDie()); // 6
console.log(rollLoadedDie()); // 5
console.log(rollLoadedDie()); // 4
console.log(rollLoadedDie()); // 6
console.log(rollLoadedDie()); // 6
console.log(rollLoadedDie()); // 6
console.log(rollLoadedDie()); // 6

