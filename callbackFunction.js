function sum(a, b, callback) {
   console.log(`${a} and ${b} sum result is ${a + b}`);
   callback();
}






sum(40, 59, _ => console.log('I had completed my task.'))
