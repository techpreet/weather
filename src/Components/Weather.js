import React, { useState,useEffect } from 'react'
import "./style.css";
import Weathercard from './Weathercard';


const Weather = () => {
    const [searchItem,setSearchItem] = useState("patiala");
    const[weatherInfo,setWetherInfo]=useState({})
    const getweatherInfo=async()=>
    {
        try
        {
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${searchItem}&units=metric&appid=d1e29091d7b5b602cf7790d6d2a95a77`
            const res=await fetch(url);
            const data=await res.json();

            const{temp,humidity,pressure}=data.main;
            const{main:weathermood}=data.weather[0]
            const{sunset,country}=data.sys
            const{speed}=data.wind
            const{name}=data
            const myweatherinfo={temp,name,weathermood,sunset,country,speed,humidity,pressure};
            setWetherInfo(myweatherinfo);

        }
        catch(error)
        {
            console.log(error);
        }
    }
    useEffect(() => {
       getweatherInfo(); 
       // eslint-disable-next-line
      },[ ]);
    return (
        <>
        <div className="wrap">
            <div className="search">
                <input type="search" className="searchTerm" value={searchItem} onChange={(e)=>setSearchItem(e.target.value)}></input>
                <button className="searchButton" onClick={()=>getweatherInfo()} >Search</button>
            </div>
            
        </div>
        <Weathercard weatherInfo={weatherInfo}/>
        
            
        </>
    )
}

export default Weather
// eslint-disable-next-line