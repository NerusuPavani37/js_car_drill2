
//function which returns the array of years of all cars
function problem4(inventory){
    //using map transformed the array of inventory into array of inventory.car_year
    let yearsOfCars = inventory.map(carYears => carYears.car_year);
    //return the array of years of all cars
    return yearsOfCars;
};


module.exports=problem4;// exporting this funtion to testProblem4.js file