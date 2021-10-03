import React, { Component } from "react"
import Slider from "@material-ui/core/Slider"
import withStyles from "@material-ui/core/styles/withStyles"
import tinyColor from "tinycolor2"
import RGBSliderContext from "./RGBSliderContext"

export default class ContextInjector extends Component {
  static contextType = RGBSliderContext

  render() {
    return <RedSliderWithStyles {...this.context} {...this.props} />
  }
}

const RedSliderWithStyles = withStyles({
  rail: {
    background: "linear-gradient(to right, #000, #f00)",
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
    boxShadow: ({ red }) =>
      "0px 0px 0px 2px " + tinyColor({ r: red, g: 0, b: 0 }),
    "&:hover": {
      boxShadow: ({ red }) =>
        "0px 0px 0px 8px " + tinyColor({ r: red, g: 0, b: 0 }).setAlpha(0.16),
    },
    "&.Mui-focusVisible": {
      boxShadow: ({ red }) =>
        "0px 0px 0px 8px " + tinyColor({ r: red, g: 0, b: 0 }).setAlpha(0.16),
    },
    "&.MuiSlider-active": {
      boxShadow: ({ red }) =>
        "0px 0px 0px 14px " + tinyColor({ r: red, g: 0, b: 0 }).setAlpha(0.16),
    },
  },
})(
  class RedSlider extends Component {
    render() {
      const {
        style,
        onChange = () => {},
        onChangeCommitted = () => {},
        classes: { rail, thumb },
        red,
        setRed,
      } = this.props

      return (
        <Slider
          track={false}
          classes={{ rail, thumb }}
          min={0}
          max={255}
          style={{ ...style, padding: "13px 0" }}
          onChange={(_, value) => {
            setRed(value)
            onChange(value)
          }}
          value={red}
          onChangeCommitted={onChangeCommitted}
        />
      )
    }
  }
)
