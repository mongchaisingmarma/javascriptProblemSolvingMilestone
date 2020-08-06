//Unit Convert Feet to Mile use variable and function
function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var getMile = feetToMile(1279200);
console.log(getMile);



//Amount of wood need to make chai, table , bed
function woodCalculator(chair, table, bed){
    var woodCountForChair = chair * 1;
    var woodCountForTable = table * 3;
    var woodCountForBed = bed * 5;
    totalWoodCount = woodCountForChair + woodCountForTable + woodCountForBed;
    return totalWoodCount;
}
var amountOfWood = woodCalculator(4, 53, 8);
console.log(amountOfWood);




//brick count for building floor
function brickCalculator(floor){
    if(floor <= 10){
        brickCount = floor * 15 * 1000;
    }
    if(floor <= 20){
        firstFloor = 10;
        var restFloor = floor - 10;
        brickCount = firstFloor * 15 * 1000 + restFloor * 12 *1000;
    }
    else if(floor > 20){
        var tenFloor = 10;
        var twentyFloor = 10;
        var restFloor = floor -20;
        brickCount = tenFloor * 15 * 1000 + twentyFloor * 12 * 1000  + restFloor * 10 * 1000;
    }
    return brickCount;
}
var totalBrickCount = brickCalculator(7);
console.log(totalBrickCount);




//Find tiny friend name in array
function tinyFriends(name){
    var tinyName = name[0];
    for(var i = 1; i < name.length; i++){
        var currentName = name[i];
        if(currentName.length < tinyName.length){
            tinyName = currentName;
        }
    }
    return tinyName;
}
var name =["Karim", "Rahim", "Amina", "Mong", "Achin", "Sumon", "Partha"];
var result = tinyFriends(name);
console.log(result);