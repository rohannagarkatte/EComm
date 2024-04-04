import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
export default function Navi() {
  // const navigate = useNavigate();
  const navistyle = ({ isActive }) => {
    return {
      color: "darkblue",
      textDecoration: "none",
      fontWeight: isActive ? "bold" : "normal",
    };
  };
  return (
    <div>
      <header
        class="header"
        style={{
          display: "flex",
          backgroundColor: "aqua",
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
        <h3 style={{ margin: 10, fontWeight: "bold" }}>Ecom</h3>
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
              <NavLink to="/" style={navistyle}>
                Home
              </NavLink>
            </li>
            <li style={{ margin: 15 }}>
              <NavLink to="/calcDiscount" style={navistyle}>
                {" "}
                Calculate Discount{" "}
              </NavLink>
            </li>
            <li style={{ margin: 15 }}>
              <NavLink to="/contact" style={navistyle}>
                {" "}
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
      <footer style={{ backgroundColor: "aqua" }}></footer>
    </div>
  );
}
