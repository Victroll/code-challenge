import React, { Component } from 'react';
import { connect } from 'react-redux';
import request from './tools/request';
import { ARTICLES_QUERY } from './tools/queries';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './containers/Body';
import { setArticles } from './reducer/actions';

class App extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  // lifecycle
  componentWillMount() {
    request(ARTICLES_QUERY).then(response => {
      this.props.setArticles(response.data.articles);
    });
  }

  // Renders
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setArticles: articles => dispatch(setArticles(articles)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(App);
