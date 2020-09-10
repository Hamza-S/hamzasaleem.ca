import React, { Component } from "react";
import github from "../github.png";
import linkedin from "../linkedin.png";

export const NetLinks = () => {
  return (
    <div className="col" id="netLinks">
      <div>
        <img src={github} alt="Preview" />
      </div>
      <div>
        <img src={linkedin} alt="Preview" />
      </div>
    </div>
  );
};
