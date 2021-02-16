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

// function updateClock()
// {
//   var now= new Date();
//   var
//       mo=now.getMonth(),
//       dnum=now.getDate(),
//       yr=now.getFullYear(),
//       h=now.getHours(),
//       min=now.getMinutes(),
//       sec=now.getSeconds();
// var ids=["month","date","year","hours","mins","secs"] ;
//  var   values=["mo","dnum","yr","h","min","sec"];
//  var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
// // for(var i =0;i<6;i++)
// // {
// //   document.getElementById(ids[i]).innerHTML=values[i];
// // }
// document.getElementById("secs").firstChild.nodeValue=sec;
// console.log(mo);
// }
// function initClock()
// {
//   updateClock();
//   window.setInterval("updateClock()",1);
// }
