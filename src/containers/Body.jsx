import React from 'react';
import { connect } from 'react-redux';

class Body extends React.Component {
  render() {
    return (
      <section className='body'>
        <p>{JSON.stringify(this.props.articles, null, 2)}</p>
      </section>
    );
  }
}

const mapStateToProps = store => {
  return {
    articles: store.articles,
  };
};

export default connect(
    mapStateToProps,
)(Body);