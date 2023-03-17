import React, { useEffect, useState, PropsWithChildren } from "react";
import { Text } from "react-native";
import { useTiemStore } from '../../../store';

const CountDownPage = () => {
    const timeStore = useTiemStore();
    const { minutes } = useTiemStore();
    const [ minute , setMinute ] = useState( minutes );
    useEffect ( () => {
        const conutdown = setInterval(() =>{
            if((minutes) !== 0 ){
                setMinute( (minutes) - 1 )
            } else {
                clearInterval(conutdown);
            }
        },60000);
        if ( minute === 0 ) {
            timeStore.doEnd
        }else{
            timeStore.doTimer(minutes)
        }
    },[])
   
    // const userStore = useTiemStore();
    return (
        <Text>{minute}</Text>
    )

}

export default CountDownPage;