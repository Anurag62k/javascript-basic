let score = prompt("enter score");
let grade;
if(score<=100 && score>=90){
    console.log("grade:A");
}
else if(score>=70 && score<=89){
    console.log("grade:B");
}
else if(score>=60 && score<=69){
    console.log("grade:C");
}
else if(score>=50 && score<=59){
    console.log("grade:D");
}
else if (score>=0 && score<=49){
    console.log("grade:F");
} else{
    console.log("not found");
}