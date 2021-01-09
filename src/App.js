import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/core';
import { Switch, Route } from 'react-router-dom';
// import theme from '@chakra-ui/theme';

import nprogress from 'nprogress';

//?pages
import Index from './pages/index';
import Four from './pages/404';
import Home from './pages/home';
import About from './pages/about';
import Blog from './pages/blog';
import Book from './pages/book';
import Books from './pages/books';
import Podcast from './pages/Podcast';
import FeaturedBooks from './pages/FeaturedBooks';
import FurtherComing from './pages/FurtherComing';
import BooksByCategory from './pages/BooksByCategory';
import BooksSeries from './pages/BooksSeries';
import Events from './pages/events';
import InThePress from './pages/inThePress';
import SinglePost from './pages/singlePost';
import ArabCulture from './pages/ourProjects/arabCultureFestivalInMilan';
import DivineComedy from './pages/ourProjects/divineComedy';
import Stronger from './pages/ourProjects/literatureIsStronger';
import Translation from './pages/ourProjects/translationForum';
import PublishConditions from './pages/ourWriters/publishConditions';
import Writers from './pages/ourWriters/writers';
import Author from './pages/ourWriters/Author';

import Navbar from './components/layout/Navbar';
import TopNavbar from './components/layout/TopNavbar';
// import BooksFilter from './components/books/BooksFilter';
import Footer from './components/layout/Footer';
//?util
import Up from './util/Up';
import SocialButtons from './util/SocialButtons';
import ScrollToTop from './util/ScrollToTop';
import theme from './util/theme';

import './styles/globals.css';
import './styles/fancyroutes.css';
import 'react-dropzone-uploader/dist/styles.css';

// const TIMEOUT = 300;

function App(props) {
  React.useEffect(() => {
    nprogress.done();

    return () => {
      nprogress.start();
    };
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <TopNavbar></TopNavbar>
      {/* <BooksFilter></BooksFilter> */}
      <SocialButtons></SocialButtons>
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <Switch>
        <Route title="index" exact path="/">
          <Index />
        </Route>
        <Route title="podcast" exact path="/podcast">
          <Podcast />
        </Route>
        <Route title="featured" exact path="/featured">
          <FeaturedBooks />
        </Route>
        <Route title="further" exact path="/furthercoming">
          <FurtherComing />
        </Route>
        <Route title="home" exact path="/home">
          <Home />
        </Route>
        <Route title="about" exact path="/about">
          <About />
        </Route>
        <Route title="blog" exact path="/blog">
          <Blog />
        </Route>
        <Route title="single-post" exact path="/singlePost">
          <SinglePost />
        </Route>
        <Route title="in the press" exact path="/inThePress">
          <InThePress />
        </Route>
        <Route title="book" exact path="/book/:id">
          <Book />
        </Route>
        <Route title="books" exact path="/books_by_category">
          <BooksByCategory />
        </Route>
        <Route title="books_by_series" exact path="/books_by_series">
          <BooksSeries />
        </Route>
        <Route title="books" exact path="/books">
          <Books />
        </Route>
        <Route title="author" exact path="/author/:id">
          <Author />
        </Route>
        <Route title="events" exact path="/events">
          <Events />
        </Route>
        <Route title="arab culture" exact path="/ourProjects/divineComedy">
          <DivineComedy />
        </Route>
        <Route title="Translation" exact path="/ourProjects/translationForum">
          <Translation />
        </Route>
        <Route
          title="events"
          exact
          path="/ourProjects/arabCultureFestivalInMilan"
        >
          <ArabCulture />
        </Route>
        <Route title="Stronger" exact path="/ourProjects/literatureIsStronger">
          <Stronger />
        </Route>
        <Route
          title="publish conditions"
          exact
          path="/ourWriters/publishConditions"
        >
          <PublishConditions />
        </Route>
        <Route title="writers" exact path="/ourWriters/writers">
          <Writers />
        </Route>
        <Route title="404">
          <Four />
        </Route>
      </Switch>
      <Up></Up>
      <Footer></Footer>
    </ChakraProvider>
  );
}

export default App;
