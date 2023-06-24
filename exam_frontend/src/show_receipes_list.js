import React, { useState, useEffect } from 'react';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  
  useEffect(() => {
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

  return (
    <div>
      <h2>Recipe List</h2>
      <ul>  
        {recipes.map((recipe) => (
          <li key={recipe.id} >
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <img src={recipe.image} alt={recipe.image} />
            <button onClick={()=>{
                window.location.href = "http://localhost:3005/details/edit/" + recipe._id;
            }}>Update</button>
            <button onClick={()=>{
                window.location.href = "http://localhost:3005/recipes/delete/" + recipe._id;
            }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
