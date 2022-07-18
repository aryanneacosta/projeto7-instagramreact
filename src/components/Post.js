import React from "react";

export default function Post(props) {
    const [clicked, setClicked] = React.useState(false);
    const [liked, setLiked] = React.useState("heart-outline");
    if (clicked === true) {
        setLiked("heart");
    } else {
        setLiked("heart-outline");
    }

    return (
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.userimg} alt={props.userimgalt} />
                    {props.username}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo" onClick={() => setClicked(true)}>
                <img src={props.img} alt={props.imgalt} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon
                            name={liked}
                            onClick={() => setClicked(!clicked)}
                        ></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.imgliked} alt={props.imglikedalt} />
                    <div className="texto">
                        Curtido por <strong>{props.userliked}</strong> e <strong>outras {props.thismany} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}
