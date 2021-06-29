var num = [];
for(i = 1; i<=10; i++){
    num.push(Math.floor(Math.random()*(999-100+1))+100);
}
console.log(num);
console.log("Largest element in Array "+Math.max(...num));
var max= Math.max.apply(null, num);
num.splice(num.indexOf(max), 1);
console.log("Second Largest Element in Array "+Math.max(...num));
console.log("Smallest element in Array "+Math.min(...num));
var min= Math.min.apply(null, num);
num.splice(num.indexOf(min), 1);
console.log("Second Smallest Element in Array "+Math.min(...num));
