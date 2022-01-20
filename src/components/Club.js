import React from "react";
import "../styles/club.scss";

const Club = (props) => {
  const renderMembers = () => {
    return props.item.members.map((member, index) => {
      return (
        <li className="club__members--item" key={index}>
          {member}
        </li>
      );
    });
  };
  return (
    <>
      <article className="club">
        <i className={`club__icon ${props.item.fa}`}></i>
        <div className="club__info">
          <h2 className="club__title">{props.item.name}</h2>
        </div>

        <div className="club__members">
          <h4 className="club__members--title">Members:</h4>
          <ul className="club__members--list">{renderMembers()}</ul>
        </div>
      </article>
    </>
  );
};

export default Club;
