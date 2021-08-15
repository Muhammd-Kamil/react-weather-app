import React,{useState , useEffect} from 'react'
import "./style.css"
import WeatherCard from './WeatherCard';

const Wheather = () => {
 
    const [searchValue, setSearchValue] = useState('faizabad');
    const [tempInfo, setTempInfo] = useState({})
  

    const getWeatherInfo = async () => {
try{

    let url =(`https://api.openweathermap.org/data/2.5/weather?q=
    ${searchValue}&units=metric&appid=9bc83e28320fef8287877367c8cfde39`);

    let res = await fetch(url);
    let data = await res.json();

    const {temp,humidity,pressure} = data.main;

    const{ country,sunset } = data.sys
    const{ speed } = data.wind
    const{ main: weatherMood} = data.weather[0]
    const{ name } = data

    const myNewWatherInfo = {
        temp,
        humidity,
        pressure,
        country,
        sunset,
        speed,
        weatherMood,
        name
    }
    setTempInfo(myNewWatherInfo);

    console.log(temp)
    console.log(humidity)
    console.log(pressure)
    console.log(country)
    console.log(sunset)
    console.log(speed)
    console.log(weatherMood)
    console.log(name)
    // console.log(data)


}catch(error){
    console.log(error);
}



    // console.log(url)

    }
    
    useEffect(() => {getWeatherInfo();}, []);

    return (
        <>
     <div className="main-div">
         <div className="search">
             <input type="search" placeholder="search" className="searchfor" value={searchValue}
              onChange={(e)=>{
                setSearchValue(e.target.value)
              }}/>
             <button onClick={getWeatherInfo}>Search</button>
         </div>
         
     </div>   
     <WeatherCard tempInfo={tempInfo}/>
     </>   
    )
}
export default Wheather;