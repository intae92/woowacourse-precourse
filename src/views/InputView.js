import View from "./View.js";
import { DOM_ID } from "../utils/variables.js";

export default class InputView extends View {
  constructor() {
    super();
    this.tag = "[InputView]";
  }

  setup(el) {
    this.init(el);
    this.el.innerHTML = this.render();
    this.bindEvents();
    return this;
  }

  render() {
    return this.headerText() + this.inputForm();
  }

  headerText() {
    return `<h1>🚇 지하철 길찾기</h1>`;
  }

  inputForm() {
    return `
        <form>
        ${
          this.inputDeparture() +
          this.inputArrival() +
          this.inputRadio() +
          this.searchButton()
        }
        </form>
      `;
  }

  inputDeparture() {
    return `
    <div>
        <label for=${DOM_ID.DEPARTURE_STATION_NAME_INPUT_ID}>출발역</label>
        <input
            type="text"
            id=${DOM_ID.DEPARTURE_STATION_NAME_INPUT_ID}
            autocomplete="off"
        />
    </div>
      `;
  }

  inputArrival() {
    return `
    <div>
        <label for=${DOM_ID.ARRIVAL_STATION_NAME_INPUT_ID}>도착역</label>
        <input
            type="text"
            id=${DOM_ID.ARRIVAL_STATION_NAME_INPUT_ID}
            autocomplete="off"
        />
    </div>
      `;
  }

  inputRadio() {
    return `
      <div>
      <input
        type="radio"
        id=${DOM_ID.SHORTEST_DISTANCE_RADIO_ID}
        name="search-type"
        value="distance"
        checked="checked"
      />
      <label for=${DOM_ID.SHORTEST_DISTANCE_RADIO_ID}>최단거리</label>

      <input
        type="radio"
        id=${DOM_ID.MINIMUM_DISTANCE_RADIO_ID}
        name="search-type"
        value="time"
      />
      <label for=${DOM_ID.MINIMUM_DISTANCE_RADIO_ID}>최소거리</label>
    </div>
      `;
  }

  searchButton() {
    return `
    <div>
      <button id=${DOM_ID.SEARCH_BUTTON_ID}>길 찾기</button>
    </div>
    `;
  }

  bindEvents() {
    this.on("submit", (e) => this.onSubmit(e));
    this.on("click", (e) => this.onClick(e));
  }

  onClick(e) {
    if (e.target.name === DOM_ID.SEARCH_TYPE_NAME) {
      const radio = e.target;
      this.emit("@clickRadio", { radio });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const input_info = {
      departure: e.target[0].value,
      arrival: e.target[1].value,
      option: e.target[2].getAttribute("checked") ? "distance" : "time",
    };

    this.emit("@submit", { input_info });
  }

  changeRadio(changeRado_info) {
    console.log(this.tag, "changeRadio()", changeRado_info);
    changeRado_info.checkedRadio.setAttribute("checked", "checked");
    changeRado_info.unCheckedRadio.removeAttribute("checked");
  }
}
