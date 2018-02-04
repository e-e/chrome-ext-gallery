import React from 'react';
import { is_video } from '../utils';
import '../styles/MediaElement.css';
const noop = () => { };
const MediaElement = ({
  media,
  onload = noop,
  className = '',
  controls = true
}) => {
  // onload = typeof onload === 'function' ? onload : () => {};
  className = `media-element ${className}`.trim();
  if (is_video(media.src)) {
    return (
      <video
        className={className}
        src={media.base64}
        onCanPlay={onload}
        controls={controls}
        autoPlay
        loop
      />
    );
  } else {
    return <img className={className} src={media.base64} onLoad={onload} alt="" />;
  }
};

export default MediaElement;
