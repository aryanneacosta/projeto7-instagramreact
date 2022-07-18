import Posts from "./Posts";
import Stories from "./Stories";
import Sugestions from "./Sugestions";
import User from "./User";

export default function Corpo() {
    return (
        <div className="corpo">
            <div className="esquerda">
                <Stories />
                <Posts />
                
            </div>

            <div className="sidebar">
                <User 
                    userimg={"assets/img/catanacomics.svg"}
                    userimgalt={"catanacomics"}
                    userprofile={"catanacomics"}
                    username={"Catana"}
                />

                <Sugestions />

                <div className="links">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
                </div>

                <div className="copyright">
                    © 2021 INSTAGRAM DO FACEBOOK
                </div>
            </div>
        </div>
    );
}

