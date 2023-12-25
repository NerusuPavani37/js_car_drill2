
//function which returns the details of car with particular id
function problem1(inventory,id){
    //by usuing filter method got the details of the given id and stored in the array of carDetails
  let carDetails = inventory.filter(carId => carId.id==id);
   return carDetails; //returning the details
}
module.exports=problem1;// exporting this funtion to testProblem1.js file