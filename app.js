var div1=document.getElementById("templet"), 
    key="2b6d19f45d11ac33bd35e0b98c6365b0",
    div2=document.getElementById("description"),
    div3=document.getElementById("Country"),
    input1=document.getElementById("input1"),
    input2=document.getElementById("input2");
    

const cliven=270;
function temp(){


fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input2.value}%2C${input1.value}&appid=2b6d19f45d11ac33bd35e0b98c6365b0`)
.then((result)=>{
let data=result.json();
console.log(data);
return data;
}).then((data1)=>{
  let temp1=`${Math.floor(data1.main.temp-cliven)}`;
  div1.innerHTML=temp1;
  console.log(data1)
  let des=(`${data1.weather[0].description}`)
  div2.innerHTML=des;
  let cont=(`${data1.name},${data1.sys.country}`);
  div3.innerHTML=cont;


})

}