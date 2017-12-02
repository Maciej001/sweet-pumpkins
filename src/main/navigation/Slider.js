import React from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import "./Slider.css";

const Slider = ({ data, onChange }) => {
  const { min, max, step, value, label } = data;
  return (
    <div className="slider">
      <label>{label}</label>
      <InputRange
        minValue={min}
        maxValue={max}
        step={step}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Slider;
