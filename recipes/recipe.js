const urlParams = new URLSearchParams(window.location.search);


// Declare variables
let unitIndex = 1;
const recipeURL = urlParams.get('recipe');
let countrySelectedID = getCountry();
console.log(countrySelectedID);
let recipeName = getRecipeName(recipeURL);
let filteredRecipe = [];
import {recipes} from '../recipes.js';
import {authorInfo} from '../recipes.js';
const recipeChosen = recipes[countrySelectedID][recipeName];
const imperialButton = document.querySelector("#unitswitch-imperial");
const metricButton = document.querySelector("#unitswitch-metric");
const unitswitchColor = document.querySelector("#unitswitch-color");
const backButton = document.querySelector("#back");
const recipeNotes = document.querySelector("#recipe-notes");
const fade = document.querySelector(".fade");
let currentUnit = "metric";
metricButton.addEventListener("click", unitSwitch);
imperialButton.addEventListener("click", unitSwitch);

backButton.addEventListener("click", () => {
    window.history.back();
})

prepUnitList(recipeName);

if(recipeChosen === undefined) {
    console.log("no recipe selected.");
}

// Initial functions

function getCountry() {
    let returnValue = null;
    const countries = Object.keys(recipes);
    countries.forEach(country => {
        (Object.keys(recipes[country])).forEach(singleRecipe =>{
            if(recipes[country][singleRecipe].id == recipeURL) {
                console.log("Match found");
                returnValue = country;
            }
        });
    })
    if(returnValue === null){
        console.warn("Country selected ID not found");
    } else {
        return returnValue;
    }

}

function prepUnitList(recipeName) {
    console.log("Prepping ingredient unit list");
    let unfilteredRecipe = recipes[countrySelectedID][recipeName].ingredients;
    unfilteredRecipe.forEach(array => {
        if(array.length > 1) {
            filteredRecipe.push(array);
        }
    })
}

function getRecipeName(recipeID) {
        let valueToReturn = undefined;
        console.log(`Looking for: ${recipeID}`)
        console.log(Object.keys(recipes[countrySelectedID]));
        Object.keys(recipes[countrySelectedID]).forEach(recipeName => {
            if (recipes[countrySelectedID][recipeName].id === recipeID) {
                valueToReturn = recipeName;
                return
            } else {
            }
        })
    console.log(`it was: ${valueToReturn}`);
    return valueToReturn;
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
        unitswitchColor.style.left=("0%")
        console.log("Imperial units should be displaying");

    } else if (srcElement === "unitswitch-metric") {
        let switchTo = "metric";
        currentUnit = "metric"
        unitIndex = 1;
        console.log("Metric units should be displaying");
        unitswitchColor.style.left=("50%");
    }

    let newIngredients = recipes[countrySelectedID][recipeName].ingredients;
    let counter = 0;
    let allUnits = document.querySelectorAll(".ingredient-unit");
    console.log(allUnits);
    console.log(filteredRecipe)
    allUnits.forEach(unit => {
        console.log(unit);
        console.log(filteredRecipe[counter].at(-1));
        if(filteredRecipe[counter].length === 3) {
            unit.innerHTML = filteredRecipe[counter][unitIndex];
        }        
        counter++
    })
}


// Main

populateRecipe(recipeChosen);

function populateRecipe(recipeID) {
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
        new URL(`./resources/${countrySelectedID}-pics/${recipeChosen.url}.png`);
        recipePicture.src = (`./resources/${countrySelectedID}-pics/${recipeChosen.url}.png`);
    } catch (err) {
        console.log("No such image exists");
        recipePicture.src = (`../resources/missing-image.png`);
    }
    recipePicture.alt = `${recipeChosen.altText}`;
    recipeTitle.innerText = (recipeChosen.name);
    recipeAbout.innerText = (recipeChosen.preamble);
    console.log(recipes[countrySelectedID][recipeName]);
    console.log(recipeName);
    recipeAuthor.innerText = (authorInfo[recipeChosen.author][0]);
    recipeAuthor.href = (`../authors/${authorInfo[recipeChosen.author][1]}.html`)
    console.log(recipeChosen.ingredients);
    recipeChosen.ingredients.forEach(ingredient => { // Ingredients/Instructions are a bit more complicated.
        addIngredient(ingredient, recipeIngredients);
    })
    recipeChosen.instructions.forEach(instruction => { // Ingredients/Instructions are a bit more complicated.
        addInstruction(instruction, recipeInstructions);
    })
    recipeChosen.notes.forEach(note =>{
        addNote(note, recipeNotes)
    });
    
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

//Running this last as it depends on future content loads.
console.log(fade.clientHeight);
recipeNotes.style.marginBottom = (`${fade.clientHeight}px`);