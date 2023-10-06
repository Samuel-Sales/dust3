import styles from './Partida.module.css';

export function Partida({ partida }) {
    return (
        <div className={styles.timesContainer}>
            {/* <div className={styles.timesData}>
                <p>{partida.horario}</p>
                <p>{partida.dia}</p>
            </div> */}
            <div className={styles.times}>
                <img src={`/assets/partidas/${partida.id}/logo.png`} alt={partida.nomeDoTime} />
                <h3>{partida.nomeDoTime}</h3>
            </div>
        </div>
    )
}