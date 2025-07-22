const map = document.querySelector("#map-container");
let mapWidth = map.clientWidth;
let mapHeight = map.clientHeight;
let pointsClicked = '<polygon points="';
let pageIndex = 0;
const flagImage = document.querySelector("#flag");
const countryName = document.querySelector("#country-name");
const pagesContainer = document.querySelector("#pages-container");
const returnButton = document.querySelector("#return-button");
const resultsContainer = document.querySelector("#results-container");


// I dont know enough JS to import. In any event, the number of characters for all my websites is tiny. It's images that will slow it down.
/*
FORMATTING NOTES:
DO: || DONT:
 || anything else
tablespoon || Tablespoon
"12 tablespoons", "butter" || "12 tablespoons ", " butter" (I WILL ADD SPACES AT IMPLEMENTATION)
imperial, metric, description || any other layout
100g || 100 g 
1/2 || 0.5
"baking soda" || "baking soda." (Stylically I prefer w/o periods in ingredients)
["blah blah blah", "blah blah blah"] || ["1. blah blah blah", "2. blah blah blah"] (NO numbers)

TO IMPLEMENT LATER:
per-step ingredients

*/
const recipes = {
    "usa": {
        cookiePie: {
            id: "cookie-pie",
            name: "Cast Iron Cookie Pie",
            author: "Zach Irain",
            source: "tastesbetterfromscratch.com",
            url: "cookie-pie", /* Thumbnail can be accessed by using tn standard */
            time: [],
            preamble: "This is my recipe, adjusted from Lauren Allen's from tastesbetterfromscratch.com. This is one of Abby's favourites. I incorporated some of Kenji Alt Lopez steps to making a better cookie.",
            specialEquipment: ["Cast Iron Skillet"],
            ingredients: [
                ["12 tablespoons", "170g", "butter - melted"],
                ["1 cup", "200g", "light brown sugar"],
                ["1/2 cup", "100g", "white sugar"],
                ["1 large egg"],
                ["1 egg yolk"],
                ["1 tablespoon", "15ml", "vanilla extract"],
                ["2 cups + 2 ", "265g", "all-purpose flour"],
                ["1/2 teaspoon", "2.5g", "baking soda"],
                ["1/2 teaspoon", "2.5g", "salt"],
                ["1 1/2 cups", "270g", "chocolate chips or other chopped chocolate"]
            ],
            instructions: [
                "Melt butter for ~45 seconds. Allow to cool for a few minutes",
                "Add melted butter, white sugar, and brown sugar to a bowl and beat with an electric mixer until well-blended.",
                "Add the egg, egg yolks, and vanilla; then, mix until well integrated.",
                "Mix in the flour, baking soda, and salt, until barely combined. Then stir in the chocolate chips, reserving a handful for topping the dough.",
                "Refrigerate the dough overnight - this will enhance the flavour",
                "When ready to cook, heat the oven to 325f/160c.",
                "Press the dough into a TBD inch cast iron skillet then sprinkle remaining chocolate chips on top",
                "Bake for 28-25 minutes until it looks just barely golden. The dough will continue to cook in the skillet once removed, and will firm considerably as it cools, so don't worry about undercooking it.",
                "Allow to cool for as long as you can, or 25 minutes, before slicing and serving."
            ],
            notes: [
                "The chocolate inside the cookie tends to melt into the dough, making a chocolatey mixture. You could probably prevent this with a chocolate with a higher melting point, or sprinkling more of your chocolate on top of the dough.",
                "You could probably use anything you wanted to cook these, eg stainless steel or a springform tin. However, the steep sides of most cast irons plus their thermal mass are well suited to making a cookie pie.",
                "If you're unable to wait until the next day to bake the cookies, I recommend at least waiting an hour or two. This will allow the flour to autolyse, which will create a better tasting cookie. Kenji Alt Lopez has some very detailed writing on cookie science for further reading."
            ]      
        },
        chickenBrine: {
            Name: "Chicken Brine"
        }


    },
    nzl: {

    },
    aus: {

    },
    ind: {

    },
    ita: {

    },
    tha: {

    },
    jpn: {

    },
    kor: {

    }
};



const countryObjects = {
    usa: {domObject: document.querySelector("#usa"), iso3166: "usa", countryName: "United States of America"},
    nzl: {domObject: document.querySelector("#nzl"), iso3166: "nzl", countryName: "New Zealand"},
    aus: {domObject: document.querySelector("#aus"), iso3166: "aus", countryName: "Australia"},
    ind: {domObject: document.querySelector("#ind"), iso3166: "ind", countryName: "India"},
    ita: {domObject: document.querySelector("#ita"), iso3166: "ita", countryName: "Italy"},
    tha: {domObject: document.querySelector("#tha"), iso3166: "tha", countryName: "Thailand"},
    jpn: {domObject: document.querySelector("#jpn"), iso3166: "jpn", countryName: "Japan"},
    kor: {domObject: document.querySelector("#kor"), iso3166: "kor", countryName: "South Korea"}
}

window.addEventListener("resize", updateSize);
map.addEventListener("click", listMaker);
window.addEventListener("keydown", windowKeyDownFunctions);
returnButton.addEventListener("click", back);


Object.keys(countryObjects).forEach(identifier =>
    {
        countryObjects[identifier]["domObject"].addEventListener('mouseover', changeFlag);
        countryObjects[identifier]["domObject"].addEventListener('mouseleave', removeFlag);
        countryObjects[identifier]["domObject"].addEventListener('click', countrySelected);
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

function windowKeyDownFunctions(event) {
    if(event.key === " ") {
        console.log(pointsClicked + '"></polygon>');    
    }
    if (event.key === "w") {
        console.log("Moving up!");
        page("up");
    } else if (event.key === "s") {
        console.log("Moving down!");
        page("down");
    }

}

function changeFlag(event) {
    let countryID = event['srcElement'].id;
    event.preventDefault();
    flagImage.onerror = (error) => {
        flagImage.src=("./resources/missing-flag.svg");
        countryName.textContent=("Error.");
        countryName.style.margin=("0vmin 1vmin");
    }
    flagImage.src=(`./resources/${countryID}-flag.svg`);   
    countryName.textContent=(`${countryObjects[countryID]["countryName"]}`);
    countryName.style.margin=("0vmin 1vmin");
}

function removeFlag(event) {
    //console.log(event);
    flagImage.src=("./resources/missing-flag.svg");
    //flagImage.src=("");
    countryName.textContent=("");    
    countryName.style.margin=("0vmin 0vmin");
}

function page(direction) {
    console.log("Trying to move page");
    console.log(pagesContainer);
    (direction === "up") ? pageIndex+= -100: pageIndex += 100;
    pagesContainer.style.top = (`${pageIndex}%`);
}

function countrySelected(event) {
    deleteTiles(); // Clear out old tiles
    displayNewTiles(event['srcElement'].id) // Get new tiles based on country clicked
    console.log("Trying to move page");
    console.log(pagesContainer);
    pageIndex += -100; // Updates page index variable
    pagesContainer.style.top = (`${pageIndex}%`); // Moves entire page up 100%, which effectively movies viewport down 100%
}

function back(event) {
    console.log("Trying to move page");
    pageIndex += 100;
    pagesContainer.style.top = (`${pageIndex}%`);
}

function deleteTiles() {
    const tiles = document.querySelectorAll(".recipe-card");
    console.log(tiles);
    tiles.forEach(tile => {
        tile.remove();
    }
    )
    console.log("Destroyed tiles");
}

function displayNewTiles(id) {
    let  allTiles = recipes[id];
    allTiles = Object.keys(allTiles);
    allTiles.forEach(recipe => {
        createTile(recipes[id][`${recipe}`]);
    }
    )
}

function createTile(recipe) {
    // Give up if there is indication of missing data
    if (recipe.name === undefined || recipe.id === undefined) {
        console.log("Abandon ship! Missing data!");
        return;
    }


    // Create new tile outline
    const newTile = document.createElement("div");
    newTile.classList.add("recipe-card");
    newTile.id = (recipe.id);
    resultsContainer.appendChild(newTile); // Place within container

    // Create new img
    const newImg = document.createElement("img");
    console.log(recipe);
    console.log(recipe.url);
    let fileURL = recipe.url;
    if(fileURL === undefined) {
        console.log("Failed to find image")
        newImg.src = ("./resources/missing-image_tn.png");
    } else {
        newImg.src = (`./resources/${recipe.url}_tn.png`);
    }
    newTile.appendChild(newImg); // Place within container

    // Create new text div
    const newName = document.createElement("div");
    newName.textContent = (`${recipe.name}`);
    newName.classList.add("recipe-text-container");
    newTile.appendChild(newName); // Place within container
}