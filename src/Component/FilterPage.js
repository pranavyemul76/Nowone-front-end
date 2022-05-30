import React, { useEffect, useState, useCallback } from "react";
import "../Style/FilterPage.css";
import axios from "axios";
import FilterProductData from "./FilterProductData";
import { useLocation, useHistory } from "react-router";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Filtetbar from "./Filtetbar";
import Test from "./test";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Filterproducts } from "../Redux/Actions/FilterProducts.actions.";

const Filterpage = (props) => {
  const history = useHistory();
  const location = useLocation();
  const [price, Setprice] = useState(undefined);
  const [season, Setseason] = useState([]);
  const [dataload, SetDataload] = useState(true);
  const [windowSize, SetWindowSize] = React.useState();
  React.useEffect(() => {
    var size = window.innerWidth;
    SetWindowSize(size);
    window.addEventListener("resize", () => {
      size = window.innerWidth;
      SetWindowSize(size);
    });
  }, [windowSize]);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const pricechange = (e) => {
    Setprice(e.target.value);
  };
  let { slug } = useParams();
  const dispatch = useDispatch();
  const filter = useCallback(() => {
    SetDataload(true);
    axios(
      {
        url: `http://localhost:8080/getfilter/${slug}`,
        method: "POST",
        headers: {
          Authorization: ` Bearer ${localStorage.getItem("userinfo")}`,
        },
        data: {
          price: price,
          primaryColour: season.primaryColour,
          brand: season.brand,
          category: season.category,
          season: season.season,
        },
      },
      { timeout: 1000 }
    ).then((response) => {
      SetDataload(false);
      dispatch(Filterproducts(response.data));
    });
  }, [
    price,
    season.primaryColour,
    season.brand,
    season.category,
    season.season,
    dispatch,
    slug,
  ]);

  useEffect(() => {
    filter();
  }, [price, season, slug, filter]);

  const filterdata = useSelector(
    (state) => state.Filterreducres.Filterproducts
  );
  const changeSize = (e) => {
    e.preventDefault();
    if (e.target.checked) {
      const fl = e.target.name;

      if (season[fl]) {
        console.log(season);
        season[fl].push(e.target.value);
        Setseason({ ...season });
        console.log(season);
        const params = new URLSearchParams(season);
        console.log(params.get(e.target.name));
        history.replace({
          pathname: location.pathname,
          search: params.toString(),
        });
      } else {
        console.log(season);
        const test = {};
        test[fl] = [e.target.value];
        Setseason({ ...season, ...test });
        console.log(season);
        const params = new URLSearchParams(season);
        console.log(params.get(e.target.name));
        history.replace({
          pathname: location.pathname,
          search: params.toString(),
        });
      }
    } else {
      let input = e.target.value;
      let index = season[e.target.name].indexOf(input);
      season[e.target.name].splice(index, 1);
      Setseason({ ...season });
      const params = new URLSearchParams(season);
      console.log(params.get(e.target.name));
      history.replace({
        pathname: location.pathname,
        search: params.toString(),
      });
    }
  };
  return (
    <div>
      {dataload ? (
        <>
          <div className="loading">
            <div className="laodinglayout">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div
                style={{
                  textAlign: "justify",
                  letterSpacing: "7px",
                  fontSize: "20px",
                  display: "block",
                }}
              >
                Loading
              </div>
            </div>
          </div>
        </>
      ) : filterdata.products !== undefined &&
        filterdata.products.length >= 1 ? (
        <>
          <Filtetbar
            windowSize={windowSize}
            changeSize={changeSize}
            season={season}
            filterdata={filterdata}
          />

          {windowSize < 777 && <Test season={Setseason} filter={filterdata} />}
          {/*     Filter section start*/}
          <div
            className="row"
            style={{ width: "100%", marginTop: "0px", position: "relative" }}
          >
            <div className="col-3 for_mobile" style={{ width: "10%" }}>
              <div className="Filter_options shadow-lg p-3 mb-5 bg-white rounded border">
                <div style={{ display: "flex" }}>
                  <h4>Filter</h4>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    className="btn"
                    onClick={() => {
                      Setseason([]);
                    }}
                  >
                    clear Filter
                  </button>
                </div>
                <label style={{ fontSize: "large", marginTop: "10px" }}>
                  price
                </label>
                <div>
                  <input
                    type="range"
                    step="100"
                    min="100"
                    max="8000"
                    className="price_range"
                    onMouseUp={pricechange}
                    defaultValue={price || 0}
                    name="price"
                  />
                  <div className="see-price">{price || 0}</div>
                </div>
                <div className="container">
                  <div id="accordion">
                    {filterdata.filterdata &&
                      filterdata.filterdata.map((item) => {
                        return (
                          <div
                            className="card "
                            key={item.name}
                            style={{
                              left: "-10px",
                              marginTop: "10px",
                              marginBottom: "15px",
                            }}
                          >
                            <div
                              id="headingOne"
                              style={{ marginBottom: "15px" }}
                            >
                              <h6 className="mb-0">
                                <div
                                  data-toggle="collapse"
                                  href={`#collapse${item.name}`}
                                  role="button"
                                  aria-expanded="false"
                                  aria-controls={`collapse${item.name}`}
                                >
                                  {item.name}
                                </div>
                              </h6>
                            </div>
                            <div
                              id={`collapse${item.name}`}
                              className="collapse show"
                              st
                            >
                              <ul className="list-group listofgroup">
                                {item.filterdata.map((item) => {
                                  return (
                                    <div>
                                      <li
                                        className="list-group-item"
                                        style={{
                                          border: "0px",
                                          margin: "0px",
                                          padding: "1px",
                                          display: "flex",
                                        }}
                                      >
                                        <label className="checklabel">
                                          <input
                                            type="checkbox"
                                            name={item.category}
                                            value={item.name}
                                            onChange={changeSize}
                                            className="checkbox_size"
                                            checked={
                                              season[item.category] &&
                                              season[item.category].includes(
                                                item.name
                                              )
                                            }
                                          />
                                        </label>
                                        &nbsp;
                                        <sapn
                                          style={{
                                            position: "relative",
                                            top: "-3px",
                                            fontSize: "17px",
                                          }}
                                        >
                                          {item.name}
                                        </sapn>
                                        &nbsp;&nbsp;
                                        <sapn
                                          style={{
                                            color: "#888894",
                                            fontSize: "13px",
                                          }}
                                        >
                                          ({item.count})
                                        </sapn>
                                      </li>
                                    </div>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>

            <FilterProductData
              price={price}
              products={filterdata.products}
              dataload={dataload}
            />
          </div>
        </>
      ) : (
        <div
          style={{
            position: "relative",
            marginLeft: "auto",
            width: "40%",
            height: "40%",
            marginRight: "auto",
          }}
        >
          <img
            src="https://teacherr.in/images/oops.png"
            width="100%"
            height="100%"
            alt="No result found"
          />
        </div>
      )}
    </div>
  );
};

export default Filterpage;
// {Object.values(season).map((i) => {
//   return (
//     <div className="filterselect">
//       <label>
//         <input
//           style={{ display: "none" }}
//           checked={true}
//           name={"Color"}
//           value={i}
//           onChange={() => {
//             changeSize();
//           }}
//         />
//         <span>
//           {i} &nbsp;
//           <i class="fa fa-times" aria-hidden="true"></i>
//         </span>
//       </label>
//     </div>
//   );
// })}

// {/*     Filter section End*/}

//         {/*<Filter price={price} grid={'col-sm-9'} size={size} color={color}/>
//          */}
//// const [arrr,setDATA]=useState([])
// let history= useHistory();
// const location= useLocation();
//8D4@2zX^6KYP17Z4LyGj
/*useEffect(()=>{
  axios({
    url:'https://www.vijaysales.com/fire-boltt-ninja-touch-to-wake-spo2-smartwatch-black/17332',
    method:'GET'
  
  }).then(res=>{
   const v= res.data.split('AggregateOffer')
    if(v.length>1){
    console.log(v[1].slice(25,42))
  }})

 

})
 */

/*useEffect(()=>{
 
  var size=window.innerWidth;
  console.log(size)
  if(size>760){
    SetWindowSize('col-sm-9');
  }
  else{
    SetWindowSize('col-sm-12')
  }
  window.addEventListener('resize', () => {
   size=window.innerWidth;
  console.log(size);
  if(size>760){
    SetWindowSize('col-sm-9');
  }
  else{
    SetWindowSize('col-sm-12')
  }
} ,false);
}) */
/*axios({
    url:'https://www.vijaysales.com/vivo-y21-4-gb-ram-64-gb-rom-diamond-glow/17179',
    method:'GET'
  
  }).then(res=>{setDATA(res.data)})

  const v=data.split('AggregateOffer')
  if(v.length>1){
  console.log(v[1].slice(25,42))
}*/
/*if(e.target.checked){
 if(location.search===''){
  history.push({
    pathname: location.pathname,
    search: `F=${e.target.value}`,
  });
}
else{
  history.push({
    pathname: location.pathname,
    search: `${location.search} ${e.target.value}`,
  });
}
} */
/*
useEffect(()=>{

   const ned= localStorage.getItem("data")
  
   if(ned!==null){
   const v= ned.split(",")
   SetData(v)
   }
},[])

useEffect(()=>{

 localStorage.setItem("data",arrr)
 
},[arrr,location.pathname,history])


 
const changeSize=(e)=>{
const ischeck=e.target.checked;
  if(ischeck){
   SetData([...arrr,e.target.value]);

 }
  else{
   
    const index=arrr.indexOf(`${e.target.value}`);
    const newdata= [...arrr];
    newdata.splice(index,1)
    SetData(newdata);
 history.push(`${location.pathname}?F=${newdata}`)

    
   }
 
}

*/
