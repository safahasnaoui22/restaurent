import "./Menu2.css";
import React from "react";

function Menu2() {
  return (
    <div className="bod">
      <div className="downmenu">
        <h1 className="hmenu">Our Menu</h1>
        <div className="container">
          <div className="btn">
            <a href="/it.pdf" download="it.pdf">Italian Menu</a>
          </div>
          <div className="btn">
            <a href="/tn.pdf" download="tn.pdf">Tunisian Menu</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu2;
