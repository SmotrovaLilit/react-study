import React from 'react'

function Article(props) {
    const {article} = props
    return (
        <div>
            <h2>{article.title}</h2>
            <section>{article.text}</section>
            <div>{(new Date(article.date).toDateString())}</div>
        </div>
    )
}


export default Article;