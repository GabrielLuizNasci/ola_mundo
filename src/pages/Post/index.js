import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "components/PostModelo";
import ReactMarkdown from "react-markdown";
import './Post.css';
import styles from './Post.module.css';
import NotFound from "pages/NotFound";
import PaginaPadrao from "components/PaginaPadrao";
import PostCard from "components/PostCard";

export default function Post() {
    const parametros = useParams();

    const post_pag = posts.find((post_pag) => {
        return post_pag.id === Number(parametros.id);
    })

    if(!post_pag) {
        return (
            <NotFound />
        )
    }

    const postsRecomendados = posts
        .filter((post_pag) => post_pag.id !== Number(parametros.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4);
    
    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={
                    <PostModelo
                        fotoCapa={`/assets/posts/${post_pag.id}/capa.png`}
                        titulo={post_pag.titulo}
                    >
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post_pag.texto}
                            </ReactMarkdown>
                        </div>

                        <h2 className={styles.tituloOutrosPosts}>
                            Outros posts que podem lhe interessar:
                        </h2>

                        <ul className={styles.postsRecomendados}>
                            {postsRecomendados.map((post_pag) => (
                                <li key={post_pag.id}>
                                    <PostCard post={post_pag} />
                                </li>
                            ))}
                        </ul>
                    </PostModelo>
                } />
            </Route>
        </Routes> 
    )
}