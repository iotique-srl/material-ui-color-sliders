import React, { useState } from "react";
import HSLSliderContext from "./HSLSliderContext";

export default ({
  children,
  onChange = () => {},
  defaultValues = [0, 1, 0.5],
}) => {
  const [hue, setHue] = useState(defaultValues[0]);
  const [saturation, setSaturation] = useState(defaultValues[1]);
  const [lightness, setLightness] = useState(defaultValues[2]);

  return (
    <HSLSliderContext.Provider
      value={{
        hue,
        setHue: (hue) => {
          setHue(hue);
          onChange(hue, saturation, lightness);
        },
        saturation,
        setSaturation: (saturation) => {
          setSaturation(saturation);
          onChange(hue, saturation, lightness);
        },
        lightness,
        setLightness: (lightness) => {
          setLightness(lightness);
          onChange(hue, saturation, lightness);
        },
      }}
    >
      {children}
    </HSLSliderContext.Provider>
  );
};
