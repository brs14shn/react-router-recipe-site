import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/RecipeCard.css";

const RecipeCard = ({ recipe, index }) => {
  const { image, label } = recipe;
  console.log(recipe);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/details", { state: { recipe } });
  };

  return (
    <div className="row text-center">
      <div className="  card g-3  cardStyled" style={{ width: "18rem" }}>
        <img
          src={image}
          className="card-img-top d-block mx-auto mt-3"
          style={{ width: "200px" }}
          alt="img"
        />
        <div className="card-body text-center">
          <p className="card-text">{label}</p>
          <button onClick={handleClick} className="btn btn-danger">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
