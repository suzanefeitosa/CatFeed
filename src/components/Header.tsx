import styles from './Header.module.css'

import catLogo from '/src/assets/cat-simbol.svg';

export function Header(){
    return(
    <header className={styles.header}>
    <img src={catLogo} alt="Logo CatFeed" />
    </header>
    )
}