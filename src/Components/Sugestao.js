export default function Sugestao (props){
    return (
    <div className="sugestao">
        <div className="usuario">
        <img src={props.imgPerfil} alt={props.nomePerfil}/>
        <div className="texto">
            <div className="nome">{props.nomePerfil}</div>
            <div className="razao">{props.status}</div>
        </div>
        </div>

        <div className="seguir">Seguir</div>
    </div>
    );
}