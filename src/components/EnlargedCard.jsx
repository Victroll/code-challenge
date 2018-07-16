import React from 'react';
import { connect } from 'react-redux';
import { hideArticle, deleteArticle, changeMode, updateArticle } from '../reducer/actions';
import '../styles/enlarged-card.css';

class EnlargedCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.article.title,
      content: props.article.content,
      author: props.article.author,
      tags: props.article.tags.join('; '),
    };

    this.renderEditMode = this.renderEditMode.bind(this);
    this.renderReadMode = this.renderReadMode.bind(this);
    this.updateField = this.updateField.bind(this);
    this.updateArticle = this.updateArticle.bind(this);
  }

  updateField(value, field) {
    const newState = { ...this.state };
    newState[field] = value;
    this.setState(newState);
  }

  updateArticle() {
    this.props.updateArticle(this.props.article.id, {
      author: this.state.author,
      content: this.state.content,
      title: this.state.title,
      tags: this.state.tags.trim().split(";"),
    });
  }

  renderEditMode(article) {
    return (
      <section 
          className={`card enlarged`}
          onClick={(e) => e.stopPropagation()}
        >
        <section className='card-header'>
          <input type='text'
            defaultValue={article.title}
            onChange={e => this.updateField(e.target.value, 'title')}
          />
          <button onClick={() => this.updateArticle()}>
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
    updateArticle: (id, article) => dispatch(updateArticle(id, article)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EnlargedCard);