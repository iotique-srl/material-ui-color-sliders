import React, { Component } from "react"
import Slider from "@material-ui/core/Slider"
import withStyles from "@material-ui/core/styles/withStyles"
import tinyColor from "tinycolor2"
import HSLSliderContext from "./HSLSliderContext"

export default class ContextInjector extends Component {
  static contextType = HSLSliderContext

  render() {
    return <SaturationSliderWithStyles {...this.context} {...this.props} />
  }
}

const SaturationSliderWithStyles = withStyles({
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
    marginLeft: "-10px",
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
})(
  class SaturationSlider extends Component {
    render() {
      const {
        style,
        onChange = () => {},
        onChangeCommitted = () => {},
        classes: { rail, thumb },
        saturation,
        setSaturation,
      } = this.props

      return (
        <Slider
          track={false}
          classes={{ rail, thumb }}
          min={0}
          max={1}
          step={0.01}
          style={{ ...style, padding: "13px 0" }}
          onChange={(_, value) => {
            setSaturation(value)
            onChange(value)
          }}
          value={saturation}
          onChangeCommitted={onChangeCommitted}
        />
      )
    }
  }
)
