let price=[250,645,300,900,50];
console.log("original price",price);
let temp=price;
for(let i=0;i<temp.length;i++){
    temp[i]=temp[i]-temp[i]*(10/100);
}
console.log("discounted price is",temp);