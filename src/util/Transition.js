import React from 'react';
import {
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group';
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
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    opacity: 0,
    transform: `scale(0.7) translate(-100px)`,
  },
};

export default function Transition({ childrens }) {
  return (
    <TransitionGroup>
      <ReactTransition
        // key={location}
        timeout={{
          enter: TIMEOUT,
          exit: TIMEOUT,
        }}
      >
        {status => (
          <>
            <div
              style={{
                ...getTransitionStyles[status],
              }}
            >
              {childrens}
            </div>
          </>
        )}
      </ReactTransition>
    </TransitionGroup>
  );
}
