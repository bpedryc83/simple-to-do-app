import styles from './NavBar.module.scss';
import Container from '../Container/Container';
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => <nav className={styles.main_nav}>
    <Container>
      <div className={styles.nav_container}>
        <div className={styles.icon}>
          <a href="/">
            <FontAwesomeIcon icon={faListCheck} />
          </a>
        </div>
        <div className={styles.links}>
          <a href="/">Home</a>
          <a href="/favorite">Favorite</a>
          <a href="/about">About</a>
        </div>
      </div>
    </Container>
  </nav> 

export default NavBar;