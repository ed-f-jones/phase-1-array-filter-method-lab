// Code your solution her
function findMatching  (drivers, name)  {
   const newArray = drivers.filter(function(driver){
    return driver.toLowerCase() === name.toLowerCase()
   });
   return newArray;
};


function fuzzyMatch(drivers, letter) {
    const myArray = drivers.filter(function (names) {
        return names[0] === letter[0];
    });
    return myArray;
};

function matchName(names, match) {
    const newArray = names.filter(function(person){
        return person.name === match
    })
    return newArray;
}