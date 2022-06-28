// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
    return(Math.abs(42-pickupLocation))
}

function distanceFromHqInFeet(someValue) {
    return(264*distanceFromHqInBlocks(someValue));
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }


  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    return(Math.abs(destination-start)*264)
  }

  function calculatesFarePrice(start, destination){
      let distanceInFeet = distanceTravelledInFeet(start, destination)
      let fare;
      if(distanceInFeet < 400){
          fare = 0;
          return (fare)
      } else if (distanceInFeet >= 400 && distanceInFeet <= 2000){
          fare = (distanceInFeet-400) * 0.02;
          return(fare)
      } else if (distanceInFeet > 2000 && distanceInFeet < 2500){
          fare = 25
          return(fare)
      } else if (distanceInFeet > 2500){
          fare = 'cannot travel that far'
          return(fare)
      } 
  }
