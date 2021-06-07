import React, { useContext } from "react";
import Slider from "@material-ui/core/Slider";
import makeStyles from "@material-ui/core/styles/makeStyles";
import tinyColor from "tinycolor2";
import RGBSliderContext from "./RGBSliderContext";

const useStyles = makeStyles({
  rail: {
    background: "linear-gradient(to right, #000, #00f)",
    height: "8px",
    borderRadius: "4px",
    opacity: 1,
  },
  thumb: {
    width: "20px",
    height: "20px",
    marginTop: "-6px",
    color: "white",
    backgroundColor: "white",
    boxShadow: ({ blue }) =>
      "0px 0px 0px 2px " + tinyColor({ r: 0, g: 0, b: blue }),
    "&:hover": {
      boxShadow: ({ blue }) =>
        "0px 0px 0px 8px " + tinyColor({ r: 0, g: 0, b: blue }).setAlpha(0.16),
    },
    "&.Mui-focusVisible": {
      boxShadow: ({ blue }) =>
        "0px 0px 0px 8px " + tinyColor({ r: 0, g: 0, b: blue }).setAlpha(0.16),
    },
    "&.MuiSlider-active": {
      boxShadow: ({ blue }) =>
        "0px 0px 0px 14px " + tinyColor({ r: 0, g: 0, b: blue }).setAlpha(0.16),
    },
  },
});

export default ({
  style,
  onChange = () => {},
  onChangeCommitted = () => {},
}) => {
  const { blue, setBlue } = useContext(RGBSliderContext);
  const { rail, thumb } = useStyles({ blue });

  return (
    <Slider
      track={false}
      classes={{ rail, thumb }}
      min={0}
      max={255}
      style={style}
      onChange={(_, value) => {
        setBlue(value);
        onChange(value);
      }}
      value={blue}
      onChangeCommitted={onChangeCommitted}
    />
  );
};
