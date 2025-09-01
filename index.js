const map = document.querySelector("#map-container");
let mapWidth = map.clientWidth;
let mapHeight = map.clientHeight;
let pointsClicked = '<polygon points="';
let pageIndex = 0;
const flagImage = document.querySelector("#flag");
const countryBlock = document.querySelector("#country-block");
const countryName = document.querySelector("#country-name");
const pagesContainer = document.querySelector("#pages-container");
const returnButtons = document.querySelectorAll("#return-button");
const resultsContainer = {
                            entree: document.querySelector("#entree"),
                            main: document.querySelector("#main"),
                            baked: document.querySelector("#baked"),
                            other: document.querySelector("#other"),
                        };
const headersContainer = {
                            entree: document.querySelector("#entree-header"),
                            main: document.querySelector("#main-header"),
                            baked: document.querySelector("#baked-header"),
                            other: document.querySelector("#other-header"),
                        };
const countryListButton = document.querySelector("#country-list-toggle-button");
const countryListDiv = document.querySelector("#country-list");
const countryItemsContainer = document.querySelector("#country-list-items-container");
const resultsCountryHeader = document.querySelector("#results-country-header");
const imperialButton = document.querySelector("#unitswitch-imperial");
const metricButton = document.querySelector("#unitswitch-metric");
const unitswitchColor = document.querySelector("#unitswitch-color");
const authorURL = {
                zachIrain: ["Zachary Irain", "zach-irain"],
                glenIrain: ["Glen Irain", "glen-irain"],
}
let recipeID = undefined;
let countrySelectedID = "";
let currentUnit = "metric";
let unitIndex = 1;
let countryListStatus = "closed";


import recipes from './recipes.js';

console.log(recipes);

const countryObjects = {
    usa: {domObject: document.querySelector("#usa"), iso3166: "usa", countryName: "United States of America", adjective: "American"}, 
    nzl: {domObject: document.querySelector("#nzl"), iso3166: "nzl", countryName: "New Zealand", adjective: "Kiwi"},
    aus: {domObject: document.querySelector("#aus"), iso3166: "aus", countryName: "Australia", adjective: "Australian"},
    fra: {domObject: document.querySelector("#fra"), iso3166: "fra", countryName: "France", adjective: "French"},
    ind: {domObject: document.querySelector("#ind"), iso3166: "ind", countryName: "India", adjective: "Indian"},
    ita: {domObject: document.querySelector("#ita"), iso3166: "ita", countryName: "Italy", adjective: "Italian"},
    tha: {domObject: document.querySelector("#tha"), iso3166: "tha", countryName: "Thailand", adjective: "Thai"},
    jpn: {domObject: document.querySelector("#jpn"), iso3166: "jpn", countryName: "Japan", adjective: "Japanese"},
    kor: {domObject: document.querySelector("#kor"), iso3166: "kor", countryName: "South Korea", adjective: "South Korean"},
    hun: {domObject: document.querySelector("#hun"), iso3166: "hun", countryName: "Hungary", adjective: "Hungarian"},
    gbr: {domObject: document.querySelector("#gbr"), iso3166: "gbr", countryName: "United Kingdom", adjective: "British"},
}



// Initial actions taken upon load.
metricButton.addEventListener("click", unitSwitch);
imperialButton.addEventListener("click", unitSwitch);
window.addEventListener("resize", unitSwitch);
map.addEventListener("click", listMaker);
window.addEventListener("keydown", windowKeyDownFunctions);
returnButtons.forEach(button =>{
    button.addEventListener("click", back);}
)
countryListButton.addEventListener("click", toggleCountryList);


Object.keys(countryObjects).forEach(country => {
    createListItem(country);
});

document.querySelectorAll(".country-list-tile-item").forEach(item => {
    item.addEventListener("click", countrySelected);
})

Object.keys(countryObjects).forEach(identifier =>
    {
        console.log(countryObjects[identifier].domObject);
    }
)

Object.keys(countryObjects).forEach(identifier =>
    {
        console.log(identifier);
        countryObjects[identifier]["domObject"].addEventListener('mouseover', changeFlag);
        countryObjects[identifier]["domObject"].addEventListener('mouseleave', removeFlag);
        countryObjects[identifier]["domObject"].addEventListener('click', countrySelected);
    }
)

if (map.clientWidth < 1500) {
    if(countryListStatus === "closed") {
        toggleCountryList();
    }
    window.alert("Your browser width is below the recommended level for the map view. I recommend using the list and not map view.");
}



function createListItem(country) {

    // Create tile

    console.log("making a tile");
    const newTile = document.createElement("div");
    newTile.classList.add("country-list-tile-item");
    countryItemsContainer.appendChild(newTile); // Place within container
    newTile.id = (country); // This is elegant if I can make it work.
    newTile.addEventListener("click", countrySelected);

    // Create text div

    const newText = document.createElement("div");
    newText.classList.add("country-list-tile-text");
    newText.innerText = countryObjects[country].countryName;
    newText.id = (country);
    newTile.appendChild(newText);

    // Create image div

    const newImage = document.createElement ("img");
    newImage.src = (`./resources/${country}-flag.svg`);
    newImage.id = (country);
    newTile.appendChild(newImage);

}



function toggleCountryList(event) {
    if(countryListStatus === "closed") {
        openCountryList();
    } else if (countryListStatus === "open") {
        closeCountryList();
    } else {
        console.log("Uh-oh!");
    }
}

function closeCountryList() {
    countryListStatus = "closed";
    countryListDiv.style.left = ("-90%");
}

function openCountryList() {
    countryListStatus = "open";
    countryListDiv.style.left = ("0%");
}

function unitSwitch(event) {
    toggleUnits(event.srcElement.id);
}

function toggleUnits(srcElement) {

    const switchTo = undefined;

    console.log(srcElement);
    if (srcElement === "unitswitch-imperial") {
        let switchTo = "imperial";
        currentUnit = "imperial"
        unitIndex = 0;
        unitswitchColor.style.left=("0px")
        console.log("Imperial units should be displaying");

    } else if (srcElement === "unitswitch-metric") {
        let switchTo = "metric";
        currentUnit = "metric"
        unitIndex = 1;
        console.log("Metric units should be displaying");
        unitswitchColor.style.left=("calc(var(--switch-width) - 100px)");
    }


    let newIngredients = recipes[countrySelectedID][getRecipeName(recipeID)].ingredients;
    let counter = 0;
    let allUnits = document.querySelectorAll(".ingredient-unit");
    allUnits.forEach(unit => {
        if(newIngredients[counter].length === 2) {
            unit.innerHTML = newIngredients[counter][0];
        } else {
            unit.innerHTML = newIngredients[counter][unitIndex];
        }
        
        counter++
    })
}

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
    if(map.clientWidth < 1500) {
        console.log("too small");
    }
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
        deleteRecipeDelay();
    }

}

function deleteRecipeDelay() { // TODO: Have this function delay then re-enable the clicking of buttons.
    console.log("Deleting recipe");
    let recipeItems = document.querySelectorAll(".delete-on-page-up");
    setTimeout(function(){ // Wait 1s to execute
        recipeItems.forEach(item => {
        item.remove();
    })
    }, 1000)

}

function changeFlag(event) {
    let countryID = event['srcElement'].id;
    console.log(countryID);
    event.preventDefault();
    flagImage.onerror = (error) => {
        flagImage.src=("./resources/missing-flag.svg");
        countryName.textContent=("Error.");
        countryName.style.margin=("0vmin 1vmin");
    }
    flagImage.src=(`./resources/${countryID}-flag.svg`);   
    countryName.textContent=(`${countryObjects[countryID]["countryName"]}`);
    countryName.style.margin=("0vmin 1vmin");
    countryBlock.style.zIndex = "100";
}

function removeFlag(event) {
    flagImage.src=("./resources/missing-flag.svg");
    countryName.textContent=("");    
    countryName.style.margin=("0vmin 0vmin");
    countryBlock.style.zIndex = "-1";
}

function page(direction) {
    console.log("Trying to move page");
    if (direction === "up") {
        pageIndex += -100;
        deleteRecipeDelay();
    } else {
        pageIndex += 100;
    }
    pagesContainer.style.top = (`${pageIndex}%`);
}

function countrySelected(event) { // Needs update to handle inputs from the country list
    console.log(event);
    countrySelectedID = event['srcElement'].id;
    console.log(countrySelectedID);
    console.log(Object.keys(resultsContainer));
    hideHeaders();
    deleteTiles(); // Clear out old tiles
    displayNewTiles(countrySelectedID) // Get new tiles based on country clicked
    console.log("Trying to move page");
    console.log(pagesContainer);
    pageIndex += -100; // Updates page index variable
    pagesContainer.style.top = (`${pageIndex}%`); // Moves entire page up 100%, which effectively movies viewport down 100%
    console.log(resultsCountryHeader);
    resultsCountryHeader.innerText = (`${countryObjects[countrySelectedID].adjective} Food`)
}

function hideHeaders() {
    Object.keys(resultsContainer).forEach(section => {
        headersContainer[section].style.display = ('none');
        console.log(`hiding: ${section}`)
    })
}

function back(event) {
    if(pageIndex < 0) {
        console.log("Trying to move page");
        pageIndex += 100;
        pagesContainer.style.top = (`${pageIndex}%`);
    } else {
        console.log("No - already on page 1.");
    }
    console.log(pageIndex);
    deleteRecipeDelay();
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
    if (allTiles === undefined) {
        console.log("Error: No recipes for this country.");
        return
    }
    try {
        allTiles = Object.keys(allTiles);
    } catch {
        console.warn("You probably need to add a key with this country to the recipe dictionary.");
    } 
    allTiles.forEach(recipe => {
        createTile(recipes[id][`${recipe}`]);
    }
    )
}

function createTile(recipe) {

    let tileType = (recipe.type === "external" ? "external" : "internal"); // External and internal links will be handled quite differently

    // Give up if there is indication of missing data
    if (recipe.name === undefined || recipe.id === undefined) {
        console.log("Abandon ship! Missing data!");
        return;
    }


    // Create new tile outline
    const newTile = document.createElement("div");
    newTile.classList.add("recipe-card");
    tileType === "external" ? newTile.classList.add("external") : newTile.classList.add("internal");
    console.log(recipe.course);
    console.log(resultsContainer[recipe.course]);
    resultsContainer[recipe.course].appendChild(newTile); // Place within container
    headersContainer[recipe.course].style.display = ("inline")
    console.log(`displaying ${recipe.course}`);
    newTile.id = (recipe.id);
    newTile.addEventListener("click", recipeSelected);

    // Create new text div
    const newName = document.createElement("div");
    newName.textContent = (`${recipe.name}`);
    newName.classList.add("recipe-text-container");
    newTile.appendChild(newName); // Place within container

    // Create new img
    const newImg = document.createElement("img");
    let fileURL = recipe.url;
        if(fileURL === undefined) {
        console.log("Failed to find image")
        newImg.src = ("./resources/missing-image_tn.png");
    } else {
        newImg.src = (`./resources/${recipe.url}_tn.png`);
    }
    try {
        new URL(`./resources/${recipe.url}_tn.png`);
    } catch (error) {
        newImg.src = ("./resources/missing-image_tn.png");
    }
    newImg.id = ("thumbnail");
    try {
        newTile.appendChild(newImg); // Place within container
    } catch(error) {
        console.log(error);
    }
    




    // Create external symbol for external tiles
    if(tileType === "external") {
        const newExternalIcon = document.createElement("img");
        newExternalIcon.classList.add("external-icon");
        newExternalIcon.src = ("./resources/external-link.png");
        newTile.appendChild(newExternalIcon);
    }
}

function recipeSelected(event) {
    recipeID = event.currentTarget.id;
    const recipeName = getRecipeName(recipeID);
    console.log("Recipe selected. ID: " + recipeID);
    if((event.currentTarget.classList).contains("internal")) {
        console.log("This is an internal tile.");
        page("up");
        populateRecipe(recipeID);
    } else if(event.currentTarget.classList.contains("external")){
        console.log("This is an external tile.");
        window.open(recipes[countrySelectedID][recipeName].websiteLink, '_blank');
    }

}

function populateRecipe(recipeID) {
    const recipeName = getRecipeName(recipeID) // The object name cannot contain -'s but the ID does, so I must search through recipe[country] and look at each ID to find one that matches. 
    const recipeDetails = recipes[countrySelectedID][recipeName]; //Get recipe info

    // Get divs
    let recipeTitle = document.querySelector("#recipe-title");
    let recipePicture = document.querySelector("#recipe-picture");
    let recipeAbout = document.querySelector("#recipe-about");
    let recipeIngredients = document.querySelector("#recipe-ingredients");
    let recipeInstructions = document.querySelector("#recipe-instructions");
    let recipeNotes = document.querySelector("#recipe-notes");
    let recipeAuthor = document.querySelector("#recipe-author");

    // Populate basic info
    try {
        new URL(`./resources/${countrySelectedID}-pics/${recipeDetails.url}.png`);
        recipePicture.src = (`./resources/${countrySelectedID}-pics/${recipeDetails.url}.png`);
    } catch (err) {
        console.log("No such image exists");
        recipePicture.src = (`./resources/missing-image.png`);
    }
    recipePicture.alt = `${recipeDetails.altText}`;
    recipeTitle.innerText = (recipeDetails.name);
    recipeAbout.innerText = (recipeDetails.preamble);
    recipeAuthor.innerText = (authorURL[recipeDetails.author][0]);
    recipeAuthor.href = (`./authors/${authorURL[recipeDetails.author][1]}.html`)
    console.log(recipeDetails.ingredients);
    recipeDetails.ingredients.forEach(ingredient => { // Ingredients/Instructions are a bit more complicated.
        addIngredient(ingredient, recipeIngredients);
    })
    recipeDetails.instructions.forEach(instruction => { // Ingredients/Instructions are a bit more complicated.
        addInstruction(instruction, recipeInstructions);
    })
    recipeDetails.notes.forEach(note =>{
        addNote(note, recipeNotes)
    });
    
}


function getRecipeName(recipeID) {
        let valueToReturn = undefined;
        Object.keys(recipes[countrySelectedID]).forEach(recipeName => {
        if (recipes[countrySelectedID][recipeName].id == recipeID) {
            console.log(recipeName);
            valueToReturn = recipeName;
        }
    })
    return valueToReturn;
}

function addIngredient(ingredient, parent) {
    // If the ingredient string has ONE component, it is a subtitle. 
    // TWO components, then the ingredient is measurement system agnostic
    // THREE components, then the ingredient is IMPERIAL, METRIC, NAME
    console.log(ingredient);
    const ingredientLength = ingredient.length;

    let ingredientUnit = undefined;
    let ingredientText = undefined;

    if (ingredientLength === 2) {
        ingredientUnit = ingredient[0];
        ingredientText = ingredient[1];
    } else if (ingredientLength === 3) {
        ingredientUnit = ingredient[unitIndex];
        ingredientText = ingredient[2];
    }
    
    let newIngredient = undefined;

    if (ingredientLength > 1) {
        newIngredient = document.createElement("li");
        newIngredient.classList.add("ingredient-item");
    } else if (ingredientLength === 1) {
        newIngredient = document.createElement("strong");
        newIngredient.classList.add("recipe-sub-header");
        newIngredient.classList.add("ingredient-subtitle");
    } else {
        console.log("This is weird. The length is less than 1.");
    }
    newIngredient.classList.add("delete-on-page-up");

    if(ingredientLength === 1) {
        console.log("Item is a title.")
        newIngredient.innerText=(`${ingredient[0]}`);
    } else {
        newIngredient.innerHTML = (`<strong class="ingredient-unit">${ingredientUnit}</strong> ${ingredientText}`);        
    }

    parent.appendChild(newIngredient);
}

function addInstruction(instruction, parent) {
    const newInstruction = document.createElement("li");
    newInstruction.classList.add("instruction-item");
    newInstruction.classList.add("delete-on-page-up");
    newInstruction.innerText=(instruction);
    parent.appendChild(newInstruction);
}

function addNote(note, parent) {
    let newNote = document.createElement("li");
    newNote.innerText = (note);
    newNote.classList.add("delete-on-page-up");
    parent.appendChild(newNote);
}

