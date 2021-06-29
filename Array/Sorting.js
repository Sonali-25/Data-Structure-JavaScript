var num = [];
for(i = 1; i<=10; i++){
    num.push(Math.floor(Math.random()*(999-100+1))+100);
}
num.sort();
console.log(num);
console.log("Second Smallest Element in Array "+num[1]);
console.log("Second Largest Element in Array "+num[8]);
