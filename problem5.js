//function returns the deatils of old cars
function problem5(inventory){
    /*using filter method fiter the array and stored car details of car manufactured
    before 2000 and strored in oldCars array*/
    let oldCars = inventory.filter(carYears => carYears.car_year < 2000);

    return oldCars;//returning the array of oldcars
}
module.exports=problem5;// exporting this funtion to testProblem5.js file