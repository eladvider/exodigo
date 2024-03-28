import React from "react";
import RecipeStyled from "./recipe.style";

const Recipe = ({ ingredients, instructions, image, name }) => {
  return (
    <RecipeStyled>
      <div className="recipeName">{name}</div>
      <div className="image">
        <img alt={name} src={image} />{" "}
      </div>
      <div className="ingredients">
        <div className="title">Ingredients:</div>
        {(ingredients || []).map((ingredient) => {
          return (
            <div key={ingredient.ingredient} className="ingredient">
              <div className="name">{ingredient.ingredient}</div>
              <div className="measure">{ingredient.measure}</div>
            </div>
          );
        })}
      </div>
      <div className="instructions">
        <div className="title">Instructions</div>
        <div className="content">{instructions}</div>
      </div>
    </RecipeStyled>
  );
};

export default Recipe;
