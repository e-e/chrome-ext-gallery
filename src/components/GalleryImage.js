import React from 'react';
const GalleryImage = props => {
  return (
    <div className="gallery-item">
      <figure>
        <img src={props.src} />
        <figcaption>{props.id}!</figcaption>
      </figure>
    </div>
  );
};

export default GalleryImage;
