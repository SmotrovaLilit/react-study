import React, {Component} from 'react'


class Article extends Component {
    state = {
        isOpen: true
    };
    render() {
        const {article} = this.props;
        return (
            <div className="card mx-auto" style={{width:'50%'}}>
                <div className="card-header">
                    <h2>
                        {article.title}
                        <button className="btn btn-primary btn-lg float-right" onClick={this.handleClick}>
                            {this.state.isOpen ? 'close' : 'open'}
                        </button>
                    </h2>
                </div>
                <div className="card-body">
                    <div className="card-subtitle">{(new Date(article.date).toDateString())}</div>
                    <section className="card-text">{this.state.isOpen && article.text}</section>
                </div>
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