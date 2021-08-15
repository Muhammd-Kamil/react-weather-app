import React,{useEffect,useState} from 'react'

const WeatherCard = ({tempInfo}) => {
    const [weatherState, setWeatherState] = useState();
    const {
        temp,
        humidity,
        pressure,
        country,
        sunset,
        speed,
        weatherMood,
        name
    } = tempInfo;

    useEffect(() => {
        if(weatherMood){
          switch(weatherMood){
              case "Clouds" : setWeatherState("wi-day-cloudy");
              break;
              case "Haze" : setWeatherState("wi-fog");
              break;
              case "Clear" : setWeatherState("wi-day-sunny");
              break;
              case "Mist" : setWeatherState("wi-dust");
              break;
              case "Rainy" : setWeatherState("wi-day-rain");
              break;
              default: setWeatherState("wi-day-sunny");
              break;
          }
        }
    }, [weatherMood]);

    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;

    return (
        <>
            <div className="main">
          <div className="logo">
          <p>
                <i className={`wi ${weatherState}`}></i>
              </p>

          </div>
          <div className="info">
              <div className="deg"><p className="deg-h">{temp}&deg;</p></div>
    <div className="mood"><p className="mood-p">{weatherMood}</p><br/><p className="mood-p1">{name},{country}</p></div>
              <div className="date">{new Date().toLocaleString()}</div>

          </div>
          <div className="last">
          <div className="last-s">
              <p className={"wi wi-sunset"}></p></div>
              <div className="last-1">
              <p className="extra-info-leftside">
                  {timeStr} <br/>
                  Sunset
              </p>
              </div>
              <div className="last-s">
              <p className={"wi wi-humidity"}></p></div>
              <div className="last-1">
              <p className="extra-info-leftside">
                  {humidity} <br/>
                  humidity
              </p>
              </div>
              <div className="last-s">
              <p className={"wi wi-rain"}></p></div>
              <div className="last-1">
              <p className="extra-info-leftside">
                  {pressure} <br/>
                  Pressure
              </p>
              </div>
              <div className="last-s">
              <p className={"wi wi-strong-wind"}></p></div>
              <div className="last-1">
              <p className="extra-info-leftside">
                  {speed} <br/>
                  Speed
              </p>
              </div>
          </div>
          

          
          
         </div>
        </>
    )
}

export default WeatherCard
