import React, { Component } from "react"
import RGBSliderContext from "./RGBSliderContext"

export default class RGBSliderProvider extends Component {
  constructor(props) {
    super(props)

    const { defaultValues = [127, 127, 127] } = props

    this.state = {
      red: defaultValues[0],
      green: defaultValues[1],
      blue: defaultValues[2],
    }
  }

  render() {
    const { children, onChange = () => {} } = this.props
    const { red, green, blue } = this.state

    return (
      <RGBSliderContext.Provider
        value={{
          red,
          setRed: (red) => {
            this.setState({ red })
            onChange(red, green, blue)
          },
          green,
          setGreen: (green) => {
            this.setState({ green })
            onChange(red, green, blue)
          },
          blue,
          setBlue: (blue) => {
            this.setState({ blue })
            onChange(red, green, blue)
          },
        }}
      >
        {children}
      </RGBSliderContext.Provider>
    )
  }
}
