import React from 'react';
import '../styles/Tag.css';

const noop = () => {};

const Tag = ({
  image = null,
  tag,
  onDelete = noop,
  onClick = noop,
  nodelete = false
}) => {
  let deleteBtn = nodelete ? null : (
    <div className="tag-delete" onClick={() => onDelete(image, tag)}>
      &times;
    </div>
  );
  return (
    <div className="tag" onClick={onClick(image, tag)}>
      <div className="tag-name">{tag}</div>
      {deleteBtn}
    </div>
  );
};

export default Tag;
