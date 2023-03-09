export type Store = {
  minutes: 0;
  doTimer: () => void; //state의 시간 변경
  doEnd: () => void; //시간이 0분에 도달 시
};
