import React from "react";
import "../styles/Nav.css";
import { useDispatch } from "react-redux";
import SearchAction from "../actions/SearchAction";
import icon from "../img/icon.svg";

function Nav() {
  const dispatch = useDispatch();
  let input;

  const inputHandler = function (e) {
    e.preventDefault();
    input = e.target.value;
  };

  const submitHandler = function (e) {
    e.preventDefault();
    dispatch(SearchAction(input));
  };

  return (
    <div className="nav">
      <div className="nav__icon">
        <img src={icon} alt="icon" className="nav__logo" />
        <p className="nav__name">Chefre</p>
      </div>
      <form className="nav__search" onSubmit={submitHandler}>
        <input className="nav__searchInput" onChange={inputHandler} />
        <button className="btn nav__searchBtn">Search</button>
      </form>
    </div>
  );
}

export default Nav;
