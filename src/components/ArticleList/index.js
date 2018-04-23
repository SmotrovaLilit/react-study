import React from 'react';
import Article from '../Article'
import './style.css'

export default function ArticleList({articles}) {
    const articleElements = articles.map((article, i) =>
        <li className="article-list__li" key={article.id}>
          <Article article={article} defaultOpened={i === 0} />
        </li>
    );

    return (
     <ul>
         {articleElements}
     </ul>
    );
}
