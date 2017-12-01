import React from 'react';
const GalleryImage = ({ image, remove, setActive }) => {
  return (
    <div className="gallery-item" onClick={() => setActive(image)}>
      <figure>
        <img src={image.src} />
        <figcaption>
          <ul>
            <li onClick={() => remove(image)}>x</li>
          </ul>
        </figcaption>
      </figure>
    </div>
  );
};

export default GalleryImage;
