import React from 'react';

const ContentSection = props => {
  return (
    <div
      className={`content-section${
        props.className ? ' ' + props.className : ''
      }`}
    >
      {props.children}
    </div>
  );
};

export default ContentSection;
