import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import EnlargedCard from '../components/EnlargedCard';
import NewArticle from '../components/NewArticle';
import '../styles/body.css';

class Body extends React.Component {
  render() {
    const { showArticle, enlargedArticle } = this.props;
    return (
      <section className='body'>
        {this.props.articles.map(
            (_, i) => <Card key={`card-${i}`} id={i} />,
        )}
        {showArticle && <EnlargedCard article={enlargedArticle} />}
        <NewArticle />
      </section>
    );
  }
}

const mapStateToProps = store => {
  return {
    articles: store.articles,
    enlargedArticle: store.enlargedArticle,
    showArticle: store.showArticle,
  };
};

export default connect(
    mapStateToProps,
)(Body);