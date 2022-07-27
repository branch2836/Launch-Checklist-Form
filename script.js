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
//todo 4: validate that all inputs have data

window.addEventListener("load", function(){
   
   let formNode = document.getElementById("launchForm");
   let launchStatusNode = document.getElementById("launchStatus");
   let itemStatusNode= document.getElementById("itemStatus");
   let pilotStatusNode = document.getElementById("pilotStatus");
   let copilotStatusNode = document.getElementById("copilotStatus");
   let fuelStatusNode = document.getElementById("fuelStatus");
   let cargoStatusNode = document.getElementById("cargoStatus");
   let launchStstusNode = document.getElementById("launchStatius");
   let IsLaunchReady = false;
   
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


      console.log(isNaN(fuelCheck));
      if(!pilotName || !copilotName || !fuel || !cargo){
         alert("All fields are required!");
      }else if(isNaN(pilotCheck) === false || isNaN(copilotCheck) === false || isNaN(fuelCheck) === true || isNaN(cargoCheck) === true){
         alert("Make sure to enter valid information");
      }
     
      itemStatusNode.style.visibility = "visible";
      pilotStatusNode.innerHTML = `${pilotName}`;
      copilotStatusNode.innerHTML = `${copilotName}`;
     
      if(fuel < 10000){
         fuelStatusNode.innerHTML = "Not Enough Fuel";
         IsLaunchReady = false;
      }else if (cargo > 10000){
         cargoStatusNode.innerHTML = "Too much cargo mass";
         IsLaunchReady = false;
      }else{
         fuelStatusNode.innerHTML = "Fuel level check passed";
         cargoStatusNode.innerHTML = "Cargo mass check passed";
         IsLaunchReady = true;
      };
      
      if(!IsLaunchReady){
         launchStatusNode.innerHTML = "Shuttle not ready for launch";
         launchStatusNode.style.color = "red";
      }else{
         launchStatusNode.innerHTML ="Shuttle is ready for Launch";
         launchStatusNode.style.color = "green";
      }

   });

});






//todo 5 : check fuel level and cargo mass and report launch status

//todo 6: make the list visioble

//todo 7 : fetch planet data

//todo 8: randomly select a planet