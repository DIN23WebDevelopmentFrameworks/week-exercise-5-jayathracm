import React, { useState, useEffect } from 'react';
import RecipeTagList from './RecipeTagList';
import RecipeList from './RecipeList';
import styles from './Styling/App.module.css';

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

const App: React.FC = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes/tags')
      .then(response => response.json())
      .then(data => setTags(data))
      .catch(error => console.error('Error fetching tags:', error));
  }, []);

  const handleTagSelect = (tagName: string) => {
    setSelectedTag(tagName);
    fetch(`https://dummyjson.com/recipes/tag/${tagName}`)
      .then(response => response.json())
      .then(data => setRecipes(data.recipes))
      .catch(error => console.error('Error fetching recipes:', error));
  };

  const handleBackToTags = () => {
    setSelectedTag(null);
    setRecipes([]);
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>ACME Recipe O'Master</h1>
      {selectedTag ? (
        <RecipeList 
          recipes={recipes} 
          selectedTag={selectedTag} 
          onBackToTags={handleBackToTags}
        />
      ) : (
        <RecipeTagList tagList={tags} onSelectTag={handleTagSelect} />
      )}
    </div>
  );
};

export default App;