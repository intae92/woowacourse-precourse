export const stations = [
  "교대",
  "강남",
  "역삼",
  "남부터미널",
  "양재",
  "매봉",
  "양재시민의숲",
  "상암",
  "홍대",
  "홍대입구",
];

export const lines = [
  {
    name: "2호선",
    line_stations: ["교대", "강남", "역삼"],
  },
  {
    name: "3호선",
    line_stations: ["교대", "남부터미널", "양재", "매봉"],
  },
  {
    name: "신분당선",
    line_stations: ["강남", "양재", "양재시민의숲"],
  },
  {
    name: "연습",
    line_stations: ["상암", "홍대", "홍대입구"],
  },
];

export const sections = [
  {
    section_stations: ["상암", "홍대"],
    distance: 2,
    time: 2,
  },
  {
    section_stations: ["홍대", "홍대입구"],
    distance: 3,
    time: 1,
  },
  {
    section_stations: ["교대", "강남"],
    distance: 2,
    time: 3,
  },
  {
    section_stations: ["강남", "역삼"],
    distance: 2,
    time: 3,
  },
  {
    section_stations: ["교대", "남부터미널"],
    distance: 3,
    time: 2,
  },
  {
    section_stations: ["남부터미널", "양재"],
    distance: 6,
    time: 5,
  },
  {
    section_stations: ["양재", "매봉"],
    distance: 1,
    time: 1,
  },
  {
    section_stations: ["강남", "양재"],
    distance: 2,
    time: 8,
  },
  {
    section_stations: ["양재", "양재시민의숲"],
    distance: 10,
    time: 3,
  },
];
