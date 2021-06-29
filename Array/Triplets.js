var arr=[];
for(i=1;i<=5;i++){
    arr.push(Math.floor(Math.random() * (9 - (-9) + 1)) + (-9));
}
console.log(arr);
let found = false;
for (let i = 0; i < arr.length - 2; i++) {
for (let j = i + 1; j < arr.length - 1; j++) {
    for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === 0)
        {
           console.log(arr[i], arr[j], arr[k]);
            found = true;
            
        }
    }
}
if(found === false) {
   console.log("Triplet Does Not Exist ");
}
}