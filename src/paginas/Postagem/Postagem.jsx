import { useParams } from "react-router-dom";
import posts from '../../json/posts.json';
import { PostModelo } from "../../componentes/PostModelo/PostModelo";

export default function Postagem() {
    const parametros = useParams();
    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    })

    if (!post) {
        return <h1>Post nao encontrado...</h1>
    }

    return (
        <PostModelo fotoCapa={`/assets/postagens/${post.id}/capa.jpg`} titulo={post.titulo}>
            {post.texto}
        </PostModelo>
    )
}