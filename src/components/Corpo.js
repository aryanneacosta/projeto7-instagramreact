import Posts from "./Posts";
import Stories from "./Stories";
import Sugestions from "./Sugestions";
import User from "./User";

export default function Corpo() {
    return (
        <div class="corpo">
            <div class="esquerda">
                <Stories />
                <Posts />
                
            </div>

            <div class="sidebar">
                <User 
                    userimg={"assets/img/catanacomics.svg"}
                    userimgalt={"catanacomics"}
                    userprofile={"catanacomics"}
                    username={"Catana"}
                />

                <Sugestions />

                <div class="links">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
                </div>

                <div class="copyright">
                    © 2021 INSTAGRAM DO FACEBOOK
                </div>
            </div>
        </div>
    );
}

