var callFn=require('./app');
console.log('There are '+callFn.ap([1,2,3])+' elements in the array');
console.log(`sum of two numbers 3 and 4 is ${callFn.add(3,4)}`);
console.log(`Sum of two numbers pi and 5 is ${callFn.add(5,callFn.pi)}`);
