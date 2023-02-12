import Sugestao from "./Sugestao";
import perfisSugestoes from "./perfisSugestoes";

export default function Sugestoes (){
    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {perfisSugestoes.map((p) =>(
                <Sugestao key={p.nomePerfil} imgPerfil={p.imgPerfil} nomePerfil={p.nomePerfil} status={p.status}/>
            ))}
        </div>
    );
}