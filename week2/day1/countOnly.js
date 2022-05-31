/*
Implement solutions to the following questions/problems by writing functions for each one:

Instruction
    Let's work together to implement countOnly. This function should take in a collection of items and return counts for a specific characters of those items. It won't count everything. In order to decide what to count, it will also be given an idea of which items we care about and it will only count those, ignoring the others.

Items in our case will be limited to Strings.

The function should return an object with each character as key names and how many counted in data as values.

 */

data = ['CICCC', 'Cornerstone College', 'Web Development'];

const countOnly = (allItems, itemsToCount) => {
    const data2 = allItems.join('')
    // console.log(data2)
    let array =[]
    let obj ={}
    for(let i in itemsToCount){
        if(itemsToCount[i] === true){
            array.push(i)
        }
    }
    for(let z = 0; z < array.length; z++){
        let count =0;
        for(let y in data2){
            if(data2[y].toLowerCase() === array[z]){
                    count++
            }
        }
    obj[array[z]] = count
}
return obj
};

console.log(countOnly(data, { a: true, c: true, l: false, o: true }));
console.log(countOnly(data, { r: true, l: true, b: false, w: true }));
console.log(countOnly(data, { t: false, u: true, s: true, ' ': true }));
