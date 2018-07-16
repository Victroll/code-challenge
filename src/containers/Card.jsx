import React from 'react';
import { connect } from 'react-redux';
import { fetchArticle } from '../reducer/actions';
import '../styles/card.css';

class Card extends React.Component {
  constructor() {
    super();

    this.state = {
      extraClass: '',
    };
  }

  render() {
    return (
      <section 
        className={`card ${this.state.extraClass}`} 
        onMouseEnter={() => this.setState({ ...this.state, extraClass: 'with-shadow' })}
        onMouseLeave={() => this.setState({ ...this.state, extraClass: ''})}
        onClick={() => this.props.fetchArticle(this.props.article.id)} 
      >
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

const mapDispatchToProps = dispatch => {
  return {
    fetchArticle: id => dispatch(fetchArticle(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Card);