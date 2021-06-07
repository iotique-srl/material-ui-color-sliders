import React, { useState } from "react";
import {
  HSLSliderProvider,
  HueSlider,
  SaturationSlider,
  LightnessSlider,
  RGBSliderProvider,
  RedSlider,
  BlueSlider,
  GreenSlider,
} from "material-ui-color-sliders";
import Typography from "@material-ui/core/Typography";

export default () => {
  const [HSL, setHSL] = useState([125, 0.49, 0.4]);
  const [RGB, setRGB] = useState([63, 127, 255]);

  return (
    <div style={{ margin: "32px 64px" }}>
      <Typography
        variant="h3"
        style={{
          color: `hsl(${HSL[0]}, ${HSL[1] * 100}%, ${HSL[2] * 100}%)`,
        }}
      >
        HSL
      </Typography>
      <HSLSliderProvider
        defaultValues={HSL}
        onChange={(hue, saturation, lightness) =>
          setHSL([hue, saturation, lightness])
        }
      >
        <HueSlider style={{ margin: "32px 0" }} />
        <SaturationSlider style={{ margin: "32px 0" }} />
        <LightnessSlider style={{ margin: "32px 0" }} />
      </HSLSliderProvider>
      <Typography
        variant="h3"
        style={{
          color: `rgb(${RGB[0]}, ${RGB[1]}, ${RGB[2]})`,
          marginTop: "32px",
        }}
      >
        RGB
      </Typography>
      <RGBSliderProvider
        defaultValues={RGB}
        onChange={(red, green, blue) => setRGB([red, green, blue])}
      >
        <RedSlider style={{ margin: "32px 0" }} />
        <GreenSlider style={{ margin: "32px 0" }} />
        <BlueSlider style={{ margin: "32px 0" }} />
      </RGBSliderProvider>
    </div>
  );
};
