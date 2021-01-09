import InputView from "../views/InputView.js";
import { DOM_ID } from "../utils/variables.js";

export default class MainController {
  constructor() {
    this.tag = "[MainController]";
    this._app = document.getElementById("app");
    this.InputView = new InputView();
  }

  init() {
    console.log(this.tag, "init()");

    this.InputView.setup(this._app)
      .on("@submit", (e) => this.onSubmit(e.detail.input_info))
      .on("@clickRadio", (e) => this.onClickRadio(e.detail.radio));
  }

  onSubmit(input_info) {
    console.log(this.tag, "onSubmit()", input_info);
  }

  onClickRadio(radio) {
    console.log(this.tag, "onClickRadio()", radio);
    const radioIDError = new Error(`잘못된 radio id 값`);

    if (radio.id === DOM_ID.SHORTEST_DISTANCE_RADIO_ID) {
      return this.InputView.changeRadio({
        checkedRadio: radio,
        unCheckedRadio: document.getElementById(
          DOM_ID.MINIMUM_DISTANCE_RADIO_ID
        ),
      });
    }

    if (radio.id === DOM_ID.MINIMUM_DISTANCE_RADIO_ID) {
      return this.InputView.changeRadio({
        checkedRadio: radio,
        unCheckedRadio: document.getElementById(
          DOM_ID.SHORTEST_DISTANCE_RADIO_ID
        ),
      });
    }

    throw radioIDError;
  }
}
