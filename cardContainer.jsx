import React from "react";

import Card from "./card.jsx";

const listOfText = [
  "Give it a try",
  "Nothing is impossible.",
  "There you go",
  "Follow your dreams.",
];

const links = [
  "https://media.istockphoto.com/id/1255203350/photo/teamwork-friendship-hiking-help-each-other-trust-assistance-silhouette-in-mountains-sunrise.jpg?s=612x612&w=0&k=20&c=XU9MhkkMdyM59gAMDSUwltr-LhVyjWHLvTxQCPwVbF8=",
  "https://nationaltoday.com/wp-content/uploads/2021/10/Motivation-and-Inspiration-Day-640x514.jpg",
  "https://www.successconsciousness.com/blog/wp-content/uploads/getting-motivated.jpg",
  "https://assets.entrepreneur.com/content/3x2/2000/20170927033915-Untitleddesign.jpeg",
];

const categories = ["Try", "Goals", "Success", "Dreams"];
const CardContainer = () => {
  let fullCards = [];
  for (let i = 0; i < 4; i++) {
    fullCards.push(
      <div className="col-md-3 col-sm-8 col-10 ">
        <Card text={listOfText[i]} link={links[i]} category={categories[i]} />
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row justify-content-center">{fullCards}</div>
    </div>
  );
};

export default CardContainer;
