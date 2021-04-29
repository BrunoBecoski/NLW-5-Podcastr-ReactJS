import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './styles.module.scss';

type HeaderProps = {
  isDarkMode: boolean;
  setIsDarkMode: (asd: boolean) => void;
}

export function Header({ isDarkMode, setIsDarkMode }: HeaderProps) {
  const currentData = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
  });
    
  return (
    <header className={`${styles.headerContainer} ${isDarkMode ? styles.headerContainerDark : ''}`}>
      <img src="/logo.svg" alt="Podcastr" />

      <p>O melhor para você ouvir, sempre</p>

      <span>{currentData}</span>

      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        { isDarkMode 
          ? <img src="/sun.svg" />
          : <img src="/moon.svg" />
        }
      </button>
    </header>
  )
}
