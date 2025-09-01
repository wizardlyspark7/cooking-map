import {recipes} from '../recipes.js';


// Import all recipes
console.log(recipes);

const authorsRecipesContainer = document.querySelector("#authors-recipes-container");
const authorNamePairs = {
    zachIrain: "Zach Irain",
    glenIrain: "Glen Irain",
    juneIrain: "June Irain",
}

// Determine author
const pageAuthor = document.querySelector(".author-name").id;
console.log(pageAuthor);

// Build user's recipes
const countries = Object.keys(recipes);
let recipePairs = [];
countries.forEach(country => {
    console.log(recipes[country]);
    console.log(Object.keys(recipes[country]));
    (Object.keys(recipes[country])).forEach(singleRecipe =>{
        console.log(`${country}, ${singleRecipe}`);
        if(recipes[country][singleRecipe].author === pageAuthor) {
            console.log(`${authorNamePairs[pageAuthor]} wrote this`);
            recipePairs.push([country, singleRecipe]);
        } else {
            console.log(`${authorNamePairs[pageAuthor]} didn't write this`);
        }
    });

})

console.log(recipePairs);


// Create tiles
for (const recipePair of recipePairs) {
    console.log(recipePair);
    let currentRecipe = recipes[recipePair[0]][recipePair[1]]
    console.log(currentRecipe);

    // Create tile
    const newTile = document.createElement("a");
    newTile.classList.add("recipe-card");
    newTile.id = (`${currentRecipe.id}`)
    newTile.href = (`../recipes/recipe.html?recipe=${currentRecipe.id}`)
    authorsRecipesContainer.appendChild(newTile);

    // Recipe title
    const recipeTitle = document.createElement("div");
    recipeTitle.innerText = (`${currentRecipe.name}`);
    recipeTitle.classList.add("recipe-text-container");
    newTile.appendChild(recipeTitle);

    // Recipe img
    let tnURL = currentRecipe.url;
    const recipeImg = document.createElement("img");
    if (tnURL === undefined) {
       console.log("No thumbnail");
       recipeImg.src =(`../resources/missing-image_tn.png`);
    } else {
        try {
            new URL(`../resources/${currentRecipe.url}_tn.png`);
            recipeImg.src =(`../resources/${currentRecipe.url}_tn.png`);
        } catch(error) {
            console.log("A filepath was defined, but no image was found.");
            recipeImg.src =(`../resources/missing-image_tn.png`);
        }
    }
    recipeImg.id=("thumbnail");
    newTile.appendChild(recipeImg);

}