import InputView from "../views/InputView.js";

export default class MainController {
  constructor() {
    this.tag = "[MainController]";
    this._app = document.getElementById("app");
    this.InputView = new InputView();
  }

  init() {
    console.log(this.tag, "init()");

    this.InputView.setup(this._app);
  }
}
