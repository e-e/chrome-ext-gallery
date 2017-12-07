import React from 'react';
import { is_video } from '../utils';

const MediaElement = ({ src, onload, className = '' }) => {
  onload = typeof onload === 'function' ? onload : () => {};
  if (is_video(src)) {
    return (
      <video
        className={className}
        src={src}
        onCanPlay={onload}
        controls
        autoPlay
      />
    );
  } else {
    return <img className={className} src={src} onLoad={onload} />;
  }
};

export default MediaElement;
