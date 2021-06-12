<p align="center">
  <img src="https://static.igloo.ooo/logo-192.png" alt="Igloo logo" width="128"/>
</p>

<h1 align="center">Material-UI Color Sliders</h1>

A touch-friendly color picker based on [Material-UI](https://material-ui.com/) that supports both HSL and RGB color models.
<p align="center">
  <img src="https://user-images.githubusercontent.com/23523551/121777174-f325c500-cb90-11eb-9746-f9da3bcb13be.png" alt="Component screenshot" width="960"/>
</p>

# Installation

Just download the library from [npm](https://www.npmjs.com/package/@igloo_cloud/material-ui-color-sliders).

**Using npm**

```bash
npm install @igloo_cloud/material-ui-color-sliders --save
```

**Using Yarn**

```bash
yarn add @igloo_cloud/material-ui-color-sliders
```

# Usage

In order to use this library you will need to import each of the sliders separately and wrap them in either a `<HSLSliderProvider />` or `<RGBSliderProvider />` component.

```
import React from "react";
import {
  HSLSliderProvider,
  HueSlider,
  SaturationSlider,
  LightnessSlider,
} from "material-ui-color-sliders";

export default () =>
  <HSLSliderProvider>
    <HueSlider />
    <SaturationSlider />
    <LightnessSlider />
  </HSLSliderProvider>
```

**Components requiring `<HSLSliderProvider />`:**

- `<HueSlider />`
- `<SaturationSlider />`
- `<LightnessSlider />`

**Components requiring `<RGBSliderProvider />`:**

- `<RedSlider />`
- `<GreenSlider />`
- `<BlueSlider />`

# Available props

### HSLSliderProvider

| Name          | Type    | Default       | Description                                                                                               |
| ------------- | ------- | ------------- | --------------------------------------------------------------------------------------------------------- |
| defaultValues | `array` | `[0, 1, 0.5]` | Sets the initial value of the slider.                                                                     |
| onChange      | `func`  | `() => {}`    | Callback function that is called when the value of one of the sliders contained in the component changes. |

### RGBSliderProvider

| Name          | Type    | Default           | Description                                                                                               |
| ------------- | ------- | ----------------- | --------------------------------------------------------------------------------------------------------- |
| defaultValues | `array` | `[127, 127, 127]` | Sets the initial value of the slider.                                                                     |
| onChange      | `func`  | `() => {}`        | Callback function that is called when the value of one of the sliders contained in the component changes. |

### RedSlider, GreenSlider, BlueSlider, HueSlider, SaturationSlider and LightnessSlider

| Name              | Type     | Default    | Description                                                             |
| ----------------- | -------- | ---------- | ----------------------------------------------------------------------- |
| onChange          | `func`   | `() => {}` | Callback function that is called when the value of the slider changes.  |
| onChangeCommitted | `func`   | `() => {}` | Callback function that is called when the `mouseup` event is triggered. |
| style             | `object` | `{}`       | Style applied to the root class of the component.                       |

# Try it out

Just clone this repository and run the following commands to open a live demo:

**Using npm**

```bash
cd example
npm start
```

**Using Yarn**

```bash
cd example
yarn start
```
