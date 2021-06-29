var num=[];
for(i=10;i<=100;i++){
    num.push(Math.floor(Math.random() * (99 - 10 + 1)) + 10);
    
}
console.log(num);
for(i=0;i<num.length;i++){
const a=num[i]%10;
    Math.floor(num[i]/10);
    const b=num[i]%10;
    if(a===b){
        console.log(num[i]);
    }
}