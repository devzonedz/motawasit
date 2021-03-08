import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (
      this.props.location !== prevProps.location &&
      this.props.location.hash === ''
    ) {
      scroll.scrollToTop();
    }
  }

  render() {
    return <React.Fragment />;
  }
}

export default withRouter(ScrollToTop);
