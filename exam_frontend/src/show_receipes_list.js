import React, { useState, useEffect } from 'react';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    // Fetch recipe data from API
    const fetchRecipes = async () => {
      try {
        const response = await fetch('http://localhost:3005/recipes');
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBackClick = () => {
    setSelectedRecipe(null);
  };

  if (selectedRecipe) {
    // Display complete recipe details
    return (
      <div>
        <button onClick={handleBackClick}>Back to Recipe List</button>
        <h2>{selectedRecipe.title}</h2>
        <img src={selectedRecipe.image} alt={selectedRecipe.title} />
        <h3>Ingredients:</h3>
        <ul>
          {selectedRecipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3>Instructions:</h3>
        <ol>
          {selectedRecipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    );
  }

  // Display recipe list
  return (
    <div>
      <h2>Recipe List</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id} onClick={() => handleRecipeClick(recipe)}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <img src={recipe.thumbnail} alt={recipe.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
