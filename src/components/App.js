import React from "react";
import "../styles/App.scss";
import ClubList from "./ClubList.js";
import data from "../data/clubs.json";
//console.log(data);

const App = () => {
  return (
    <>
      <h1 className="title">My favourite clubs</h1>
      <ClubList list={data}></ClubList>
    </>
  );
};

export default App;
