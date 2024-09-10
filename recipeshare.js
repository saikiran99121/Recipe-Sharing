document.getElementById('addRecipeBtn').addEventListener('click', function() {
    document.getElementById('recipeModal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('recipeModal').style.display = 'none';
});

document.getElementById('recipeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Get form values
    const title = document.getElementById('title').value;
    const ingredients = document.getElementById('ingredients').value;
    const preparation = document.getElementById('preparation').value;
    const cookingTime = document.getElementById('cookingTime').value;
    const servingSize = document.getElementById('servingSize').value;

    // Create recipe object
    const recipe = {
        title: title,
        ingredients: ingredients,
        preparation: preparation,
        cookingTime: cookingTime,
        servingSize: servingSize
    };

    // Display recipe in the list (you can customize this part according to your backend)
    const recipeList = document.getElementById('recipeList');
    const recipeItem = document.createElement('div');
    recipeItem.classList.add('recipe-item');
    recipeItem.innerHTML = `
        <h3>${recipe.title}</h3>
        <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
        <p><strong>Preparation Steps:</strong> ${recipe.preparation}</p>
        <p><strong>Cooking Time:</strong> ${recipe.cookingTime} mins</p>
        <p><strong>Serving Size:</strong> ${recipe.servingSize}</p>
    `;
    recipeList.appendChild(recipeItem);

    // Close modal
    document.getElementById('recipeModal').style.display = 'none';
});
// dynamic data
document.addEventListener('DOMContentLoaded', function () {
    const recipeForm = document.getElementById('recipe-form');

    recipeForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form values
        const recipeName = document.getElementById('recipe-name').value;
        const ingredients = document.getElementById('ingredients').value;
        const instructions = document.getElementById('instructions').value;
        const imageURL = document.getElementById('image-url').value;

        // Send recipe data to home page
        window.opener.postMessage({
            recipeName: recipeName,
            ingredients: ingredients,
            instructions: instructions,
            imageURL: imageURL
        }, 'http://localhost:8080');

        // Close the recipe share page
        window.close();
    });
});
