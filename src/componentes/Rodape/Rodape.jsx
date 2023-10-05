import styles from './Rodape.module.css';

export function Rodape() {
    return (
        <footer className={styles.rodape}>
            <div>
                <h3>Desenvolvida por Samuel Sales</h3>
            </div>
            <div>
                <h5>Página feita para sem fins lucrativos e desenvolvida justamente para estudos, inspirada totalmente no site Dust2 Brasil</h5>
            </div>
        </footer>
    )
}