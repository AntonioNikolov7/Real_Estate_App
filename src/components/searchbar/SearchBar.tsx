import React, { useState, ChangeEvent, FormEvent } from "react";
import { SearchValues } from "./SearchBarInterfaces";
import { SearchBarConstants } from "./SearchBarConstants";
import "./SearchBar.scss";

const searchTypes = ["buy", "rent"];

const SearchBar: React.FC = () => {
  const [searchVal, setSearchVal] = useState<SearchValues>({
    type: SearchBarConstants.BUY,
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setSearchVal({
      ...searchVal,
      [name]:
        name === SearchBarConstants.MINPRICE ||
        name === SearchBarConstants.MAXPRICE
          ? parseFloat(value)
          : value,
    });
  };
  const switchTypes = (val: string) => {
    setSearchVal((prev) => ({ ...prev, type: val }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(searchVal);
  };

  return (
    <div className="searchbar">
      <div className="type">
        {searchTypes.map((type) => (
          <button
            key={type}
            onClick={() => switchTypes(type)}
            className={searchVal.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="location"
          placeholder="City"
          value={searchVal.location}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name={"minPrice"}
          min={0}
          max={100000000}
          placeholder="Min Price"
          value={searchVal.minPrice}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={100000000}
          placeholder="Max Price"
          value={searchVal.maxPrice}
          onChange={handleInputChange}
        />
        <button type="submit">
          <img src="/search.png" alt="searchIcon" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
