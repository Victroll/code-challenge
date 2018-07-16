import React from 'react';
import '../styles/new-article.css';
import { connect } from 'react-redux';
import { writeNewArticle } from '../reducer/actions';

class NewArticle extends React.Component {
  constructor() {
    super();

    this.state = {
      animate: ''
    };
  }

  render() {
    return (
      <section
        className='new-article'
        onMouseEnter={() => this.setState({ ...this.state, animate: 'animate' })}
        onMouseLeave={() => this.setState({ ...this.state, animate: ''})}
      >
        <button
          className={ this.state.animate }
          onClick={ () => this.props.writeNewArticle() }
        >
          <i className='fas fa-plus' />
        </button>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    writeNewArticle: () => dispatch(writeNewArticle()),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewArticle);