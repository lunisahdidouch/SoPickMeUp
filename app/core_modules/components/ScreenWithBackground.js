// HigherOrderBackground.js

import React from 'react';
import Background from './BackgroundShapes';

const withBackground = (Component) => {
  return (props) => (
    <Background>
      <Component {...props} />
    </Background>
  );
};

export default withBackground;
