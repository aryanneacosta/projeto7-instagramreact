import Post from "./Post";

export default function Posts() {
    const post = [{
        userimg: "assets/img/meowed.svg",
        userimgalt: "meowed",
        username: "meowed",
        img: "assets/img/gato-telefone.svg",
        imgalt: "meowed",
        imgliked: "assets/img/respondeai.svg",
        imglikedalt: "respondeai",
        userliked: "respondeai",
        thismany: "101.523"
    },
    {
        userimg: "assets/img/barked.svg",
        username: "barked",
        usernamealt: "barked",
        img: "assets/img/dog.svg",
        imgalt: "barked",
        imgliked: "assets/img/adorable_animals.svg",
        imglikedalt: "adorable_animals",
        userliked: "adorable_animals",
        thismany: "99.159"
    }
    ]

    return (
        <div className="posts">
            {
                post.map(post =>
                    <Post
                        userimg={post.userimg}
                        userimgalt={post.userimgalt}
                        username={post.username}
                        img={post.img}
                        imgalt={post.imgalt}
                        imgliked={post.imgliked}
                        imglikedalt={post.imglikedalt}
                        userliked={post.userliked}
                        thismany={post.thismany}
                        key={post.username}
                    />)
            }

        </div>
    );
}
