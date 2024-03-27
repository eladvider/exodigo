import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import Add from "./add";
import "@testing-library/jest-dom";
describe("Add Resipe Test", () => {
  describe("Page Form Test", () => {
    const cases = [
      "strDrink",
      "strInstructions",
      "strAlcoholic",
      "strCategory",
    ];
    test.each(cases)("Check %p require Filed", async (name) => {
      const { getByTestId } = render(<Add />);
      const submitButton = getByTestId("submit");
      userEvent.click(submitButton);
      const elements = document.getElementsByClassName(`error-${name}`);
      await waitFor(() => {
        expect(elements[0].innerHTML).toContain("require filed"); //
      });
    });

    it("dont submit form when input error", async () => {
      const onSubmitMock = jest.fn((values) => {
        return Promise.resolve(values);
      });

      const { getByTestId, container } = render(
        <Add onSubmit={onSubmitMock} />
      );
      const submitButton = getByTestId("submit");
      userEvent.click(submitButton);
      const elements = document.getElementsByClassName(`error-input`);
      await waitFor(() => {
        expect(elements).toHaveLength(6);
        expect(onSubmitMock).not.toBeCalled();
      });
    });

    it("send submit form when no error", async () => {
      const onSubmitMock = jest.fn((values) => {
        return Promise.resolve(values);
      });

      const { getByTestId, getByLabelText } = render(
        <Add onSubmit={onSubmitMock} />
      );
      const nameInput = getByLabelText("name");
      const instructionsInput = getByLabelText("instructions");
      const AlcoholicInput = getByLabelText("Alcoholic");
      const CategoryInput = getByLabelText("Category");
      const MeasureInput = getByLabelText("Measure");
      const IngredientInput = getByLabelText("Ingredient");
      const submitButton = getByTestId("submit");

      await act(async () => {
        fireEvent.change(nameInput, { target: { value: "abc" } });
        fireEvent.change(instructionsInput, { target: { value: "abc" } });
        fireEvent.change(AlcoholicInput, { target: { value: "abc" } });
        fireEvent.change(CategoryInput, { target: { value: "abc" } });
        fireEvent.change(MeasureInput, { target: { value: "abc" } });
        fireEvent.change(IngredientInput, { target: { value: "abc" } });
        fireEvent.click(submitButton);
      });
      const elements = document.getElementsByClassName(`error-input`);

      await waitFor(() => {
        expect(elements).toHaveLength(0);
        expect(onSubmitMock).toBeCalled();
      });
    });
  });
});
