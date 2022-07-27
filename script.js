// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ul>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ul>
<img src="${}">
*/
//todo 1 : sey up window load handler
//todo 2: setup submit handler for the form
//todo 3: cancel submision using event.preventDefault

window.addEventListener("load", function(){
   
   let formNode = document.getElementById("launchForm");
   let launchStatusNode = document.getElementById("launchStatus");
   
   formNode.addEventListener("submit", function(event){
      event.preventDefault();

      let pilotInput = document.querySelector("input[name=pilotName]");
      let pilotName = pilotInput.value;
      let pilotCheck = Number(pilotName); //should be NaN

      let copilotInput = document.querySelector("input[name = copilotName]");
      let copilotName = copilotInput.value;
      let copilotCheck = Number(copilotName);

      let fuelInput = document.querySelector("input[name = fuelLevel]");
      let fuel = fuelInput.value;
      let fuelCheck = Number(fuel);

      let cargoInput = document.querySelector("input[name=cargoMass]");
      let cargo = cargoInput.value;
      let cargoCheck = Number(cargo);


      // if(pilotNode.value.length === 0 || copilotNode.value.length === 0 || fuelNode.value.length === 0 || cargoNode.value.length === 0 ){  
      //    event.preventDefault();
      //    alert("All fields are required!");
      // }

      console.log(isNaN(fuelCheck));
      if(!pilotName || !copilotName || !fuel || !cargo){
         alert("All fields are required!");
      }else if(isNaN(pilotCheck) === false || isNaN(copilotCheck) === false || isNaN(fuelCheck) === true || isNaN(cargoCheck) === true){
         alert("Make sure to enter valid information");
      }
     

      // if((typeof pilotNode.value )!= "string"){
      //    event.preventDefault();
      //    alert("Please enter a name");
      // }

   });

});




//todo 4: validate that all inputs have data

//todo 5 : check fuel level and cargo mass and report launch status

//todo 6: make the list visioble

//todo 7 : fetch planet data

//todo 8: randomly select a planet