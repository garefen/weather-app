import React from "react"
import styles from '@/styles/Weather.module.css'
import Image from 'next/image'
import GPT from "./GPT";

export default function Weather(data) {
  const weather = data.data;

  return (
    <div className={styles.weather}>
      <div className={styles.weather__display}>
        <div className={styles.weather__main}>
          <Image
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt=''
            width='100'
            height='100'
          />
          <p className={styles.weather__main_text}>
            {weather.weather[0].main}
          </p>
        </div>
        <p className={styles.weather__temperature}>
          {weather.main.temp.toFixed(0)}°
        </p>
      </div>

      <div className={styles.weather__info}>
        <p className={styles.weather__city}>
          Clima em {weather.name}
        </p>
        <div className={styles.weather_addons}>
          <div className={styles.weather__adddons_item}>
            <p className={styles.weather__adddons_item_title}>
              {weather.main.feels_like.toFixed(0)}°
            </p>
            <p className={styles.weather__adddons_item_copy}>
              Sensação
            </p>
          </div>
          <div>
            <p className={styles.weather__adddons_item_title}>
              {weather.main.temp_min.toFixed(0)}
            </p>
            <p className={styles.weather__adddons_item_copy}>
              Min
            </p>
          </div>
          <div>
            <p className={styles.weather__adddons_item_title}>
              {weather.main.temp_max.toFixed(0)}
            </p>
            <p className={styles.weather__adddons_item_copy}>
              Max
            </p>
          </div>
        </div>
      </div>
      <GPT city={weather.name} temp={`${weather.main.temp.toFixed(0)}°`} />
    </div>
  )
}
