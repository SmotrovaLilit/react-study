import React, {Component} from 'react'


class Article extends Component {
    state = {
        isOpen: true
    };

    render() {
        const {article} = this.props;

        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={this.handleClick}>
                        { this.state.isOpen ? 'close' : 'open'}
                    </button>
                </h2>
                <section>{this.state.isOpen && article.text}</section>
                <div>{(new Date(article.date).toDateString())}</div>
            </div>
        );
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

}

export default Article;