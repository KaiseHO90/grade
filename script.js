function grade(input){
    if(input=='A' || input=='a'){
        return 9;
    }
    else if(input=='s' || input=='S'){
        return 10;
    }
    else if(input=='B' || input=='b'){
        return 8;
    }
    else if(input=='C' || input=='c'){
        return 7;
    }
    else if(input=='D' || input=='d'){
        return 6;
    }
    else if(input=='E' || input=='e'){
        return 5;
    }
    else{
        return 4;
    }

}
const total=220;
let actual_score=0;
const arr=[];
const usecase=document.querySelectorAll('input');
function cal(){
usecase.forEach(element => {
    arr.push(element.value);
});
arr.forEach((item,index,arr)=>{
    if(index==6 || index==7){
        return arr[index]=grade(item)*2;
    }
    else{
        return arr[index]=grade(item)*3;
    }
});
actual_score=arr.reduce((acc,curr)=>{
    return acc+curr;
},0);
const hel=Math.round((actual_score/total)*1000)/100;
console.log(hel);
console.log(arr);
document.querySelector('p').innerHTML=`<h1> The CGPA is ${hel} </h1>`;
arr.length=0;
}
document.querySelector('button').addEventListener('click',cal);
