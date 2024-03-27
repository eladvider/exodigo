import { apiSlice } from "Api/apiSlice";
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
export const cocktailApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    searchCocktails: builder.query({
      query: (searchTerm) => ({
        url: `/search.php?s=${searchTerm}`,
        method: "GET",
      }),
      transformResponse: (response, r, searchTerm) => {
        if (!searchTerm) return [];
        const { drinks } = response;
        if (drinks) {
          return drinks.slice(0, 10);
        }
        return drinks;
      },
    }),

    getCocktails: builder.query({
      query: () => ({
        url: "/filter.php?c=Cocktail",
        method: "GET",
      }),
      transformResponse: (response) => {
        const { drinks } = response;
        if (drinks) {
          const shuffledDrinks = shuffleArray(drinks);
          return shuffledDrinks.slice(0, 10);
        }
        return drinks;
      },
    }),
  }),
});

export const { useGetCocktailsQuery, useLazySearchCocktailsQuery } =
  cocktailApiSlice;

export const { getCocktails } = cocktailApiSlice.endpoints;
