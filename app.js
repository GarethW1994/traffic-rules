
//find the body tag and store it in a variable called 'body'
var body = document.querySelector("body");

var taxiPositionCounter = 1;


body.onkeydown = function(e){

  console.log(e);

    displayTaxiPassengerCount(7);

    //right arrow : 39
    //left arrow  : 37
    //up arrow    : 38
    //down arrow  : 40

    var myTrafficLight = new TrafficLight(taxiPositionCounter);



    // to move the taxi forward...
    // when the right arrow is pressed
    //work with `taxiPositionCounter`
    if (myTrafficLight.state() === 'orange') {
      displayMessage('Traffic Light is orange. Slow down!');
    }
    if (e.keyCode === 38) {
    if (myTrafficLight.state() === 'green' || myTrafficLight.state() === 'orange') {
      myTrafficLight.red();
      displayMessage("Traffic Light Red. Switch light to green to move!")
  }

  }

  if (e.keyCode === 40) {
    if (myTrafficLight.state() === 'red' || myTrafficLight.state() === 'orange') {
      myTrafficLight.green();
      displayMessage('Traffic Light is green. You may go!')
    }

    }


    // call `calculateTaxiLocation` to get a taxi location className store it in a variable.
    // increment the `taxiPositionCounter`
    // call `calculateTaxiLocation` to the new a taxi location className store it in another variable.
    //Declare new traffic light


    if (e.keyCode === 39){
      if (myTrafficLight.state() === 'red') {
          //
      }
      else {
        var taxiLocation = calculateTaxiLocation(taxiPositionCounter);
        taxiPositionCounter++;
        var currentLocation = calculateTaxiLocation(taxiPositionCounter);
        //pass both to the `moveTaxi( firstClassName, secondClassName)` function
        //
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
    var currentLocation = calculateTaxiLocation(taxiPositionCounter);
    moveTaxi(taxiLocation, currentLocation);
  }
}




}
