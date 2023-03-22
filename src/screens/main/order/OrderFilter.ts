import { PermissionsAndroid } from "react-native/Libraries/PermissionsAndroid/PermissionsAndroid";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

//날짜 포맷, 형식 변환
export const dateFilter = (val: string, param?: any) => {
  if (param.date === null) { return ''; }
  else {
    const fullDate = param.date.toString().replace('T', ' ');
    const dayStr = new Date(param.date);
    const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];
    const week = WEEKDAY[dayStr.getDay()];
    const year = fullDate.slice(2, 4);
    const month = fullDate.slice(5, 7);
    const day = fullDate.slice(8, 10);
    const time = fullDate.slice(11, 16);
    if (val === 'storeTime') {
      const today = new Date().getTime();
      const compDay = new Date(param.date).getTime();
      let result: string | number = Math.floor((+compDay - +today) / 1000 / 60 / 60);
      if (result >= 0) {
        let data = (+compDay - +today) / 1000 / 60;
        //한시간 이상
        if (result >= 1) {
          let hh = data / 60;
          let mm = data % 60;
          result = `${Math.floor(hh)}시간 ${Math.floor(mm)}분 후`;
        } else {
          result = Math.floor(data) + '분 후';
        }
        const timeSetParam = Math.floor(data)
        return timeSetParam;
      } else {
        result = 0
      }
      return result;
    } else if (val === 'pickUpAt') {
      return `픽업시간 ${time}`
    } else if (val === 'orderAt') {
      return `${year}.${month}.${day}(${week}) ${time} 주문`;
    } else if (val === 'doneAt') {
      return `${year}.${month}.${day}(${week}) ${time} 완료`;
    } else {
      return param;
    }
  }
};

