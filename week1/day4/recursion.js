
const printItems = function (array) {
  // console.log("------")
  for(let i in array){
    if(Array.isArray(array[i])){
      printItems(array[i])
    }else{
      console.log(array[i])
    }
  }
}
//Print only items (emojis) in the console. Not the arrays.
const array = ['😎', '💩', '🤗', '😼', '😂'];
printItems(array);
// console.log(array)
const array2 = ['😎', ['💩', '🤗'], '😼', '😂'];
printItems(array2);
// console.log(array2)

const array3 = [
  '😎',
  [
    ['💩', ['🤗']],
    [[['😼']], '😂'],
  ],
];
printItems(array3);
// console.log(array3);
