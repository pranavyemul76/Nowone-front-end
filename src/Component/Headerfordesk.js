import React from "react";
import "../Style/Headerfordesk.css";

const Subcategory = ({ category }) => {
  return category.map((category, i) => {
    return (
      <div className="col-3" key={i}>
        <ul>
          <li className="CategoryTitleColor">
            <a href={`/${category.slug}`}>{category.name}</a>
          </li>
          {category.subcategory.map((category, i) => {
            return (
              <li className="CategoryTitlePadding" key={i}>
                <a href={`/${category.slug}`}>{category.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  });
};

const Headerfordesk = ({ category }) => {
  return (
    <div className="nav-containers">
      {category &&
        category.length >= 1 &&
        category.map((category, i) => {
          return (
            <div key={i}>
              <ul>
                <li key={category.name}>
                  <span>{category.name}</span>
                </li>
                <div className="row">
                  <Subcategory category={category.subcategory} />
                </div>
              </ul>
            </div>
          );
        })}
    </div>
  );
};

export default Headerfordesk;
