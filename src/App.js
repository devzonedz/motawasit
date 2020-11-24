import React from 'react';
import { ChakraProvider, CSSReset, Box, Grid } from '@chakra-ui/core';
import { Switch, Route, Link, Redirect, useLocation } from 'react-router-dom';
import theme from '@chakra-ui/theme';
import {
  CSSTransition,
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group';
import nprogress from 'nprogress';

//?pages
import Index from './pages/index';
import Home from './pages/home';
import About from './pages/about';
import Blog from './pages/blog';
import Book from './pages/book';
import Events from './pages/events';
import InThePress from './pages/inThePress';
import SinglePost from './pages/singlePost';
import ArabCulture from './pages/ourProjects/arabCultureFestivalInMilan';
import DivineComedy from './pages/ourProjects/divineComedy';
import Stronger from './pages/ourProjects/literatureIsStronger';
import Translation from './pages/ourProjects/translationForum';
import PublishConditions from './pages/ourWriters/publishConditions';

import Navbar from './components/layout/Navbar';
import TopNavbar from './components/layout/TopNavbar';
import Footer from './components/layout/Footer';
//?util
import Up from './util/Up';
import SocialButtons from './util/SocialButtons';
import ScrollToTop from './util/ScrollToTop';

import './styles/globals.css';
import './styles/fancyroutes.css';
const TIMEOUT = 300;
const getTransitionStyles = {
  entering: {
    position: `absolute`,
    opacity: 0,
    transform: `scale(0.7) translate(100px) `,
  },
  entered: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    opacity: 1,
    transform: `scale(1) translate(0px)`,
  },
  exiting: {
    transition: `opacity ${600}ms ease-in-out, transform ${600}ms ease-in-out`,
    opacity: 0,
    transform: `scale(0.7) translate(-100px)`,
  },
};

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
      <SocialButtons></SocialButtons>
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <Switch>
        <Route title="index" exact path="/">
          <Index />
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
        <Route title="book" exact path="/book">
          <Book />
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
      </Switch>
      <Up></Up>
      <Footer></Footer>
    </ChakraProvider>
  );
}

export default App;
