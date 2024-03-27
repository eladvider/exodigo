import { apiSlice } from "Api/apiSlice";

export const recipeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRecipeById: builder.query({
      query: (id) => ({
        url: `lookup.php?i=${id}`,
        method: "GET",
      }),
      transformResponse: (response) => {
        const { drinks } = response;
        if (drinks) {
          return drinks[0];
        }
        return drinks;
      },
    }),
  }),
});

export const { useGetRecipeByIdQuery } = recipeApiSlice;
