import React, { useContext } from "react";
import Slider from "@material-ui/core/Slider";
import makeStyles from "@material-ui/core/styles/makeStyles";
import tinyColor from "tinycolor2";
import HSLSliderContext from "./HSLSliderContext";

const useStyles = makeStyles({
  rail: {
    background: ({ hue }) =>
      `linear-gradient(to right, ${tinyColor({
        h: hue,
        s: 0,
        l: 0.5,
      })}, ${tinyColor({
        h: hue,
        s: 1,
        l: 0.5,
      })})`,
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
    boxShadow: ({ hue, saturation }) =>
      "0px 0px 0px 2px " + tinyColor({ h: hue, s: saturation, l: 0.5 }),
    "&:hover": {
      boxShadow: ({ hue, saturation }) =>
        "0px 0px 0px 8px " +
        tinyColor({
          h: hue,
          s: saturation,
          l: 0.5,
        }).setAlpha(0.16),
    },
    "&.Mui-focusVisible": {
      boxShadow: ({ hue, saturation }) =>
        "0px 0px 0px 8px " +
        tinyColor({
          h: hue,
          s: saturation,
          l: 0.5,
        }).setAlpha(0.16),
    },
    "&.MuiSlider-active": {
      boxShadow: ({ hue, saturation }) =>
        "0px 0px 0px 14px " +
        tinyColor({
          h: hue,
          s: saturation,
          l: 0.5,
        }).setAlpha(0.16),
    },
  },
});

export default ({
  style,
  onChange = () => {},
  onChangeCommitted = () => {},
  defaultValue,
}) => {
  const { hue, saturation, setSaturation } = useContext(HSLSliderContext);
  const { rail, thumb } = useStyles({ hue, saturation });

  return (
    <Slider
      track={false}
      classes={{ rail, thumb }}
      min={0}
      max={1}
      step={0.01}
      style={style}
      onChange={(_, value) => {
        setSaturation(value);
        onChange(value);
      }}
      value={saturation}
      onChangeCommitted={onChangeCommitted}
    />
  );
};
