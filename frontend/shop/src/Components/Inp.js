import React, { useState } from "react";
import Rating from "./Rating";
import Discount from "./Discount";

export default function Inp() {
  const [rating, setRating] = useState("0");
  const [rt, setrt] = useState("0");
  const [pri, setpri] = useState("0");
  const [ans, setans] = useState("0");
  return (
    // <div style={{ display: 'inline-block' }}>
    // <div style={{ display: "flex" }}>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // height: "100vh",
      }}
    >
      <Rating rating={rating} setRating={setRating} />
      <br />
      <div>
        <div>
          <label style={{ fontSize: "19px" }}>
            <span style={{ marginRight: "5px" }}>Rating</span>
            <span>Count: </span>
            <span>&nbsp;&nbsp;</span>
          </label>
          <input
            type="number"
            align="center"
            className="form-control"
            value={rt}
            onChange={(e) => setrt(e.target.value)}
            id="rate"
            placeholder="Enter rating count"
          />
        </div>
        {/* <div style={{ display: "flex", alignItems: "center" }}> */}
        <br />
        <div>
          {/* <label style={{ fontSize: "20px" }}>Actual Price:</label> */}
          <label style={{ fontSize: "19px" }}>
            <span style={{ marginRight: "5px" }}>Actual</span>
            <span>Price: </span>
            <span>&nbsp;&nbsp;</span>
          </label>
          <input
            type="number"
            align="center"
            className="form-control"
            value={pri}
            onChange={(e) => setpri(e.target.value)}
            id="price"
            placeholder="Enter the cost"
          />
        </div>
      </div>
      <br />
      <div style={{ display: "inline-block" }}>
        <button
          onClick={() => {
            // try {
            //   fetch("http://localhost:5000/url", {

            //       'method':'POST',
            //   headers: {
            //       "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify({
            //       // "Rate": document.getElementById("rate").textContent,
            //       "Rate": rt,
            //       // "Price": document.getElementById("price").textContent
            //       "Price": pri
            //     })
            //   }).then((res) => {
            //     console.log(res.text());
            //     setans(res.text()+" ")
            //   });;
            try {
              fetch("http://localhost:5000/url", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  Rate: rt,
                  Price: pri,
                  Star: rating,
                }),
              })
                .then((res) => {
                  return res.text(); // Convert response to text
                })
                .then((text) => {
                  setans(text);
                  console.log(ans); // Log the response text to the console
                  // Set the response text as the value of the ans state variable
                });
            } catch (error) {
              console.error("Error occurred:", error);
            }
          }}
          // catch (err) {
          //   console.log("error");
          // }
          className="btn btn-primary"
        >
          {" "}
          Submit
        </button>

        <button
          style={{ float: "left" }}
          onClick={() => {
            setRating(0);
            setans(0);
            setpri(0);
            setrt(0);
          }}
        >
          Clear
        </button>
      </div>
      <br />
      {/* <div style={{ display: "inline-block" }}> */}
      <div>
        <Discount dis={ans} />
        {/* Discount=<p>{ans}%</p>
        <p>ratin={rating}</p> */}
      </div>
      {/* </div> */}
    </div>
  );
}
