import React from "react";
import Club from "./Club";

const ClubList = (props) => {
  console.log(props.list);
  const clubItems = props.list.map((item, index) => {
    return (
      <li key={index}>
        {/* <Club name={item.name} icon={item.fa} /> */}
        <Club item={item} /> {/*Le estoy pasando todo a Club.js */}
      </li>
    );
  });

  return <ul>{clubItems}</ul>;
};

export default ClubList;
