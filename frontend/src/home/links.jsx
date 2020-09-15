import React, { Component } from "react";
import github from "../github.png";
import linkedin from "../linkedin.png";

export const NetLinks = () => {
  return (
    <div className="col" id="netLinks">
      <div>
        <button class="socialLink">
          <img src={github} alt="Preview" href="google.com" />
        </button>
      </div>
      <div>
        <button class="socialLink">
          <img src={linkedin} alt="Preview" />
        </button>
      </div>
    </div>
  );
};
