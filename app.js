var div1=document.getElementById("templet"), 
    
    key="2b6d19f45d11ac33bd35e0b98c6365b0",
    div2=document.getElementById("description"),
    div3=document.getElementById("Country"),
    div4=document.getElementById("templetmax"),
    input1=document.getElementById("input1"),
    input2=document.getElementById("input2"),
    img1=document.getElementById("img"),
    dd=document.getElementById("date");
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var n = weekday[d.getDay()];
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var n1 = month[d.getMonth()];



    
    

const kelvin=273.15;
function temp(){


fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input2.value}%2C${input1.value}&appid=2b6d19f45d11ac33bd35e0b98c6365b0`)
.then((result)=>{
let data=result.json();
console.log(data);
return data;
}).then((data1)=>{
  let temp1=`${Math.ceil(data1.main.temp-kelvin)}`;
  div1.innerHTML=temp1 +" ْc";
  let temp2=`${Math.ceil(data1.main.temp_max-kelvin +1)}`;
  let temp3=`${Math.ceil(data1.main.temp_min-kelvin -1)}`;
  div4.innerHTML="L:"+temp3+" ْ"+"-"+" H:"+temp2+" ْ" ;
  console.log(data1)
  let des=(`${data1.weather[0].description}`)
  div2.innerHTML=des;
  dd.innerHTML= n +" " + d.getDate() + " " +n1 +" " +d.getFullYear();

  let cont=(`${data1.name},${data1.sys.country}`);
  div3.innerHTML=cont;
  let icone1=(`${data1.weather[0].icon}`)
  img1.innerHTML=icone1;
  img1.setAttribute("src",`http://openweathermap.org/img/wn/${data1.weather[0].icon}@2x.png`);

  



})

};
