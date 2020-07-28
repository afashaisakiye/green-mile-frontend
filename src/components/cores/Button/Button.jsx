import React from "react";
import './style.scss'
const Button = ({name}) => {
  return (
    <button class="btn btn-primary" type="submit">{name}</button>
  );
};

export default Button;
