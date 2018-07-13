import React from 'react';
import { connect } from 'react-redux';
import '../styles/card.css';

class Card extends React.Component {
  render() {
    return (
      <section className='card'>
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