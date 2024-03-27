import React from "react";
import InputLabelStyle from "./inputLabel.style";
import Input from "Styles/input.style";
import Label from "Styles/label.style";
import ErrorInput from "Styles/errorInput.style";
import { useFormContext } from "react-hook-form";
const InputLabel = ({
  id,
  label,
  type = "text",
  onInputChange = () => {},
  defaultValue,
  inputProps = {},
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const getProperty = (obj, path) => {
    const keys = path.split(".");
    let result = obj;
    for (const key of keys) {
      result = result[key];
      if (result === undefined) {
        return undefined;
      }
    }
    return result;
  };
  const error = getProperty(errors, id);
  return (
    <InputLabelStyle>
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        defaultValue={defaultValue}
        onChange={(e) => onInputChange(e)}
        id={id}
        {...register(id, { ...inputProps })}
      ></Input>
      {error && (
        <ErrorInput className={`error-input error-${id}`}>
          {error.message}
        </ErrorInput>
      )}
    </InputLabelStyle>
  );
};

export default InputLabel;
