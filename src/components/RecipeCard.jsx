import React from "react";
import "../styles/Card.css";

function RecipeCard({ img, title, id }) {
  const letterArrange = function (title) {
    if (title.length > 20) {
      return title.slice(0, 20) + "...";
    }
    return title;
  };

  return (
    <a href={`#${id}`} className="card">
      <img src={img} alt={title} />
      <h4>{letterArrange(title)}</h4>
    </a>
  );
}

export default RecipeCard;
