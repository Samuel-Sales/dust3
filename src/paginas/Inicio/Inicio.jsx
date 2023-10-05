import { Banner } from "../../componentes/Banner/Banner";
import styles from './Inicio.module.css';
import posts from '../../json/posts.json';
import { Post } from "../../componentes/Post/Post";

export function Inicio() {
    return (
            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Post post={post} />
                    </li>
                ))}
            </ul>
    )
}