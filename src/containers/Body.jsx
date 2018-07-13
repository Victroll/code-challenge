import React from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card';
import '../styles/body.css';

class Body extends React.Component {
  render() {
    return (
      <section className='body'>
        {this.props.articles.map(
            (_, i) => <Card id={i} />,
        )}
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