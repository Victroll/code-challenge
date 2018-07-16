import React from 'react';
import { connect } from 'react-redux';
import { hideArticle } from '../reducer/actions';

class EnlargedCard extends React.Component {
  render() {
    return (
      <section 
        className='enlarged-card-background'
        onClick={this.props.hide}
      >
        <section className={`card enlarged`}>
          <h1>{this.props.article.title}</h1>
          <h2>{this.props.article.author}</h2>
          <p>{this.props.article.content}</p>
        </section>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    hide: () => dispatch(hideArticle()),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(EnlargedCard);