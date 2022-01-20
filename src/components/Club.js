import React from "react";
import "../styles/club.scss";

const Club = (props) => {
  const renderMembers = () => {
    return props.item.members.map((member, index) => {
      return (
        <li className="members__item" key={index}>
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
          <h4 className="members__title">Members:</h4>
        </div>
        <ul className="members__list">{renderMembers()}</ul>
      </article>
    </>
  );
};

export default Club;
