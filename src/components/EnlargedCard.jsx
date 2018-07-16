import React from 'react';
import { connect } from 'react-redux';
import { hideArticle, deleteArticle } from '../reducer/actions';
import '../styles/enlarged-card.css';

class EnlargedCard extends React.Component {
  render() {
    return (
      <section 
        className='enlarged-card-background'
        onClick={this.props.hide}
      >
        <section 
          className={`card enlarged`}
          onClick={(e) => e.stopPropagation()}
        >
          <section className='card-header'>
            <h1>{this.props.article.title}</h1>
            <button onClick={() => this.props.deleteArticle(this.props.article.id)}>
              <i className="fas fa-trash-alt" />
            </button>
            <button>
              <i className="fas fa-edit" />
            </button>
          </section>
          <h2>{this.props.article.author}</h2>
          <p>{this.props.article.content}</p>
          <br />
          <hr />
          <br />
          <h3>
            {this.props.article.published ?
            'Actualmente publicado'
            : 'Pendiente de publicarse'}
          </h3>
        </section>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    hide: () => dispatch(hideArticle()),
    deleteArticle: id => dispatch(deleteArticle(id)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(EnlargedCard);