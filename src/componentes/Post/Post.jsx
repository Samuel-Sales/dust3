import styles from './Post.module.css';

export function Post({ post }) {
    return (
        <div className={styles.post}>
            <img className={styles.capa} src={`/assets/postagens/${post.id}/capa.jpg`} alt="Imagem de capa do post" />
            <h2 className={styles.titulo}>{post.titulo}</h2>
            <button className={styles.botaoLer}>Ler</button>
        </div>
    )
}