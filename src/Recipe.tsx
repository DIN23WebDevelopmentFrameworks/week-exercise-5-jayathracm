import React from 'react';

interface IRecipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

interface IRecipeProps {
  recipeData: IRecipe;
}

const Recipe: React.FC<IRecipeProps> = ({ recipeData }) => {
  return (
    <div className="Recipe">
      <h3>{recipeData.name}</h3>
      <div className="recipe-info">
        <p>Difficulty: {recipeData.difficulty}</p>
        <p>Prep Time: {recipeData.prepTimeMinutes} minutes</p>
        <p>Cook Time: {recipeData.cookTimeMinutes} minutes</p>
        <p>Servings: {recipeData.servings}</p>
      </div>
      <div className="ingredients">
        <h4>Ingredients:</h4>
        <ul>
          {recipeData.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="instructions">
        <h4>Instructions:</h4>
        <ol>
          {recipeData.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Recipe;