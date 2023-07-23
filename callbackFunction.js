function sum(a, b, callback) {
   console.log(`${a} and ${b} sum result is ${a + b}`);
   callback();
}


function task() {
   console.log('I had completed my task.')
}



sum(40, 59, task)
