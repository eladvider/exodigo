import React, { useEffect } from "react";
import Cocktail from "./cocktail";
import { useGetCocktailsQuery } from "Api/cocktail/cocktailApiSlice";
import { useNavigate } from "react-router-dom";
import Loader from "Components/loader";
import { toast } from "react-toastify";
const CocktailContainer = () => {
  const { data: drinks, isError, isLoading } = useGetCocktailsQuery();
  const navigate = useNavigate();

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
  const onDrinkClicked = (id) => {
    navigate(`/recipe/${id}`);
  };
  const onAddClicked = () => {
    navigate(`/recipe/add`);
  };
  return isLoading ? (
    <Loader />
  ) : (
    <Cocktail
      onAddClicked={onAddClicked}
      onDrinkClicked={onDrinkClicked}
      drinks={drinks}
    />
  );
};

export default CocktailContainer;
