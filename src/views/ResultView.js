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
    this.resultReset();
    this.el.append(this.resultRender(result_info));
  }

  resultReset() {
    const removeElement = document.querySelector("#result__div");

    if (removeElement !== null) {
      removeElement.remove();
    }
  }

  resultRender(result_info) {
    const resultDiv = document.createElement("div");
    resultDiv.setAttribute("id", "result__div");
    resultDiv.innerHTML = this.resultHTML(result_info);
    return resultDiv;
  }

  resultHTML(result_info) {
    return `
        <h2>📃 결과 </h2>
        <h3>${result_info.option}</h3>
        ${this.tableHTML(result_info)}
    `;
  }

  tableHTML(result_info) {
    return `
    <table>
        <thead>
            <th>총 거리</th>
            <th>총 소요 시간</th>
        </thead>
        <tbody>
            <tr>
                <td>${result_info.totalDistance}km</td>
                <td>${result_info.totalTime}분</td>
            </tr>
            <tr>
                <td colspan="2">${result_info.result}</td>
            </tr>
        </tbody>
    </table>
      `;
  }
}
