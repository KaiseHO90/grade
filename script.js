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
let flag=false;
const arr=[];
const usecase=document.querySelectorAll('input');
function cal(){
usecase.forEach(element => {
    arr.push(element.value);
});
arr.forEach((item,index,arr)=>{
    if(index==6 || index==7){
        const hi=grade(item);
        if(hi==4){
            flag=true;
        }
        return arr[index]=grade(item)*2;
    }
    else{
        const hi=grade(item);
        if(hi==4){
            flag=true;
        }
        return arr[index]=grade(item)*3;
    }
});
if(flag){
    document.querySelector('body').innerHTML = `
  <h1 style="color: lightblue; text-align: center; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; font-size: 3rem; -webkit-text-stroke: 2px yellow;">
    YOU ARE COOKED
  </h1>`;



    return ;
}
actual_score=arr.reduce((acc,curr)=>{
    return acc+curr;
},0);
const hel=Math.round((actual_score/total)*1000)/100;
console.log(hel);
console.log(arr);
document.querySelector('p').innerHTML=`<h3> The CGPA is ${hel} </h3>`;
arr.length=0;
}
document.querySelector('button').addEventListener('click',cal);
