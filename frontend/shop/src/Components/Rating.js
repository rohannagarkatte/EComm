import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
export default function Rating(props) {
  // const [rating, setRating]=useState(null);
  const [hover, setHover] = useState(null);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          //  height: "100vh",
          marginTop: 15,
        }}
      >
        <br />
        <br />
        <h5 size={50} align="center">
          Ratings:{"  "}
        </h5>

        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <label>
              <input
                type="radio"
                name="rating"
                style={{ display: "none" }}
                value={currentRating}
                onClick={() => props.setRating(currentRating)}
              />
              <FaStar
                style={{ cursor: "pointer" }}
                size={50}
                color={
                  currentRating <= (hover || props.rating) ? "yellow" : "grey"
                }
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>
    </>
  );
}
{
  /* <p margin-right="50%" margin-left="50%" align="right">
{" "}
Rating={props.rating}
</p> */
}
