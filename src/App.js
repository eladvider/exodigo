import React, { useState } from "react";
import Loader from "Components/loader";
import RoutesApp from "./routes";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 600);
  return !isLoading ? <RoutesApp /> : <Loader />;
};
export default App;
