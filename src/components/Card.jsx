import React from 'react';
import { connect } from 'react-redux';
import '../styles/card.css';

class Card extends React.Component {
  constructor() {
    super();

    this.state = {
      extraClass: '',
      enlarged: false,
    };
  }

  render() {
    const enlarged = this.state.enlarged;

    return (
      enlarged ?
        <section 
          className='enlarged-card-background'
          onClick={() => this.setState({ ...this.state, enlarged: false })}>
          <section className={`card enlarged`}>
            <h1>{this.props.article.title}</h1>
            <h2>{this.props.article.author}</h2>
            <p>{this.props.article.excerpt}</p>
          </section>
        </section>
        :
        <section 
          className={`card ${this.state.extraClass}`} 
          onMouseEnter={() => this.setState({ ...this.state, extraClass: 'with-shadow' })}
          onMouseLeave={() => this.setState({ ...this.state, extraClass: ''})}
          onClick={() => this.setState({ ...this.state, extraClass: '', enlarged: true })} >
          <h1>{this.props.article.title}</h1>
          <h2>{this.props.article.author}</h2>
          <p>{this.props.article.excerpt}</p>
        </section>
    );
  }
}

const mapStateToProps = (store, props) => {
  return {
    article: store.articles[props.id],
  };
};

export default connect(
  mapStateToProps,
)(Card);