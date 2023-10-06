import { Link, useLocation } from 'react-router-dom';
import styles from './Menu.module.css';
import { MenuLink } from '../MenuLink/MenuLink';

export function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/">
                    Inicio
                </MenuLink> 
                <MenuLink to="/sobremim"> 
                    Equipes
                </MenuLink>
            </nav>
        </header>
    )
}