
//find the body tag and store it in a variable called 'body'
var body = document.querySelector("body");

var taxiPositionCounter = 1;
var taxiPassengerCounter = 7

body.onkeydown = function(e){


    displayTaxiPassengerCount(taxiPassengerCounter);
    //right arrow : 39
    //left arrow  : 37
    //up arrow    : 38
    //down arrow  : 40
    //key o       : 79

//Check if the taxi position counter is less or more than 9 || 1
//Avoid errors thrown in developer tools console.
    if (taxiPositionCounter < 1) {
      taxiPositionCounter = 1;
    }
    else if (taxiPositionCounter > 9 ) {
      taxiPositionCounter = 1;
    }

    //Declare a new instance of traffic light
    var myTrafficLight = new TrafficLight(taxiPositionCounter);

    //Check if the up arrow is pressed
    if (e.keyCode === 38) {
      //Check the traffic light state
    if (myTrafficLight.state() === 'green' || myTrafficLight.state() === 'orange') {
      //Switch on the red light
      myTrafficLight.red();
  }

  }

//Check if the down arrow is pressed
  if (e.keyCode === 40) {
    //Check if the traffic light state
    if (myTrafficLight.state() === 'red' || myTrafficLight.state() === 'orange') {
      //Switch on green light
      myTrafficLight.green();
    }

    }

    //Check if the 'o' key is pressed
    if (e.keyCode === 79) {
      //Swith the light to orange
      myTrafficLight.orange();
    }

    //Check if the 'forward'/ right arrow is pressed
    if (e.keyCode === 39){
      //Check if the traffic light is red
      if (myTrafficLight.state() === 'red') {
          //do nothing
      }
      else {
        //Pass through the taxi position as a parameter to calculateTaxiLocation function
        var taxiLocation = calculateTaxiLocation(taxiPositionCounter);
        //Increment taxi position
        taxiPositionCounter++;
        //Pass taxi position to calculateTaxiLocation function
        var currentLocation = calculateTaxiLocation(taxiPositionCounter);
        //Pass above variables through as Parameters and move the taxi
        moveTaxi(taxiLocation, currentLocation);

      }

}

//move taxi backwards
  if (e.keyCode === 37) {
    if (myTrafficLight.state() === 'red') {
      //
    }

    else {var taxiLocation = calculateTaxiLocation(taxiPositionCounter);
    taxiPositionCounter--;
    var currentLocation = calculateTaxiLocation(taxiPositionCounter);5
    moveTaxi(taxiLocation, currentLocation);
  }
}

if (myTrafficLight.state() === 'orange' && e.keyCode === 79) {
    taxiPassengerCounter--;
}
else {
  //
}

if (taxiPositionCounter === 9) {
  var TotalPassengerLost = 7 - taxiPassengerCounter;
  displayMessage('You lost ' + TotalPassengerLost + ' passengers');
}

if (taxiPassengerCounter < 0) {
  alert('Game Over!!');
}

}
