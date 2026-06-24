const r1 = require('readline');


const rl = r1.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter first number: ", (a)=>{
  rl.question("Enter another number: ", (b) => {
    const sum = Number(a) + Number(b);
    console.log(`The sum of ${a} and ${b} is ${sum}`)
    rl.close()
  })
})

