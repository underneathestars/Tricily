import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Cardlist from '../components/CardList'
import Card from '../components/Card'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [cardData, setCardData] = useState([]);
  const [mainCard, setMainCard] = useState([]);

  const Map = dynamic(
    () => import('../components/Map'),
    {
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  );

  function setCoords(lat, long) {
    setLat(lat);
    setLong(long)
  }

  function getData(data) {
    setCardData(data);
  }

  function getMainCard(data){
    setMainCard(data)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Tricily</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Map lat={lat} long={long}></Map>
      </main>

      <section>
      <Cardlist cardData={cardData} />
      </section>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="https://img.icons8.com/clouds/100/000000/google-earth.png" alt="Tricily Logo" width={30} height={30} />
          </span>
        </a>
      </footer>
    </div>
  )
}
