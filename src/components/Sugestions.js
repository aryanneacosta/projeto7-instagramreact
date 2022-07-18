import Sugestion from "./Sugestion";

export default function Sugestions() {
    const sugestion = [{ img:"assets/img/bad.vibes.memes.svg", imgalt:"bad.vibes.memes", username:"bad.vibes.memes", reason:"Segue você" },
    { img:"assets/img/chibirdart.svg", imgalt:"chibirdart", username:"chibirdart", reason:"Segue você" },
    { img:"assets/img/razoesparaacreditar.svg", imgalt:"razoesparaacreditar", username:"razoesparaacreditar", reason:"Novo no Instagram" },
    { img:"assets/img/adorable_animals.svg", imgalt:"adorable_animals", username:"adorable_animals", reason:"Segue você" },
    { img:"assets/img/smallcutecats.svg", imgalt:"smallcutecats", username:"smallcutecats", reason:"Segue você" },]

    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {
                sugestion.map(sugestion =>
                    <Sugestion
                        img={sugestion.img}
                        imgalt={sugestion.imgalt}
                        username={sugestion.username}
                        reason={sugestion.reason}
                        key={sugestion.username}
                    />)
            }

        </div>
    );
}
