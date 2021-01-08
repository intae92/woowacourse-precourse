import View from "./View.js";

export default class InputView extends View {
  constructor() {
    super();
    this.tag = "[InputView]";
  }

  setup(el) {
    this.init(el);
    this.el.innerHTML = this.render();
    return this;
  }

  render() {
    //화면 구현
    return ``;
  }
}
