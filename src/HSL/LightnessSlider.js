import React, { useContext } from "react";
import Slider from "@material-ui/core/Slider";
import makeStyles from "@material-ui/core/styles/makeStyles";
import tinyColor from "tinycolor2";
import HSLSliderContext from "./HSLSliderContext";

const useStyles = makeStyles({
  rail: {
    background: ({ hue, saturation }) =>
      `linear-gradient(to right, ${tinyColor({
        h: hue,
        s: saturation,
        l: 0,
      })}, ${tinyColor({
        h: hue,
        s: saturation,
        l: 0.45,
      })}, ${tinyColor({
        h: hue,
        s: saturation,
        l: 0.9,
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
    boxShadow: ({ hue, saturation, lightness }) =>
      "0px 0px 0px 2px " +
      tinyColor({ h: hue, s: saturation, l: lightness * 0.9 }),
    "&:hover": {
      boxShadow: ({ hue, saturation, lightness }) =>
        "0px 0px 0px 8px " +
        tinyColor({
          h: hue,
          s: saturation,
          l: lightness * 0.9,
        }).setAlpha(0.16),
    },
    "&.Mui-focusVisible": {
      boxShadow: ({ hue, saturation, lightness }) =>
        "0px 0px 0px 8px " +
        tinyColor({
          h: hue,
          s: saturation,
          l: lightness * 0.9,
        }).setAlpha(0.16),
    },
    "&.MuiSlider-active": {
      boxShadow: ({ hue, saturation, lightness }) =>
        "0px 0px 0px 14px " +
        tinyColor({
          h: hue,
          s: saturation,
          l: lightness * 0.9,
        }).setAlpha(0.16),
    },
  },
});

export default ({
  style,
  onChange = () => {},
  onChangeCommitted = () => {},
}) => {
  const { hue, saturation, lightness, setLightness } =
    useContext(HSLSliderContext);
  const { rail, thumb } = useStyles({ hue, saturation, lightness });

  return (
    <Slider
      track={false}
      classes={{ rail, thumb }}
      min={0}
      max={1}
      step={0.01}
      style={style}
      onChange={(_, value) => {
        setLightness(value);
        onChange(value);
      }}
      value={lightness}
      onChangeCommitted={onChangeCommitted}
    />
  );
};
