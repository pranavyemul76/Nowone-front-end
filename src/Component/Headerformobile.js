import React from "react";
import "../Style/headerformobile.css";
const Inside = ({ uniqs, category }) => {
  return (
    <>
      <div className="accordion" id={uniqs}>
        {category.map((i) => {
          return (
            <>
              <li
                data-toggle="collapse"
                href={`#${i.name}`}
                aria-controls={i.name}
              >
                <a href={`/${i.slug}`}>{i.name}</a>
                <span>
                  <i class="fa"></i>
                </span>
              </li>
              <div class="collapse" id={i.name} data-parent={`#${uniqs}`}>
                <Inside
                  category={i.subcategory}
                  uniqs={i.name.replace(/ /g, "")}
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

const Headerformobile = ({ category }) => {
  return (
    <>
      <div className="accordion" id={"accordion"}>
        {category &&
          category.length >= 1 &&
          category.map((i) => {
            return (
              <ul>
                <li
                  data-toggle="collapse"
                  href={`#${i.name}`}
                  aria-controls={i.name}
                >
                  <a href={`/${i.slug}`}>{i.name}</a>
                  <span>
                    <i class="fa"></i>
                  </span>
                </li>

                <div class="collapse" id={i.name} data-parent={"#accordion"}>
                  {i.subcategory.length >= 1 && (
                    <Inside
                      category={i.subcategory}
                      uniqs={i.name.replace(/ /g, "")}
                    />
                  )}
                </div>
              </ul>
            );
          })}
      </div>
    </>
  );
};
export default Headerformobile;
