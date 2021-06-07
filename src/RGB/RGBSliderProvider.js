import React, { useState } from "react";
import RGBSliderContext from "./RGBSliderContext";

export default ({
  children,
  onChange = () => {},
  defaultValues = [127, 127, 127],
}) => {
  const [red, setRed] = useState(defaultValues[0]);
  const [green, setGreen] = useState(defaultValues[1]);
  const [blue, setBlue] = useState(defaultValues[2]);

  return (
    <RGBSliderContext.Provider
      value={{
        red,
        setRed: (red) => {
          setRed(red);
          onChange(red, green, blue);
        },
        green,
        setGreen: (green) => {
          setGreen(green);
          onChange(red, green, blue);
        },
        blue,
        setBlue: (blue) => {
          setBlue(blue);
          onChange(red, green, blue);
        },
      }}
    >
      {children}
    </RGBSliderContext.Provider>
  );
};
