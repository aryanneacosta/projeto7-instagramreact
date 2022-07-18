import Story from "./Story";


export default function Stories() {
    const story = [{ img: "assets/img/9gag.svg", alt: "9gag", user: "9gag" },
    { img: "assets/img/meowed.svg", alt: "meowed", user: "meowed" },
    { img: "assets/img/barked.svg", alt: "barked", user: "barked" },
    { img: "assets/img/nathanwpylestrangeplanet.svg", alt: "nathanwpylestrangeplanet", user: "nathanwpylestrangeplanet" },
    { img: "assets/img/wawawicomics.svg", alt: "wawawicomics", user: "wawawicomics" },
    { img: "assets/img/respondeai.svg", alt: "respondeai", user: "respondeai" },
    { img: "assets/img/filomoderna.svg", alt: "filomoderna", user: "filomoderna" },
    { img: "assets/img/memeriagourmet.svg", alt: "memeriagourmet", user: "memeriagourmet" },
    ];

    return (
        <div className="stories">
            {
                story.map(story =>
                    <Story
                        img={story.img}
                        alt={story.alt}
                        user={story.user}
                        key={story.user}
                    />)
            }

            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}
