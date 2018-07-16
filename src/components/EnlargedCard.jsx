import React from 'react';
import { connect } from 'react-redux';
import { hideArticle, deleteArticle, changeMode } from '../reducer/actions';
import '../styles/enlarged-card.css';

class EnlargedCard extends React.Component {
  renderEditMode(article) {
    return (
      <section 
          className={`card enlarged`}
          onClick={(e) => e.stopPropagation()}
        >
        <section className='card-header'>
          <input type='text' defaultValue={article.title} />
          <button onClick={() => this.props.saveArticle(article.id)}>
            <i className="fas fa-save" />
          </button>
          <button onClick={() => this.props.changeMode()}>
            <i className="fas fa-edit" />
          </button>
        </section>
        <input type='text' defaultValue={article.author} />
        <textarea defaultValue={article.content} />
        <br />
        <hr />
        <br />
        <h3>
          {article.published ?
          'Actualmente publicado'
          : 'Pendiente de publicarse'}
        </h3>
        <input type='text' defaultValue={article.tags.join('; ')} />
      </section>
    );
  }

  renderReadMode(article) {
    return (
      <section 
          className={`card enlarged`}
          onClick={(e) => e.stopPropagation()}
        >
        <section className='card-header'>
          <h1>{article.title}</h1>
          <button onClick={() => this.props.deleteArticle(article.id)}>
            <i className="fas fa-trash-alt" />
          </button>
          <button onClick={() => this.props.changeMode()}>
            <i className="fas fa-edit" />
          </button>
        </section>
        <h2>{article.author}</h2>
        <p>{article.content}</p>
        <br />
        <hr />
        <br />
        <h3>
          {article.published ?
          'Actualmente publicado'
          : 'Pendiente de publicarse'}
        </h3>
        <p className='tags'>TAGS: {article.tags.join('; ')}</p>
      </section>
    );
  }

  render() {
    const { article, editMode } = this.props;
    return (
      <section 
        className='enlarged-card-background'
        onClick={this.props.hide}
      >
        {editMode ? this.renderEditMode(article)
        : this.renderReadMode(article)}
      </section>
    );
  }
}

const mapStateToProps = store => {
  return {
    editMode: store.editMode,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    hide: () => dispatch(hideArticle()),
    deleteArticle: id => dispatch(deleteArticle(id)),
    changeMode: () => dispatch(changeMode()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EnlargedCard);