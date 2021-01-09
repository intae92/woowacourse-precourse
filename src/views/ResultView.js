import View from "./View.js";

export default class ResultView extends View {
  constructor() {
    super();
    this.tag = "[ResultView]";
  }

  setup(el) {
    this.init(el);
    return this;
  }

  render(result_info) {
    console.log(this.tag, "render()", result_info);
  }
}
