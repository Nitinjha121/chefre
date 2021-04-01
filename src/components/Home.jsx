import React, { useEffect } from "react";
import "../styles/Home.css";
import RecipeCard from "./RecipeCard";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import idAction from "../actions/idAction";
import OneRecipe from "./OneRecipe";

function Home() {
  const { search, isLoading, err } = useSelector((state) => state.search);
  const { data } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      dispatch(idAction(hash.slice(1)));
    }
  }, [dispatch, hash]);

  const clickHandler = function (e) {
    if (e.target.parentElement.offsetWidth <= 570) {
      if (hash) {
        e.target.parentElement.style.display = "none";
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
      <div className="home__right">
        {data.title && (
          <OneRecipe
            img={data.image?.replace("556x370", "636x393")}
            instruction={data.instructions}
            src={data.sourceUrl}
            title={data.title}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
