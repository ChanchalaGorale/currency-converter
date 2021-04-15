import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import Chart from "./Chart";
import moment from "moment";

const options = [
  { value: "USD", label: "United States Dollar" },
  { value: "GBP", label: "British Pound Sterling" },
  { value: "EUR", label: "Euro" },
];

function Currency() {
  const [getData, setGetData] = useState([]);
  const [currencyvalue, setCurrencyvalue] = useState(null);
  const [currencyname, setCurrencyname] = useState("");
  const [currencycode, setCurrencynamecode] = useState("");
  const [data, setData] = useState([]);
  const [lable, setLable] = useState([]);
  const [wholedata, setWholedata] = useState({});

  const todaysDate = moment().format("YYYY-MM-DD");
  const lastDate = moment(moment().subtract(60, "days")).format("YYYY-MM-DD");

  console.log(todaysDate);
  console.log(lastDate);

  useEffect(() => {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((res) => {
        // console.log(res);
        setGetData(res.data.bpi);
      });

    console.log(getData);
  }, []);

  const handleChange = (e) => {
    setCurrencynamecode(getData[e].code);
    setCurrencyvalue(getData[e].rate);
    setCurrencyname(getData[e].description);

    // getDataLable();
  };

  useEffect(() => {
    axios
      .get(
        `https://api.coindesk.com/v1/bpi/historical/close.json?currency=${currencycode}&start=${lastDate}&end=${todaysDate}`
      )
      .then((res) => setWholedata(res.data.bpi));

    console.log(wholedata);

    setLable(Object.keys(wholedata));
    setData(Object.values(wholedata));
  });

  return (
    <div className="currency">
      <div className="currency__container">
        <h5>1 Bitcoin Equals</h5>
        <Select
          options={options}
          className="select"
          onChange={(e) => handleChange(e.value)}
        />
        <div>
          <h3>{currencyvalue}</h3>
          <h3>{currencyname}</h3>
        </div>
      </div>
      <div className="currency__container">
        {currencyvalue && <Chart data={data} lable={lable} />}
      </div>
    </div>
  );
}

export default Currency;
