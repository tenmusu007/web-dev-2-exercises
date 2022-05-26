function multiplier(factor) {
  return (number) => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));
// → 10

let number = 0;
while (number <= 12) {
  console.log(number);
  number += 2;
}

function countEvenToTwelve(number) {
  if (number <= 12) {
    console.log(number);
    countEvenToTwelve(number + 2);
  }
}
countEvenToTwelve(0);

const person = {
  firstName: 'Bob',
  lastName: 'Smith',
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};

// Nice, now I can just say:
console.log('Hello, ' + person.fullName());
// And it's much "cleaner" every time I need their full name!
