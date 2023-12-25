
//function returns the deatils of bmw and audi cars
function problem6(inventory){
    //using filter method fiitered the car_make which are bmw or audi
    let bmw_audi_deatils =inventory.filter(detailsOdBmwAndAudi => detailsOdBmwAndAudi.car_make == 'BMW'
    || detailsOdBmwAndAudi.car_make == 'Audi');

    //returning the deatils of bmw car and audi car;
    return bmw_audi_deatils;
}

module.exports=problem6;// exporting this funtion to testProblem6.js file