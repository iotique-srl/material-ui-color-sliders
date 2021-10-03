import React, { Component } from "react"
import HSLSliderContext from "./HSLSliderContext"

export default class HSLSliderProvider extends Component {
  constructor(props) {
    super(props)

    const { defaultValues = [0, 1, 0.5] } = props

    this.state = {
      hue: defaultValues[0],
      saturation: defaultValues[1],
      lightness: defaultValues[2],
    }
  }

  render() {
    const { children, onChange = () => {} } = this.props
    const { hue, saturation, lightness } = this.state

    return (
      <HSLSliderContext.Provider
        value={{
          hue,
          setHue: (hue) => {
            this.setState({ hue })
            onChange(hue, saturation, lightness)
          },
          saturation,
          setSaturation: (saturation) => {
            this.setState({ saturation })
            onChange(hue, saturation, lightness)
          },
          lightness,
          setLightness: (lightness) => {
            this.setState({ lightness })
            onChange(hue, saturation, lightness)
          },
        }}
      >
        {children}
      </HSLSliderContext.Provider>
    )
  }
}
