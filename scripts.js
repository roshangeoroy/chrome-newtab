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
