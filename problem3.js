
//function which returns the sorted order of car models
function problem3(inventory){
    //using map i stored car_models in the array of modelesOfCar
    let modlesOfCar = inventory.map(carModels => carModels.car_model)
    
    //using sort function on modlesOfCar sorted them in alphabetical order
    let modlesOfCarSorted =modlesOfCar.sort((a, b) => a.localeCompare(b));

    //return the sorted array of car_model
    return modlesOfCar;
}

module.exports=problem3;// exporting this funtion to testProblem3.js file