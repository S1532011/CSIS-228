createToggle = true;

function getData() {
    data = JSON.parse(localStorage.getItem("recipes"));
    if(data == null) {
        data = [];
    }
    console.log("getData: ", data);
    return data;
}
function setData(data) {
    localStorage.setItem("recipes", JSON.stringify(data));
}
function addRecipe(recipe) {
    data = getData();
    data.push(recipe);
    setData(data);
}

// data = [];
// setData(data);

function recipeInput() {
    var createButton = document.getElementById("create-recipe");

    if(createToggle) {
        createToggle = false;
        createButton.innerHTML = "&#10134; Close";
        createButton.classList.add("close");
        createButton.classList.remove("layer2");
        createButton.classList.remove("layer3-border");
        var iframe = document.createElement('iframe');

        // Set the source of the iframe to the other HTML file
        iframe.src = 'input.html';

        // Set the styles to darken the edges
        iframe.style.position = 'fixed';
        iframe.style.top = '10%';
        iframe.style.left = '25%';
        iframe.style.width = '50%';
        iframe.style.height = '80%';
        iframe.className = "layer2-border";

        // Append the iframe to the body
        document.body.appendChild(iframe);
    } else {
        createToggle = true;
        createButton.innerHTML = "&#10133; Create Recipe";
        createButton.classList.remove("close");
        createButton.classList.add("layer2");
        createButton.classList.add("layer3-border");
        document.querySelector("iframe").remove();
        location.reload();
    }
}

function displayRecipe() {
    recipe = JSON.parse(localStorage.getItem("currentRecipe"));
    recipeitems = ["author", "publisher", "name", "description", "ingredients", "time", "servings", "difficulty", "steps"];
    for(let item of recipeitems) {
        let element = document.getElementById(item);
        element.innerHTML = recipe[item];
    }
}

function showRecipe(recipe) {
    localStorage.setItem("currentRecipe", JSON.stringify(recipe));
    var iframe = document.createElement('iframe');

    // Set the source of the iframe to the other HTML file
    iframe.src = 'recipe.html';

    // Set the styles to darken the edges
    iframe.style.position = 'fixed';
    iframe.style.top = '10%';
    iframe.style.left = '25%';
    iframe.style.width = '50%';
    iframe.style.height = '80%';
    iframe.className = "layer2-border";
    iframe.id = "recipe-display";

    // Append the iframe to the body
    document.body.appendChild(iframe);
}

function createRecipe() {
    let recipe = {
        author: document.getElementById("author").value,
        publisher: document.getElementById("publisher").value,
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        ingredients: document.getElementById("ingredients").value,
        time: document.getElementById("time").value,
        servings: document.getElementById("servings").value,
        difficulty: document.getElementById("difficulty").value,
        steps: document.getElementById("steps").value
    }
    addRecipe(recipe);
}

const recipesListing = document.getElementById("all-recipes-listing");
const recipes = JSON.parse(localStorage.getItem("recipes"));

for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];

    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add("layer3", "layer3-border", "recipe");
    recipeDiv.textContent = recipe.title;

    const h1 = document.createElement("h1");
    h1.innerHTML = recipe.name;
    recipeDiv.appendChild(h1);

    const p = document.createElement("p");
    p.innerHTML = recipe.description;
    recipeDiv.appendChild(p);
    
    recipeDiv.onclick = function() {
        showRecipe(recipe);
    }

    recipesListing.appendChild(recipeDiv);
}





// function getData() {
//     const xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === XMLHttpRequest.DONE) {
//             if (xhr.status === 200) {
//                 const recipeData = JSON.parse(xhr.responseText);
//                 console.log(recipeData);
//             } else {
//                 console.log('Error: ' + xhr.status);
//             }
//         }
//     };
//     xhr.open('GET', 'recipes.json', true);
//     xhr.send(null);
//     console.log(xhr)
// }
// getData();
// Create an iframe element