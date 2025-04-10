let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

let startButton = document.getElementById('start');
// Access HTML elements

let botDoorPath = './images/robot.svg';
let beachDoorPath = './images/beach.svg';
let spaceDoorPath = './images/space.svg';
let closedDoorPath = './images/closed_door.svg';

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;

// Define game logic to check doors, progress game, end game, and choose a random chore door
function isClicked(door){
    if (door.getAttribute('src') === closedDoorPath){
        return true;
    }
    return false;
}

function isBot(door){
    if(door.getAttribute('src') === botDoorPath){
        return true;
    }
    return false;
}

function GameOver(status){
    if(status == 'win'){
        startButton.textContent = 'You win! Play again?';
    } else {
        startButton.textContent = 'Game over! Play again?';
    }
    currentlyPlaying = false;
}

function playDoor(door){
    numClosedDoors--;
    console.log(numClosedDoors)
    if(numClosedDoors == 0){
        GameOver('win');
    } else if(isBot(door)){
        GameOver();
    }
}

function randomChoreDoorGenerator(){
    choreDoor = Math.floor(Math.random() * 3);
    if(choreDoor === 0){
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor === 1){
        openDoor2 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else {
        openDoor3 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
    }
}
// Add onclick handlers to doors and start button


// Start a game round
function startRound(){
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    numClosedDoors = 3;
    startButton.textContent = 'Good luck!';
    currentlyPlaying = true;
    randomChoreDoorGenerator();
}

doorImage1.onclick = () => {
    if(currentlyPlaying && isClicked(doorImage1)){
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    }
}
doorImage2.onclick = () => { 
    if(currentlyPlaying && isClicked(doorImage2)){
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    }
}
doorImage3.onclick = () => {
    if(currentlyPlaying && isClicked(doorImage3)){
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    }
}
startButton.onclick = () => {
    if(currentlyPlaying === false){
        startRound();
    }
}

startRound();