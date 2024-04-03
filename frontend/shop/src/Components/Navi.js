import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
export default function Navi() {
  const navigate = useNavigate();
  return (
    <div>
      <header
        class="header"
        style={{
          display: "flex",
          flexdirection: "column",
          alignitems: "center",
          paddingTop: ".5em",
          paddingBottom: ".5em",
          boxShadow: "0px 0px 14px 0px rgba(0,0,0,0.75)",
          WebkitBorderRadius: "5px",
          MozBorderRadius: "5px",
          borderRadius: "5px",
        }}
      >
        <h3 class="logo">Ecom</h3>
        <div className="container">
          <ul
            class="main-nav"
            style={{
              display: "flex",
              listStyle: "none",
              float: "right",
              margin: 0,
              padding: 0,
              textAlign: "right",
            }}
          >
            <li style={{ margin: 15 }}>
              {/* <NavLink
                to="/"
                style={{ textDecoration: "none", fontWeight: "bold" }}
              > */}
              Home
              {/* </NavLink> */}
            </li>
            <li style={{ margin: 15 }}>
              <NavLink
                to="/calcDiscount"
                style={{ textDecoration: "none", fontWeight: "bold" }}
              >
                {" "}
                Calculate Discount{" "}
              </NavLink>
              {/* </NavLink> */}
              {/* <button onClick={() => navigate("/calcDiscount")}>
                Calculate Discount &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              </button> */}
            </li>
            <li style={{ margin: 15 }}>
              {/* <a href="#" style={{ textDecoration: "none", fontWeight: "bold" }}> */}
              Contact
              {/* </a> */}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
