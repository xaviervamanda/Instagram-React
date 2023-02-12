import infosPosts from "./infosPosts";
import Post from "./Post";

export default function Posts (){
    return (
        <div className="posts">
            {infosPosts.map((p) => (
                <Post 
                key = {p.nomeUsuario} 
                imgUsuario={p.imgUsuario} 
                nomeUsuario={p.nomeUsuario} 
                fotoPost={p.fotoPost} 
                altPost={p.altPost}
                imgQuemCurtiu={p.imgQuemCurtiu} 
                curtidasPost={p.curtidasPost}
                outrasCurtidasPost={p.outrasCurtidasPost}
                />
            ))};
        </div>
    );
}