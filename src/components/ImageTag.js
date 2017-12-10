import React from 'react';
import '../styles/ImageTag.css';

const noop = () => {};

const ImageTag = ({ image = null, tag, onDelete = noop, onClick = noop }) => {
  return (
    <div className="tag">
      <div className="tag-name">{tag}</div>
      <div
        className="tag-delete"
        onClick={() => onDelete(image, tag)}
        onClick={() => onClick(image, tag)}
      >
        &times;
      </div>
    </div>
  );
};

export default ImageTag;
