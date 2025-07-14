const map = document.querySelector("#map-container");
let mapWidth = map.clientWidth;
let mapHeight = map.clientHeight;
let pointsClicked = '<polygon points="';
const countryObjects = {
    usa: {domObject: document.querySelector("#usa"), iso3166: "usa", countryName: "United States of America"},
    nzl: {domObject: document.querySelector("#nzl"), iso3166: "nzl", countryName: "New Zealand"},
    aus: {domObject: document.querySelector("#aus"), iso3166: "aus", countryName: "Australia"},
    ind: {domObject: document.querySelector("#ind"), iso3166: "ind", countryName: "India"},
    ita: {domObject: document.querySelector("#ita"), iso3166: "ita", countryName: "Italy"},
    tha: {domObject: document.querySelector("#tha"), iso3166: "tha", countryName: "Thailand"},
    jpn: {domObject: document.querySelector("#jpn"), iso3166: "jpn", countryName: "Japan"},
    kor: {domObject: document.querySelector("#kor"), iso3166: "kor", countryName: "Korea"}
}


window.addEventListener("resize", updateSize);
map.addEventListener("click", listMaker);
window.addEventListener("keypress", dumpList);

Object.keys(countryObjects).forEach(identifier =>
    {
        countryObjects[identifier]["domObject"].addEventListener('mouseover', changeFlag);
        countryObjects[identifier]["domObject"].addEventListener('mouseleave', removeFlag);
    }
)

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

function changeFlag(event) {
    console.log(event);
}

function removeFlag(event) {
    console.log(event);
    console.log(event["fromElement"].id);
}
