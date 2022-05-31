data = ['CICCC', 'Cornerstone College', 'Web Development'];

const getTrueItemsToCount = (itemsToCount) => {
  // get letters
  let itemsToCountArray = Object.keys(itemsToCount);
  // filter letters when value === true
  itemsToCountArray = itemsToCountArray.filter(
    (letter) => itemsToCount[letter]
  );
  return itemsToCountArray;
};

const countLetterInString = (letter, string) => {
  //start counter
  let counter = 0;
  //convert string to array, separating every letter
  const stringArray = string.split('');
  // check if each character === letter to count, if yes add 1 to counter
  stringArray.forEach((char) => {
    if (letter === char.toLowerCase()) {
      counter++;
    }
  });
  return counter;
};

const countOnly = (allItems, itemsToCount) => {
  //declare result variable = empty object
  let result = {};
  // get only letters with value === true
  const itemsToCountArray = getTrueItemsToCount(itemsToCount);
  itemsToCountArray;
  // loop through letters array
  itemsToCountArray.forEach((letter) => {
    //start counter = 0;
    let counter = 0;
    // get each string from all items
    for (let string of allItems) {
      //count letter in string and add it to counter
      counter = counter + countLetterInString(letter, string);
    }
    // add letter (key) and counter (value) to result object
    result[letter] = counter;
  });
  //return object with all counted letters as keys and counter amount as values
  return result;
};

console.log(countOnly(data, { a: true, c: true, l: false, o: true }));
console.log(countOnly(data, { r: true, l: true, b: false, w: true }));
console.log(countOnly(data, { t: false, u: true, s: true, ' ': true }));
