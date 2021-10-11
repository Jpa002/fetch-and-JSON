function init () {
  fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
    return response.json()
  }).then(function(json){
    console.log(json)
    let container = document.getElementById("container")
    let astronauts= ''
    for (let astronaut of json){
      astronauts += `<div class ="astronaut">
        <div class ="bio">
          <h3> ${astronaut.firstName} ${astronaut.lastName}</h3>
          <ul>
            <li> Hours in space: ${astronaut.hoursInSpace}</li>
            <li> Active: ${astronaut.active}</li>
            <li> Skills ${astronaut.skills}</li>
          </ul>
        </div>
        <img src="${astronaut.picture}" alt="" class ="avatar"/>
        </div>`
    }
    container.innerHTML = astronauts
  })
  }
  window.addEventListener("load", init);









// function init () {

//   const count = document.getElementById('count');
//   const astronauts = document.getElementById('astronaut')
//   let json =[]
//   fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
//    console.log(response);
//    response.json().then(function(json) {
//      const astronaut =document.getElementById("container")
//     astronaut.addEventListener("load", function(){
//      astronaut.innerHTML =`
//      <div>
//         <h3>name ${json[index].firstName}</h3>
//         <img src=${json[index].image} height=250></img>
//      </div>
//   `;
// } );
// } );
// } );

// }

// window.addEventListener("load", init);








// window.addEventListener('load',()=>{
//     const astronauts = document.getElementById('astronaut')
//     const count = document.getElementById('count');
//     const loadAstronauts = async () => {
//         try { 
//     fetch(
//         'https://handlers.education.launchcode.org/static/astronauts.json'
//     )
//     .then((res) =>res.json())
//     .then((data) => {
//         console.log(data)
//     })
//  } catch (err){
//         console.error(err);
//     }
    
// })
