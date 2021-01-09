import InputView from "../views/InputView.js";
import { DOM_ID } from "../utils/variables.js";
import Dijkstra from "../utils/Dijkstra.js";
import { stations, lines, sections } from "../models/data.js";

export default class MainController {
  constructor() {
    this.tag = "[MainController]";
    this._app = document.getElementById("app");
    this.InputView = new InputView();
    this.Dijkstra = new Dijkstra();
  }

  init() {
    console.log(this.tag, "init()");

    this.InputView.setup(this._app)
      .on("@submit", (e) => this.onSubmit(e.detail.input_info))
      .on("@clickRadio", (e) => this.onClickRadio(e.detail.radio));
  }

  onSubmit(input_info) {
    console.log(this.tag, "onSubmit()", input_info);

    const { departure, arrival, option } = input_info;
    this.addEdgeSections(option);

    if (!this.isValidInput(departure, arrival)) {
      return;
    }

    let result = this.Dijkstra.findShortestPath(departure, arrival);
    if (!this.isConnection(result)) {
      return;
    }

    console.log(result);
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

  addEdgeSections(option) {
    sections.forEach((section_info) => {
      this.Dijkstra.addEdge(
        section_info.section_stations[0],
        section_info.section_stations[1],
        section_info[option]
      );
    });
  }

  isValidInput(departure, arrival) {
    if (
      this.isEmpty(departure, arrival) &&
      this.isCorrectStationName(departure, arrival) &&
      this.isSameStationName(departure, arrival)
    ) {
      return true;
    }

    return false;
  }

  isEmpty(departure, arrival) {
    if (departure === "" && arrival === "") {
      alert("역 이름을 입력해주세요");
      return false;
    }
    return true;
  }

  isCorrectStationName(departure, arrival) {
    if (stations.includes(departure) && stations.includes(arrival)) {
      return true;
    }

    alert("존재하지 않는 역 입니다.");
    return false;
  }

  isSameStationName(departure, arrival) {
    if (departure !== arrival) {
      return true;
    }

    alert("같은 이름");
    return false;
  }

  isConnection(result) {
    if (result !== undefined) {
      return true;
    }

    window.alert("연결되어 있지 않습니다.");
    return false;
  }
}
