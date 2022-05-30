import React from "react";
import "../Style/test.css";

const Test = ({ season, filter }) => {
  const [seasonone, Setseasonone] = React.useState([]);

  const changesizes = (e) => {
    if (e.target.checked) {
      const fl = e.target.name;

      if (seasonone[fl]) {
        seasonone[fl].push(e.target.value);
        Setseasonone({ ...seasonone });
      } else {
        const test = {};
        test[fl] = [e.target.value];
        Setseasonone({ ...seasonone, ...test });
      }
    } else {
      let input = e.target.value;
      let index = seasonone[e.target.name].indexOf(input);
      seasonone[e.target.name].splice(index, 1);
      Setseasonone({ ...seasonone });
    }
  };
  const changesize = (e) => {
    season(seasonone);
    e.preventDefault();
  };
  return (
    <div>
      <div className="FilterSectionLayout">
        <div>
          <form onSubmit={changesize}>
            <div className="FilterContents">
              {filter.filterdata !== undefined &&
                filter.filterdata.map((i) => {
                  return (
                    <div>
                      <div className="titleOffilter">
                        <span>{i.name}</span>
                      </div>
                      <div className="brandcorsol">
                        {i.filterdata.map((i) => {
                          return (
                            <div className="selectFilter">
                              <label>
                                <input
                                  type="checkbox"
                                  value={i.name}
                                  name={i.category}
                                  onChange={changesizes}
                                />
                                <span
                                  style={{
                                    backgroundColor: `${i.name.toLowerCase()} !important `,
                                  }}
                                >
                                  {i.name}
                                </span>
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="FilterSaveInfo">
              <div className="ClearOrcancel"> Cancel</div>
              <input type="submit" className="btn FilterApply" value="Apply" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Test;
