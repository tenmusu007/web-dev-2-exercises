// node timer1.js 10 3 5 15 9

const args = process.argv.slice(2);
const newArr = args
  .filter((element) => {
    return Number(element) && Number(element) >= 0;
  })

  .map((el) => {
    return Number(el);
  });
console.log(newArr);
// newArr.sort((a, b) => a - b);
newArr.forEach((element) => {
  setTimeout(() => {
    console.log(`beep - ${element} seconds`);
  }, element * 1000);
});
