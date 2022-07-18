export default function User(props) {
    return (
        <div className="usuario">
            <img src={props.userimg} alt={props.userimgalt}/>
            <div className="texto">
                <strong>{props.userprofile}</strong>
                {props.username}
            </div>
        </div>
    );
}
