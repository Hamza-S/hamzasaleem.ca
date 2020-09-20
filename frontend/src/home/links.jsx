import React, { Component } from "react";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";

export const NetLinks = () => {
  return (
    <div className="col" id="netLinks">
      <div>
        <button
          class="socialLink"
          onClick={() => window.open("https://github.com/Hamza-S", "_blank")}
        >
          <img src={github} alt="Preview" />
        </button>
      </div>
      <div>
        <button
          class="socialLink"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/hamza-saleem-54702b142/",
              "_blank"
            )
          }
        >
          <img src={linkedin} alt="Preview" />
        </button>
      </div>
    </div>
  );
};
