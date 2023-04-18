import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
    console.log(posts);

    const postElements= posts.map((post) => {
        return<Article key={post.id}
        title={posts.title}
        date={posts.date}
        preview={post.preview}
        />
    }
    )
    return(
        <main>
            {postElements}
        </main>
    )

}

export default ArticleList;
