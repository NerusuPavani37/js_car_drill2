
//function which returns the details of car with particular id
function problem2(inventory,id){
    //by usuing filter method got the details of the given id and stored in the array of LastCarDetails
    let lastCarDetails=inventory.filter(lastCarId => lastCarId.id==id)
    return lastCarDetails;//returning the details
}
module.exports=problem2;// exporting this funtion to testProblem2.js file