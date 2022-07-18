export default function Sugestion(props) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={props.img} alt={props.imgalt}/>
                <div className="texto">
                    <div className="nome">{props.username}</div>
                    <div className="razao">{props.reason}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    );
}
