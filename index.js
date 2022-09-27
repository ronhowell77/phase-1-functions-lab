function distanceFromHqInBlocks(destination){
const headquarters = "42";
let distanceInBlocks 
    distanceInBlocks = Math.abs(destination - headquarters)
  return distanceInBlocks
}
function distanceFromHqInFeet(destination){
    return distanceFromHqInBlocks(destination) * 264
    
}
function distanceTravelledInFeet(start, destination){
    let distanceInBlocks = Math.abs(destination - start) * 264
    return distanceInBlocks  
}
function calculatesFarePrice(start, destination){
    let feet = distanceTravelledInFeet(start, destination);
    if (feet <= 400) {
        return 0;
      } else if (feet > 400 && feet < 2000) {
        return ((feet - 400)*2)/100;
      } else if (feet > 2000 && feet <= 2500) {
        return 25;
      } else {
        return "cannot travel that far";
      }
}
