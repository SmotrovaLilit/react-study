import React, {PureComponent} from 'react'


class Article extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: props.defaultOpened,
      count:0
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.defaultOpened !== nextProps.defaultOpened) {
      this.setState({
        isOpen: nextProps.defaultOpened
      })
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.state.isOpen !== nextState.isOpen
  // }

  componentWillUpdate() {
    console.log("component will update")
  }

  render() {
    const {article} = this.props;
    return (
      <div className="card mx-auto" style={{width: '50%'}}>
        <div className="card-header">
          <h2 onClick={this.incrementCount}>
            {article.title}
            <span>{ this.state.count }</span>
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

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

}

export default Article;