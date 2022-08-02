import * as noUiSlider from "../../node_modules/nouislider/dist/nouislider";
import "../../node_modules/nouislider/dist/nouislider.scss";
import "../styles/slider.scss";
import ItemsList from "./itemsList";

const slider: noUiSlider.target = document.getElementById(
  "slider"
) as noUiSlider.target;

function sliderChangeHandler(input0Value: string, input1Value: string) {
  window.localStorage.setItem("input-0", input0Value);
  window.localStorage.setItem("input-1", input1Value);
  ItemsList.refreshItemsList();
}

export function setSliderValues(value0: number, value1: number) {
  if (slider.noUiSlider) slider.noUiSlider.set([value0, value1]);
}

if (slider) {
  noUiSlider.create(slider, {
    start: [0, 10001],
    connect: true,
    step: 1,
    range: {
      min: [0],
      max: [10001],
    },
  });

  const input0 = document.getElementById("input-0") as HTMLInputElement;
  const input1 = document.getElementById("input-1") as HTMLInputElement;
  const inputs = [input0, input1];

  if (slider.noUiSlider !== undefined) {
    slider.noUiSlider.on("update", function (values, handle) {
      inputs[handle].value = String(Math.round(Number(values[handle])));
    });
    slider.noUiSlider.on("change", function (values) {
      sliderChangeHandler(String(values[0]), String(values[1]));
    });
  }
}
