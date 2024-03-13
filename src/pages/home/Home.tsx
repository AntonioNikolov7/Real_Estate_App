import React from "react";
import "./Home.scss";
import SearchBar from "../../components/searchbar/SearchBar";

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            Find the best Real Estate for you and your family
          </h1>
          <p className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gains</h2>
            </div>
            <div className="box">
              <h1>1200</h1>
              <h2>Properties ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="bg.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
