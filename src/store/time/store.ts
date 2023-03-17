export type Store = {
  minutes: number;
  doTimer: (minutes:number) => void; //state의 시간 변경
  doEnd: (minutes:number) => Promise<void>; //시간이 0분에 도달 시
};
