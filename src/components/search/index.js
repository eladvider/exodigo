import React, { useMemo, useCallback } from "react";
import Search from "./search";
import debounce from "lodash/debounce";
import { useNavigate } from "react-router-dom";
import { useLazySearchCocktailsQuery } from "Api/cocktail/cocktailApiSlice";
const SearchContainer = () => {
  const navigate = useNavigate();
  const [trigger, { isFetching, isError, data, error, isSuccess }] =
    useLazySearchCocktailsQuery();

  const debouncedChangeHandler = useMemo(() => {
    const changeHandler = (event) => {
      trigger(event.target.value);
    };

    return debounce(changeHandler, 500);
  }, []);
  const onItemClicked = useCallback((idDrink) => {
    navigate(`/recipe/${idDrink}`);
  }, []);

  return (
    <Search
      isSuccess={isSuccess}
      isFetching={isFetching}
      results={data}
      handleInputChange={debouncedChangeHandler}
      onItemClicked={onItemClicked}
    />
  );
};

export default SearchContainer;
