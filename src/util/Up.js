import React, { Component } from 'react';
// import { ArrowUpIcon } from '@chakra-ui/icons';
import { Events, animateScroll as scroll } from 'react-scroll';

import { FaChevronUp } from 'react-icons/fa';

export default class Up extends Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function () {
      //   console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function () {
      //   console.log('end', arguments);
    });
  }
  scrollToTop() {
    scroll.scrollToTop();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render() {
    return (
      <div
        style={{
          backgroundColor: '#eee',
          position: 'fixed',
          bottom: 70,
          right: 30,
          zIndex: 997,
          padding: 10,
          cursor: 'pointer',
        }}
      >
        <FaChevronUp
          onClick={this.scrollToTop}
          fontSize="24px"
          color="black"
        ></FaChevronUp>
      </div>
    );
  }
}
