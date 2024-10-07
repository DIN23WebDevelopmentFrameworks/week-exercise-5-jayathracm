import React from 'react';
import styles from './Styling/RecipeTag.module.css';

interface IRecipeTagProps {
  tagName: string;
  onSelectTag: (tagName: string) => void;
}

const RecipeTag: React.FC<IRecipeTagProps> = ({ tagName, onSelectTag }) => {
  return (
    <div 
      className={styles.recipeTag} 
      onClick={() => onSelectTag(tagName)}
    >
      {tagName}
    </div>
  );
};

export default RecipeTag;