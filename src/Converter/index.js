import React, { useState, useEffect } from 'react'
import axios from "axios";
import moment from "moment";
import { Line } from "react-chartjs-2";

const myoptions = [
    { value: "USD", label: "United States Dollar" },
    { value: "GBP", label: "British Pound Sterling" },
    { value: "EUR", label: "Euro" },
];

function Converter() {
    const [getData, setGetData] = useState([]);
    const [currencyvalue, setCurrencyvalue] = useState("");
    const [currencycode, setCurrencynamecode] = useState("");
    const [data, setData] = useState([]);
    const [lable, setLable] = useState([]);
    const [wholedata, setWholedata] = useState({});

    const todaysDate = moment().format("YYYY-MM-DD");
    const lastDate = moment(moment().subtract(60, "days")).format("YYYY-MM-DD");

    const mydata = {
        labels: lable,
        datasets: [
            {
                label: "Last 60 days trend",
                data: data,
                fill: true,
                backgroundColor: currencycode === "USD" ? "rgb(30,144,255, 0.2)" : currencycode === "GBP" ? "rgb(140, 30, 20, 0.2)" : "rgb(19, 138, 29, 0.2)",
                borderColor: currencycode === "USD" ? "#1e90ff" : currencycode === "GBP" ? "#8c2214" : "#11821a"
            },
        ],
    };

    const options = {
        scales: {},
    };

    useEffect(() => {
        axios
            .get("https://api.coindesk.com/v1/bpi/currentprice.json")
            .then((res) => {
                res = res.data.bpi;
                setGetData(res);
                setCurrencynamecode(res["USD"].code);
                setCurrencyvalue(res["USD"].rate);
            });
    }, []);

    const handleChange = (e) => {
        e = e.target.value
        setCurrencynamecode(getData[e].code);
        setCurrencyvalue(getData[e].rate);
    }

    useEffect(() => {
        if (currencycode !== "" && currencycode !== undefined) {
            axios
                .get(
                    `https://api.coindesk.com/v1/bpi/historical/close.json?currency=${currencycode}&start=${lastDate}&end=${todaysDate}`
                )
                .then((res) => {
                    res = res.data.bpi;
                    // setWholedata(res.data.bpi)
                    setLable(Object.keys(res));
                    setData(Object.values(res));
                });
        }
    }, [currencycode])

    return (
        <div className="p-3">
            <h5 className="p-3">1 Bitcoin Equals = {currencyvalue} {currencycode}</h5>

            <select onChange={(e) => handleChange(e)} defaultValue="USD" className="form-select form-select-lg mb-3 m-2" aria-label=".form-select-lg example" style={{ maxWidth: "300px", display: "inline-block", justifyContent: "center" }}>
                {myoptions.map(item => <option key={item.value} value={item.value}>{item.label}</option>)}
            </select>

            <Line data={mydata} options={options} width={50} height={20} />

        </div>
    )
}

export default Converter
