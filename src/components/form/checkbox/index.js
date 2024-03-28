import React, { useState } from "react";
import CheckboxStyled from "./checkbox.style";
import { useFormContext, useController } from "react-hook-form";

const Checkbox = ({ label, id, inputProps = {}, value }) => {
  const { watch } = useFormContext();
  const [val, setVal] = useState(false);
  const checkboxValue = value ? value : "on";
  const char = watch(id);
  const { field } = useController({
    name: id,
    defaultValue: "",
  });
  return (
    <CheckboxStyled>
      <div className="checkbox-wrapper-33">
        <label className="checkbox">
          <input
            id={id}
            name={id}
            {...field}
            checked={val}
            onChange={(e) => {
              const values = new Map(
                (char || []).map((x) => {
                  return [x, x];
                })
              );

              if (e.target.checked) {
                values.set(checkboxValue, true);
              } else {
                values.delete(checkboxValue);
              }
              const v = Array.from(values, ([name, value]) => name);

              field.onChange(v);
              setVal((prev) => !prev);
            }}
            className="checkbox__trigger visuallyhidden"
            type="checkbox"
          />
          <span className="checkbox__symbol">
            <svg
              aria-hidden="true"
              className="icon-checkbox"
              width="28px"
              height="28px"
              viewBox="0 0 28 28"
              version="1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 14l8 7L24 7"></path>
            </svg>
          </span>
          <p className="checkbox__textwrapper">{label}</p>
        </label>
      </div>
    </CheckboxStyled>
  );
};
export default Checkbox;
