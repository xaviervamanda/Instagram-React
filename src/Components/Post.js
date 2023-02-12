import { useState } from "react";

export default function Post (props){

    const iconeVermelho = {
        color: '#e2725b'
    }

    const iconeBranco = {
        color: '#262626'
    }

    let numeroCurtidas = parseFloat(props.outrasCurtidasPost);
    const [numCurtidas, setNumCurtidas] = useState(numeroCurtidas);

    const [corIconeCurtida, setCorIconeCurtida] = useState(iconeBranco);
    const [iconeCurtida, setIconeCurtida] = useState("heart-outline");

    const [animacaoImg, setAnimacaoImg] = useState("escondido")

    function curtirPost (){
        if (iconeCurtida === "heart-outline"){
            setIconeCurtida("heart");
            setCorIconeCurtida(iconeVermelho);
            setNumCurtidas(numeroCurtidas+0.001)
        } else {
            setIconeCurtida("heart-outline");
            setCorIconeCurtida(iconeBranco);
            setNumCurtidas(numeroCurtidas+0.001-0.001)
        }
    }

    function curtirPostPelaImagem (){
        if (iconeCurtida === "heart-outline"){
            setIconeCurtida("heart");
            setCorIconeCurtida(iconeVermelho);
            setNumCurtidas(numeroCurtidas+0.001);
            setTimeout ((() => setAnimacaoImg("escondido")), 500);
            setAnimacaoImg("animacao");
            
        }   
    }

    const [iconeSalvarPost, setIconeSalvarPost] = useState("bookmark-outline");

    function salvaPost (){
        if (iconeSalvarPost === "bookmark-outline"){
            setIconeSalvarPost("bookmark");
        } else {
            setIconeSalvarPost("bookmark-outline");
        }
    }

    return (
        <div data-test="post" className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.imgUsuario} alt={props.nomeUsuario}/>
                    {props.nomeUsuario}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
                </div>

                <div className="conteudo">
                    <img data-test="post-image" onDoubleClick={curtirPostPelaImagem} src={props.fotoPost} alt={props.altPost}/>
                    <img className={animacaoImg} src="assets/img/coracao-brancoo.png" />
                </div>

                <div className="fundo">
                    <div className="acoes">
                        <div>
                        <ion-icon data-test="like-post" style={corIconeCurtida} name={iconeCurtida} onClick={curtirPost}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                        <ion-icon data-test="save-post" name={iconeSalvarPost} onClick={salvaPost}></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.imgQuemCurtiu} alt={props.curtidasPost}/>
                    <div data-test="likes-number" className="t
                    exto">
                    Curtido por <strong>{props.curtidasPost}</strong> e <strong>outras {numCurtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}