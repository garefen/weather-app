import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import {useState} from 'react';
import {BsSearch} from 'react-icons/bs';
import {getWeatherByCity} from '@/services/weather';
import Weather from '@/components/Weather';
import Loader from '@/components/Loader';

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    getWeatherByCity(city).then((data) => setWeather(data));
    setCity('');
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    setWeather({})
  }

  return (
    <>
      <Head>
        <title>ClimaTweetAI</title>
        <meta name="description" content="Previsão do tempo com AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {loading && (
          <Loader></Loader>
        )}
        <div className={styles.backgroundImage}></div>
        <div className={styles.inputWrapper}>
          <form className={styles.form}>
            <input className={styles.input} type="text" value={city} placeholder='Busque uma cidade' onChange={(e) => setCity(e.target.value)}/>
            <button className={styles.submit} onClick={handleFormSubmit}>
              <BsSearch/>
            </button>
          </form>
        </div>
        {weather && weather.main && <Weather data={weather}/>}
      </main>
    </>
  )
}
