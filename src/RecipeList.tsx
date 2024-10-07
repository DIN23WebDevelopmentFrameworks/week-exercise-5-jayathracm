import React from 'react';
import styles from './Styling/RecipeList.module.css';

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

interface IRecipeListProps {
  recipes: IRecipe[];
  selectedTag: string;
  onBackToTags: () => void;
}

const RecipeList: React.FC<IRecipeListProps> = ({ recipes, selectedTag, onBackToTags }) => {
  return (
    <div className={styles.recipeList}>
      <button onClick={onBackToTags} className={styles.backButton}>Back to Tags</button>
      <h2 className={styles.title}>{selectedTag} Recipes</h2>
      <ul className={styles.list}>
        {recipes.map(recipe => (
          <li key={recipe.id} className={styles.item}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;