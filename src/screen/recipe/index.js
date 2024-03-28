import React, { useEffect, useState } from "react";
import Recipe from "./recipe";
import { useParams, useNavigate } from "react-router-dom";
import { useGetRecipeByIdQuery } from "Api/recipe/recipeApiSlice";
import Loader from "Components/loader";
import { toast } from "react-toastify";
const RecipeContainer = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const { data: recipe, isLoading, isError } = useGetRecipeByIdQuery(id);
  const [ingredients, setIngredients] = useState([]);

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (isError) {
      toast.error("elad", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: "Bounce",
      });
    }
  }, [isError]);

  useEffect(() => {
    if (!recipe) return;
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredientKey = `strIngredient${i}`;
      const measureKey = `strMeasure${i}`;
      if (recipe[ingredientKey]) {
        ingredients.push({
          ingredient: recipe[ingredientKey],
          measure: recipe[measureKey],
        });
      }
    }
    setIngredients(ingredients);
  }, [recipe]);

  return isLoading ? (
    <Loader />
  ) : (
    <Recipe
      handleGoBack={handleGoBack}
      name={recipe.strDrink}
      image={recipe.strDrinkThumb}
      instructions={recipe.strInstructions}
      ingredients={ingredients}
    />
  );
};

export default RecipeContainer;
