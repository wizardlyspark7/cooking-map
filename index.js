const map = document.querySelector("#map-container");
let mapWidth = map.clientWidth;
let mapHeight = map.clientHeight;
let pointsClicked = '<polygon points="';

//<polygon points="17,21.5 15,30 16,36 19.5,36, 21.5,37 30,36 35,21.5"></polygon>

window.addEventListener("resize", updateSize);
map.addEventListener("click", listMaker);
window.addEventListener("keypress", dumpList);

function listMaker(event) {
    let eventX = Math.round((event.offsetX / mapWidth)*1000)/10;
    let eventY = Math.round((event.offsetY / mapHeight)*1000)/10;
    let output = ` ${eventX},${eventY}`;
    console.log(output);
    console.log(`X: ${eventX}%`);
    console.log(`Y: ${eventY}%`);
    pointsClicked = pointsClicked + output;
}

function updateSize() {
    console.log("RESIZE!!!");
    mapWidth = map.clientWidth;
    mapHeight = map.clientHeight;
}

function dumpList() {
    console.log(pointsClicked + '"></polygon>');
}