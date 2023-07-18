import React from "react";
import { StyledSkill } from "./style";

export const Skill = ({ title, icon }) => {
  return (
    <StyledSkill>
      <p>{title}</p>
      <i className={icon}></i>
    </StyledSkill>
  );
};
