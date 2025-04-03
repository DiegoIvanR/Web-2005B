function getSleepHours(day) {
    switch(day){
        case 'monday':
            return 6;
        case 'tuesday':
            return 5;
        case 'wednesday':
            return 4;
        case 'thursday':
            return 7;
        case 'friday':
            return 3;
        case 'saturday':
            return 10;
        case 'sunday':
            return 22;
        default:
            return 0;
    }
    
}
  
function getActualSleepHours() {
    return getSleepHours('monday')+ getSleepHours('tuesday')+ getSleepHours('wednesday')+ getSleepHours('thursday')+ getSleepHours('friday')+ getSleepHours('saturday')+ getSleepHours('sunday');

}
  
function getIdealSleepHours(idealHours) {
    return idealHours * 7;
    
}

function calculateSleepDebt() {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);
    if (actualSleepHours === idealSleepHours){
        console.log("Perfect amount of sleep!");
    } else if (actualSleepHours > idealSleepHours) {
        console.log(`User got ${actualSleepHours - idealSleepHours} hours of more sleep than needed`, );
    } else {
        console.log(`User should sleep ${idealSleepHours - actualSleepHours} more hours`);
    }

}


calculateSleepDebt();