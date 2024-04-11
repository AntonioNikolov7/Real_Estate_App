import React from "react";
import "./ListPage.scss";
import { listData } from "../../mock-data/mock-data";
import Filter from "../../components/filter/Filter";
import Map from "../../components/map/Map";
import Card from "../../components/card/Card";
const ListPage: React.FC = () => {
  const data = listData;

  return (
    <div className="list-page">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data} />
      </div>
    </div>
  );
};

export default ListPage;
