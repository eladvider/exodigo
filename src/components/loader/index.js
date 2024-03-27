import React from "react";
import LoaderStyled from "./loader.style";
const Loader = ({ position = "absolute" }) => {
  return (
    <LoaderStyled position={position}>
      <div className="loader"></div>
    </LoaderStyled>
  );
};

export default Loader;
