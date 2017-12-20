import React from 'react';
import { is_video } from '../utils';
import '../styles/MediaElement.css';
const noop = () => {};
const MediaElement = ({
  src,
  onload = noop,
  className = '',
  controls = true
}) => {
  // onload = typeof onload === 'function' ? onload : () => {};
  className = `media-element ${className}`.trim();
  if (is_video(src)) {
    return (
      <video
        className={className}
        src={src}
        onCanPlay={onload}
        controls={controls}
        autoPlay
        loop
      />
    );
  } else {
    return <img className={className} src={src} onLoad={onload} alt="" />;
  }
};

export default MediaElement;
