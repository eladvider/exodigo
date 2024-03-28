import React, { useMemo, useCallback } from "react";
import Search from "./search";
import debounce from "lodash/debounce";
import { useNavigate } from "react-router-dom";
import { useLazySearchCocktailsQuery } from "Api/cocktail/cocktailApiSlice";
const SearchContainer = () => {
  const navigate = useNavigate();
  const [trigger, { isFetching, data, isSuccess }] =
    useLazySearchCocktailsQuery();

  const debouncedChangeHandler = useMemo(() => {
    const changeHandler = (event) => {
      trigger(event.target.value);
    };

    return debounce(changeHandler, 500);
  }, [trigger]);
  const onItemClicked = useCallback(
    (idDrink) => {
      navigate(`/recipe/${idDrink}`);
    },
    [navigate]
  );

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
