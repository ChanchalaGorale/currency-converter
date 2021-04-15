import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import Chart from "./Chart";

const options = [
  { value: "USD", label: "United States Dollar" },
  { value: "GBP", label: "British Pound Sterling" },
  { value: "EUR", label: "Euro" },
];

function Currency() {
  const [getData, setGetData] = useState([]);
  const [currencyvalue, setCurrencyvalue] = useState(null);
  const [currencyname, setCurrencyname] = useState("");

  useEffect(() => {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((res) => {
        // console.log(res);
        setGetData(res.data.bpi);
      });

    console.log(getData);
  }, [getData]);

  const handleChange = (e) => {
    setCurrencyvalue(getData[e].rate);
    setCurrencyname(getData[e].description);
  };

  return (
    <div className="currency">
      <div>
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
      <div>
        <Chart />
      </div>
    </div>
  );
}

export default Currency;
