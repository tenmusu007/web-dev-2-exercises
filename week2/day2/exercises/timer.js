/*
Instruction
Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

PS: to access the arguments, use "process.argv". Console log this to try it out!

Example usage:

node timer1.js 10 3 5 15 9 
This will print "beep" at:

3 seconds
5 seconds
9 seconds
10 seconds
15 seconds

Edge Cases
With every software project, developers need to think about edge cases.

Instruction
Confirm that our script can handle some common edge cases.

For this app, we can think of at least these three:

No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.

*/
// console.log(fullSoretedNumber)
const stop = setInterval(() => {
    let count = 0
    const sortedNumber = process.argv.slice(2).sort((a,b)=>{
        return Number(a) < Number(b)? -1 : 1
    })
    console.log(sortedNumber)
    const fullSoretedNumber = sortedNumber.filter((item)=>{
        if(Number(item) > 0){
            return  Number(item)
        }
    })
    console.log(fullSoretedNumber)
    for (let i = 0; i < fullSoretedNumber.length; i++) {
        setTimeout(() => {
                    console.log(fullSoretedNumber[i]);
                    console.log("beep")
                    console.log(1000 * fullSoretedNumber[i])
                    count++
                }, 1000 * fullSoretedNumber[i]);
            }
            // console.log(1000 * fullSoretedNumber[i])
        if (count < fullSoretedNumber.length) {
            clearInterval(stop)
        }
}, 1000);