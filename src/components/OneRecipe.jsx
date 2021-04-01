import React from "react";
import "../styles/Recipe.css";

function OneRecipe({ instruction, src, img, title }) {
  return (
    <div className="recipe">
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <p>{instruction}</p>
      <a href={src} target="_blank">
        <button className="recipe__btn">Source Link</button>
      </a>
    </div>
  );
}

export default OneRecipe;
