import { PostModelo } from "../../componentes/PostModelo/PostModelo";
import fotoCapa from '../../assets/banner.jpg';
import styles from './SobreMim.module.css';
import partidas from '../../json/partidas.json';
import { Partida } from "../../componentes/Partida/Partida";

export function SobreMim() {
    return (
        <PostModelo fotoCapa={fotoCapa} titulo="Partidas de CS:GO">
            <h3 className={styles.subtitulo}>
                Hoje
            </h3>

            <div>
                <ul>
                    {partidas.map((partida) => (
                        <li key={partida.id}>
                            <Partida partida={partida} />
                        </li>
                    ))}
                </ul>
            </div>
        </PostModelo>
    )
}

{/* <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Post post={post} />
                    </li>
                ))} */}