import React from "react";
import SearchStyled from "./search.style";
import Loader from "Components/loader";
const Search = ({
  handleInputChange,
  results,
  onItemClicked,
  isFetching,
  isSuccess,
}) => {
  return (
    <SearchStyled results={results}>
      <div className="searchInput">
        <input
          className="input"
          id="search"
          type="search"
          placeholder="Search Cocktail"
          onChange={handleInputChange}
        ></input>
        <label for="search" className="label">
          Search Cocktail
        </label>
        {isFetching ? (
          <div className="loader">
            <Loader position="static" />
          </div>
        ) : (
          ""
        )}
      </div>
      {isSuccess && (!results || results?.length == 0) ? (
        <div>No Results</div>
      ) : (
        <div className="results">
          {(results || []).map((item) => {
            return (
              <div
                className="item"
                onClick={() => onItemClicked(item.idDrink)}
                key={item.idDrink}
              >
                {item.strDrink}
              </div>
            );
          })}
        </div>
      )}
    </SearchStyled>
  );
};

export default Search;
