import { Link } from 'react-router-dom';
import styles from './PostCard.module.css';

export default function Post({ post }) {
    return (
        <Link to={`/posts/${post.id}`}>
            <div className={styles.post}>
                <img className={styles.capa} src={`/assets/postagens/${post.id}/capa.jpg`} alt="Imagem de capa do post" />
                <h2 className={styles.titulo}>{post.titulo}</h2>
                <button className={styles.botaoLer}>Ler</button>
            </div>
        </Link>
    )
}