import React from "react";
import "../styles/Home.css";
import RecipeCard from "./RecipeCard";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import idAction from "../actions/idAction";

function Home() {
  const { search, isLoading, err } = useSelector((state) => state.search);
  // const { data } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const { hash } = useLocation();

  if (hash) dispatch(idAction(hash.slice(1)));

  const clickHandler = function (e) {
    console.log(e);
    console.log(typeof e.target.offsetWidth);
    if (e.target.offsetWidth <= 570) {
      if (hash) {
        e.target.style.display = "none";
      }
    }
  };

  return (
    <div className="home">
      <div className="home__left" onClick={clickHandler}>
        {search?.length
          ? search.map((recipe) => (
              <RecipeCard
                title={recipe.title}
                img={recipe.image}
                id={recipe.id}
                key={recipe.id}
              />
            ))
          : ""}
        {isLoading ? <div className="lds-dual-ring spinner"></div> : ""}
        {err ? <div>{err}</div> : ""}
      </div>
      <div className="home__right"></div>
    </div>
  );
}

export default Home;
