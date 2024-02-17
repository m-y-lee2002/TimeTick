import { useEffect, useState } from "react";
import Button from './Button';
import './CSS_Styles/Body.css';

const Body=()=>{
    const[hours,setHours] = useState('00');
    const[minutes,setMinutes] = useState('00');
    const[seconds,setSeconds] = useState('00');
    const[decisecond,setDecisecond] = useState('0');
    const[centisecond,setCentisecond] = useState('0');
    const[buttonStatus, setButtonStatus] = useState('Start');
    const[currentTime,setCurrentTime] = useState(0);
    const[intervalID, setIntervalID] = useState(null);
    const[intervalID2, setIntervalID2] = useState(null);
    const[currentTime2,setCurrentTime2] = useState(0);

    const incrementingValue=()=>{
        setCurrentTime((prevTime) =>prevTime+1);
    }
    const incrementingValue2=()=>{
        setCurrentTime2((prevTime) =>prevTime+1);
    }

    useEffect(() => {
        if(buttonStatus ==='Start'){
            clearInterval(intervalID);
        }else{
            const id = setInterval(()=>{
                incrementingValue();
            },1000);
            setIntervalID(id);
        }
        return () => {
            clearInterval(intervalID);
        };
    }, [buttonStatus]);

    useEffect(() => {
        if(buttonStatus ==='Start'){
            clearInterval(intervalID2);
        }else{
            const id = setInterval(()=>{
                incrementingValue2();
            },1);
            setIntervalID2(id);
        }
        return () => {
            clearInterval(intervalID2);
        };
    }, [buttonStatus]);


    const startButtonHandler=()=>{
        if(buttonStatus ==='Start'){
            setButtonStatus('Stop');
        }else{
            setButtonStatus('Start');
        }
    };

    const resetButtonHandler = ()=>{
        setCurrentTime(0);
        clearInterval(intervalID);
        setCurrentTime2(0);
        clearInterval(intervalID2);
        setButtonStatus('Start');
    }

    const calculate_Time=(num)=>{
        const h = Math.floor(num/3600);
        num = num - (h*3600);
        const m = Math.floor(num/60);
        num = num -(m*60);
        const s = num;
        if(Math.floor(h/10) === 0){
            setHours(()=>'0'+h);
        }else{
            setHours(()=>h);
        }
        if(Math.floor(m/10) === 0){
            setMinutes(()=>'0'+m);             
        }else{
            setMinutes(()=>m);           
        }
        if(Math.floor(s/10) === 0){
            setSeconds(()=>'0'+s); 
        }else{

            setSeconds(()=>s); 
        }
    }
    const calculate_Time2=(num)=>{

        if(num === 1000){
            setDecisecond(()=>(0));
            setCentisecond(()=>(0));
            setCurrentTime2(()=>(0));
        }else{
            num = num - (Math.floor(num/100)*100);
            const deci = Math.floor(num/10);
            const centi = num - (deci*10);
            setDecisecond(()=>(deci));
            setCentisecond(()=>(centi));
        }

    }
    useEffect(() => {
        calculate_Time(currentTime);
        return () => {
            
        };
    }, [currentTime]);

    useEffect(() => {
        calculate_Time2(currentTime2);
        return () => {
            
        };
    }, [currentTime2]);
    return(
        <div className="body">
            <p><span className="numberStyling">{hours}:{minutes}:{seconds}.{decisecond}</span>{centisecond}</p>
            <div className="buttonOptions">
                <Button onClick={startButtonHandler} className='startStopButton'>{buttonStatus}</Button>
                <Button onClick={resetButtonHandler} className='resetButton'>Reset</Button>
            </div>
        </div>
        
    );
}
export default Body;
