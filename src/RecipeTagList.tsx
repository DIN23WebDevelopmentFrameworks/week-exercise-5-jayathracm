import React from 'react';
import RecipeTag from './RecipeTag';
import styles from './Styling/RecipeTagList.module.css';

interface IRecipeTagListProps {
  tagList: string[];
  onSelectTag: (tagName: string) => void;
}

const RecipeTagList: React.FC<IRecipeTagListProps> = ({ tagList, onSelectTag }) => {
  return (
    <div className={styles.recipeTagList}>
      <h2 className={styles.title}>Choose a tag below</h2>
      <div className={styles.tagContainer}>
        {tagList.map((tag, index) => (
          <RecipeTag key={index} tagName={tag} onSelectTag={onSelectTag} />
        ))}
      </div>
    </div>
  );
};

export default RecipeTagList;