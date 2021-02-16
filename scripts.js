// const compliment=document.getElementById('compliment');
// function getCompliment()
// {
//   fetch('https://complimentr.com/api')
//     .then(res => res.json())
//     .then(data =>
//     {
//       compliment.innerHTML='${data.compliment}'
//     })

// }
window.onload=initClock();
function fetchData()
{
  fetch("https://complimentr.com/api")
  .then(response => {
  return response.json();

  })
  .then(data=>
{
  console.log(data.compliment);
  document.getElementById('compliment').innerHTML= data.compliment;
}
  )
}
fetchData();

function updateClock()
{
  var now= new Date();
  var
      mo=now.getMonth(),
      dnum=now.getDate(),
      yr=now.getFullYear(),
      h=now.getHours(),
      min=now.getMinutes(),
      sec=now.getSeconds();
var ids=["month","date","year","hours","mins","secs"] ;
 var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    if(sec<10)
    {
      sec="0"+sec;
    }
  if(dnum>=11&&dnum<=20)
  {
    dnum=dnum+"th"
  }
  else
  if(dnum%10==1){
    dnum=dnum+"st";

  }
  else
  if(dnum%10==2){
    dnum=dnum+"nd";

  }
  else
  if(dnum%10==3){
    dnum=dnum+"rd";

  }
  else {
    dnum=dnum+"th"
  }
  var   values=[months[mo] ,dnum,yr,h,min,sec];
for(var i =0;i<6;i++)
{
  document.getElementById(ids[i]).innerHTML=values[i];
}

}
function initClock()
{
  updateClock();
  window.setInterval("updateClock()",1);
}
