import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "components/PostModelo";
import ReactMarkdown from "react-markdown";
import './Post.css';
import NotFound from "pages/NotFound";
import PaginaPadrao from "components/PaginaPadrao";

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
                    </PostModelo>
                } />
            </Route>
        </Routes> 
    )
}