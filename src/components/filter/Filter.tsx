import React from "react";

const Filter = () => {
  return (
    <div className="filter">
      <h1>
        Search results for <b>London</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            name="name"
            placeholder="City Location"
          ></input>
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="any">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property">
            <option value="any">any</option>
            <option value="apartments">Apartments</option>
            <option value="houses">Housess</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
          ></input>
        </div>
        <div className="item">
          <label htmlFor="maxPrice">MaxPrice</label>
          <input
            type="number"
            id="minPrice "
            name="minPrice"
            placeholder="any"
          ></input>
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder="any"
          ></input>
        </div>
        <button>
          <img src="/search.png" alt=""></img>
        </button>
      </div>
    </div>
  );
};

export default Filter;
