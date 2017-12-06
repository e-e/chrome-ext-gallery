import React from 'react';
import '../styles/ImageTag.css';

const ImageTag = ({ image, tag, onDelete }) => {
  return (
    <div className="tag">
      <div className="tag-name">{tag}</div>
      <div className="tag-delete" onClick={() => onDelete(image, tag)}>
        &times;
      </div>
    </div>
  );
};

export default ImageTag;
