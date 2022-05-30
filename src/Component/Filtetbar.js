import React from "react";
import "../Style/Filterbar.css";
import $ from "jquery";
export const Filtetbar = ({ windowSize, changeSize, season, filterdata }) => {
  const changesizes = (e) => {
    changeSize(e);
  };
  React.useEffect(() => {
    $(".filter").on("click", function () {
      $(".FilterSectionLayout").css({
        width: "100%",
        visibility: "visible",
      });
      $(".filterbarlayout").css({
        visibility: "hidden",
        height: "0%",
      });
    });
    $(".ClearOrcancel").on("click", function () {
      $(".FilterSectionLayout").css({
        width: "0%",
        visibility: "hidden",
      });
      $(".filterbarlayout").css({
        visibility: "visible",
        height: "7vh",
      });
    });
    $(".FilterApply").on("click", function () {
      $(".FilterSectionLayout").css({
        width: "0%",
        visibility: "hidden",
      });
      $(".filterbarlayout").css({
        visibility: "visible",
        height: "7vh",
      });
    });

    $(".sel-size").on("click", function () {
      $(".sel-size").css({
        border: "10px solid",
        fontSize: "40px",
      });
    });
  }, []);

  return windowSize > 768 ? (
    <div className="container-fluid">
      <div className="row">
        <span> TOTAL ITEMS -{filterdata.numberofitems}</span>

        {Object.entries(season).map((i) => {
          let testing = i[0];
          return i[1].map((i) => {
            return (
              <div className="filterselect">
                <label>
                  <input
                    checked={true}
                    name={testing}
                    value={i}
                    onChange={changesizes}
                    type="checkbox"
                    style={{ display: "none" }}
                  />
                  <span>
                    {i} &nbsp;
                    <i class="fa fa-times" aria-hidden="true"></i>
                  </span>
                </label>
              </div>
            );
          });
        })}

        <div style={{ position: "absolute", right: "2%" }}>
          Sort recmmondeded
        </div>
      </div>
    </div>
  ) : (
    <div className="filterbarlayout">
      <div className="Sort">
        <div className="onclicksort"> Sort</div>
      </div>
      <div className="filter">
        <div className="onclickfilter">Filter</div>
      </div>
    </div>
  );
};
export default Filtetbar;
