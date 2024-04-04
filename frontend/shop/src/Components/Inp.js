import React, { useState } from "react";
import Rating from "./Rating";
import Discount from "./Discount";

export default function Inp() {
  const [rating, setRating] = useState("0");
  const [rt, setrt] = useState("0");
  const [pri, setpri] = useState("0");
  const [ans, setans] = useState("0");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
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
        <br />
        <div>
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
                  return res.text();
                })
                .then((text) => {
                  setans(text);
                  console.log(ans);
                });
            } catch (error) {
              console.error("Error occurred:", error);
            }
          }}
          className="btn btn-primary"
          style={{ backgroundColor: "darkblue" }}
        >
          {" "}
          Submit
        </button>

        <button
          style={{ float: "right", margin: 5 }}
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
      <div>
        <Discount dis={ans} />
      </div>
      <h7 style={{ margin: 15 }}>
        {" "}
        ( The discount is currently calculated by just adding the 3 values in
        the backend which is written in python and connected using flask. Based
        on the requirement the backend can be developed to generate the required
        discount rates )
      </h7>
    </div>
  );
}
