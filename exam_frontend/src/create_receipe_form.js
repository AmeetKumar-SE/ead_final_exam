import React, { useState } from 'react';

const RecipeForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    setTitle('');
    setDescription('');
    setIngredients('');
    setInstructions('');
    setImage(null);
  };

  return (
    <form method='Post' action='http://localhost:3005/recipe/save'>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Description:</label>
        <input
        type="text"
        name="description"  
        value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Ingredients:</label>
        <input
        type='text'
          name="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Instructions:</label>
        <input
          type='text'
          name="instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Image:</label>
        <input
          type="file"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>

      <button type="submit">Create Recipe</button>
    </form>
  );
};

export default RecipeForm;
