export const dateFilter = (val: string, param?: any) => {
    if (param.date === null) {
      return '없음';
    } else if (param.date !== null) {
      let fullDate = param.date.toString().replace('T', ' ');
      let dayStr = new Date(param.date);
      const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];
      let week = WEEKDAY[dayStr.getDay()];
      let year = fullDate.slice(2, 4);
      let month = fullDate.slice(5, 7);
      let day = fullDate.slice(8, 10);
      let time = fullDate.slice(11, 16);
      if (val === 'pickUpAt') {
        let today = new Date().getTime();
        let compDay = new Date(param.date).getTime();

        let result: any = Math.floor((+compDay - +today) / 1000 / 60 / 60);

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
          const timeSetParam = {
            t_minutes: Math.floor(data),
          };
          // dispatch(doTimer(timeSetParam));
        } else {
          // dispatch(doTimer({t_minutes: 0}));
          result = '시간만료';
        }
        return result;
      } else if (val === 'orderAt') {
        return `${year}.${month}.${day}(${week}) ${time} 주문`;
      } else if (val === 'doneAt') {
        return `${year}.${month}.${day}(${week}) ${time} 완료`;
      } else {
        return param;
      }
    }
  };
