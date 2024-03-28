import React, { useState, useEffect } from "react";
import { useForm, FormProvider, useFieldArray } from "react-hook-form";
import AddStyled from "./add.style";
import Button from "Styles/button.style";
import Checkbox from "Components/form/checkbox";
import InputLabel from "Components/form/input/inputLabel";
const Add = ({ onSubmit }) => {
  const [preview, setPreview] = useState();

  const methods = useForm({
    defaultValues: {
      ingredients: [{ strIngredient: "", strMeasure: "" }],
    },
  });
  const file = methods.watch("file");
  useEffect(() => {
    if (!file || file.length === 0) return;
    const urlImage = URL.createObjectURL(file[0]);
    setPreview(urlImage);
  }, [file]);

  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name: "ingredients", // unique name for your Field Array
  });
  const submit = (values) => {
    onSubmit({ ...values, preview }, () => methods.reset());
  };
  return (
    <AddStyled>
      <h1>Add Recipe</h1>
      <FormProvider {...methods}>
        <form noValidate onSubmit={methods.handleSubmit(submit)}>
          <InputLabel
            inputProps={{ required: "*require filed" }}
            id="strDrink"
            label={"name"}
          />
          {fields.map((field, index) => (
            <div key={field.id} className="item">
              <InputLabel
                inputProps={{ required: "*require filed" }}
                label="Ingredient"
                id={`ingredients.${index}.strIngredient`}
              />
              <InputLabel
                inputProps={{ required: "*require filed" }}
                label="Measure"
                id={`ingredients.${index}.strMeasure`}
              />
              {fields.length > 1 ? (
                <Button onClick={() => remove(index)}>Delete</Button>
              ) : (
                ""
              )}
              {fields.length - 1 === index ? (
                <Button
                  type="button"
                  onClick={() => append({ strIngredient: "", strMeasure: "" })}
                >
                  Add Ingredient
                </Button>
              ) : (
                ""
              )}
            </div>
          ))}
          <input type="file" {...methods.register("file")} />
          {preview ? (
            <img src={preview} alt="preview" className="preview" />
          ) : (
            ""
          )}
          <InputLabel
            inputProps={{ required: "*require filed" }}
            id="strInstructions"
            label={"instructions"}
          />
          <InputLabel
            inputProps={{ required: "*require filed" }}
            id="strAlcoholic"
            label={"Alcoholic"}
          />
          <InputLabel
            inputProps={{ required: "*require filed" }}
            id="strCategory"
            label={"Category"}
          />
          <Checkbox
            id={"strCreativeCommonsConfirmed"}
            label={"Creative Commons Confirmed"}
          />
          <Button data-testid="submit">Submit</Button>
        </form>
      </FormProvider>
    </AddStyled>
  );
};

export default Add;
