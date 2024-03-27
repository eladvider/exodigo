import React from "react";
import CocktailStyled from "./cocktail.style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Search from "Components/search";
const Cocktail = ({ drinks, onDrinkClicked, onAddClicked }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <CocktailStyled>
      <div className="header">
        <div className="serachBar">
          <Search />
        </div>
        <div onClick={() => onAddClicked()} className="add">
          <div>+ </div>
          <div> Add Recipe</div>
        </div>
      </div>
      {drinks?.length ? (
        <div className="sliderWrappere">
          <Slider {...settings}>
            {drinks.map((drink) => {
              return (
                <div className="item" key={drink.idDrink}>
                  <div
                    className="name"
                    onClick={() => onDrinkClicked(drink.idDrink)}
                  >
                    {drink.strDrink}
                  </div>
                  <div className="image">
                    <img
                      src={drink.strDrinkThumb}
                      title={drink.strDrink}
                      alt={drink.strDrink}
                    />
                  </div>
                </div>
              );
            })}
          </Slider>{" "}
        </div>
      ) : (
        ""
      )}
    </CocktailStyled>
  );
};

export default Cocktail;
