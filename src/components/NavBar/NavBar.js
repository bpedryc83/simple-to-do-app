import styles from './NavBar.module.scss';
import Container from '../Container/Container';
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => <nav className={styles.main_nav}>
    <Container>
      <div className={styles.nav_container}>
        <div className={styles.icon_and_title}>
          <Link to="/" className={styles.vertical_align}>
            <FontAwesomeIcon icon={faListCheck} />
            <span className={styles.app_name}>Checker</span>
          </Link>
        </div>
        <div className={styles.links}>
          <NavLink to="/" className={({ isActive }) => isActive ? styles.linkActive : undefined}>Home</NavLink>
          <NavLink to="/favorite" className={({ isActive }) => isActive ? styles.linkActive : undefined}>Favorite</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? styles.linkActive : undefined}>About</NavLink>
        </div>
      </div>
    </Container>
  </nav> 

export default NavBar;