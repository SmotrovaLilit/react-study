import React, {Component} from 'react';
import Article from '../Article'
import './style.css'

export default class ArticleList extends Component {
  state = {
    openArticleID: null
  }

  render() {
    const {articles} = this.props
    const articleElements = articles.map((article, i) =>
      <li className="article-list__li" key={article.id}>
        <Article
          article={article}
          isOpen={article.id === this.state.openArticleID}
          onButtonClick={() => this.handleClick(article.id)}
        />
      </li>
    )
    return (
      <ul>
        {articleElements}
      </ul>
    );
  }

  handleClick = openArticleID  => {
    this.setState({
      openArticleID: this.state.openArticleID === openArticleID ? null : openArticleID
    })
  }
}
