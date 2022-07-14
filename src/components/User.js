function User(props) {
    return (
        <div class="usuario">
            <img src={props.userimg} alt={props.userimgalt}/>
            <div class="texto">
                <strong>{props.userprofile}</strong>
                {props.username}
            </div>
        </div>
    );
}

export default User();