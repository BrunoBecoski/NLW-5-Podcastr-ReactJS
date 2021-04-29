import { useState } from 'react';

import '../styles/global.scss';

import { Header } from '../components/Header';
import { Player } from '../components/Player';
import { PlayerContextProvider } from '../contexts/PlayerContext';

import styles from '../styles/app.module.scss';

function MyApp({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  return (
    <PlayerContextProvider>
      <div className={styles.wrapper}>
        <main>
          <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <Component isDarkMode={isDarkMode} {...pageProps} />
        </main>
        <Player />
      </div> 
    </PlayerContextProvider>
  )
}

export default MyApp
