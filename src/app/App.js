import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './about/About';
// import SinglePostPage '.'
import Authors from './authors/Authors';


import { Switch, Route } from 'react-router-dom';
import SinglePostPage from './posts/postDetails/SinglePostPage';
import SingleAuthorPage from './authors/SingleAuthorPage';
import PostsPage from './posts/PostsPage';



class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/singlePostPage/:broj" component={SinglePostPage} />
          <Route path="/authors" component={Authors} />
          <Route path="/singleAuthorPage" component={SingleAuthorPage} />
          <Route exact path="/" component={PostsPage} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
