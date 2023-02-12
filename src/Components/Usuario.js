import { useState } from "react";

export default function Usuario (){
    const [nomeUsuario, setNomeUsuario] = useState("Catanacomics");
    const [imagemPerfil, setImagemPerfil] = useState("assets/img/catanacomics.svg");

    function mudaNomeUsuario (){
        const novoNome = prompt("Digite um nome de usuário:");
        if (!novoNome){
            return;
        } else {
            setNomeUsuario(novoNome);
        }
    }

    function mudaImagemPerfil (){
        const novaImagem = prompt("Digite o link da nova imagem do perfil:");
        if (!novaImagem){
            return;
        } else {
            setImagemPerfil(novaImagem);
        }
    }

    return (
        <div className="usuario">
            <img data-test="profile-image" src={imagemPerfil} alt="imagem de perfil" onClick={mudaImagemPerfil}/>
            <div className="texto">
                <span>
                <strong data-test="name">{nomeUsuario}</strong>
                <ion-icon data-test="edit-name" name="pencil" onClick={mudaNomeUsuario} ></ion-icon>
                </span>
            </div>
        </div>
    )
}