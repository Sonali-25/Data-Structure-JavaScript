const myMap=new Map();
const key1=1,key2=2,key3=3,key4=4,key5=5,key6=6,key7=7,key8=8,key9=9,key10=10,key11=11,key12=12;
myMap.set(key1,"Jan");
myMap.set(key2,"Feb");
myMap.set(key3,"Mar");
myMap.set(key4,"Apr");
myMap.set(key5,"May");
myMap.set(key6,"June");
myMap.set(key7,"July");
myMap.set(key8,"Aug");
myMap.set(key9,"Sep");
myMap.set(key10,"Oct");
myMap.set(key11,"Nov");
myMap.set(key12,"Dec");
console.log(myMap);
var arr1=[];
for(i=1;i<=50;i++){
    arr1.push(Math.floor(Math.random() * (12 - 1 + 1)) + 1);
}
console.log(arr1);
var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                }
        }
        m=0;
}
console.log(item+" ( " +mf +" times ) ") ;
if(item==key1)
    console.log(myMap.get(key1));
else if(item==key2)
    console.log(myMap.get(key2));
else if(item==key3)
    console.log(myMap.get(key3));
else if(item==key4)
    console.log(myMap.get(key4));
else if(item==key5)
    console.log(myMap.get(key5));
else if(item==key6)
    console.log(myMap.get(key6));
else if(item==key7)
    console.log(myMap.get(key7));
else if(item==key8)
    console.log(myMap.get(key8));
else if(item==key9)
    console.log(myMap.get(key9));
else if(item==key10)
    console.log(myMap.get(key10));
else if(item==key11)
    console.log(myMap.get(key11));
else
    console.log(myMap.get(key12));
