import React from "react";


export default function Post(props) {
    const [clicked, setClicked] = React.useState(false);
    const [liked, setLicked] = React.useState("heart-outline");
    if (clicked === true) {
        setLicked("heart");
    } else {
        setLicked("heart-outline");
    }

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.userimg} alt={props.userimgalt} />
                    {props.username}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo" onClick={() => setClicked(!clicked)}>
                <img src={props.img} alt={props.imgalt} />
            </div>

            <div class="fundo">
                <div class="acoes">
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

                <div class="curtidas">
                    <img src={props.imgliked} alt={props.imglikedalt} />
                    <div class="texto">
                        Curtido por <strong>{props.userliked}</strong> e <strong>outras {props.thismany} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}
