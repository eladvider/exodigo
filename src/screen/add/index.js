import React from "react";
import Add from "./add";
import { toast } from "react-toastify";

const AddContainer = () => {
  const onSubmit = (values, cb) => {
    downloadFile(values, cb);
  };
  const downloadFile = (values, cb) => {
    try {
      const ingredients = values.ingredients;
      let strDrinkThumb;
      if (values.preview) {
        strDrinkThumb = values.preview;
      }

      delete values.ingredients;
      delete values.preview;
      delete values.file;
      const data = { ...values };
      data.strDrinkThumb = strDrinkThumb;
      if (ingredients?.length) {
        for (let i = 0; i < ingredients.length; i++) {
          data[`strIngredient${i}`] = ingredients[i].strIngredient;
          data[`strMeasure${i}`] = ingredients[i].strMeasure;
        }
      }
      data.strCreativeCommonsConfirmed =
        data.strCreativeCommonsConfirmed === "on" ? "Yes" : "No";
      const fileName = `recipe_${values.strDrink}`;
      const json = JSON.stringify(data, null, 2);
      const blob = new Blob([json], { type: "application/json" });
      const href = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = href;
      link.download = fileName + ".json";
      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      URL.revokeObjectURL(href);
      toast.success("Recipe is Created", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      cb();
    } catch (error) {
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
  };
  return <Add onSubmit={onSubmit} />;
};

export default AddContainer;
