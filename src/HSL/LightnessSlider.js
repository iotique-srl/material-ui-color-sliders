import React, { Component } from "react"
import Slider from "@material-ui/core/Slider"
import tinyColor from "tinycolor2"
import HSLSliderContext from "./HSLSliderContext"
import { withStyles } from "@material-ui/core"

export default class ContextInjector extends Component {
  static contextType = HSLSliderContext

  render() {
    return <LightnessSliderWithStyles {...this.context} {...this.props} />
  }
}

const LightnessSliderWithStyles = withStyles({
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
    marginLeft: "-10px",
    color: "white",
    backgroundColor: "white",
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
})(
  class LightnessSlider extends Component {
    render() {
      const {
        style,
        onChange = () => {},
        onChangeCommitted = () => {},
        classes: { rail, thumb },
        lightness,
        setLightness,
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
            setLightness(value)
            onChange(value)
          }}
          value={lightness}
          onChangeCommitted={onChangeCommitted}
        />
      )
    }
  }
)
