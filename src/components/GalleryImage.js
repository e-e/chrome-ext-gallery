import React from 'react';
// const GalleryImage = ({ image, remove, setActive }) => {
//   return (
//     <div className="gallery-item" onClick={() => setActive(image)}>
//       <figure>
//         <img src={image.src} />
//         <figcaption>
//           <div className="image-buttons">
//             <div className="btn" onClick={() => remove(image)}>
//               x
//             </div>
//           </div>
//         </figcaption>
//       </figure>
//     </div>
//   );
// };

// const GalleryImage = ({ image, remove, setActive }) => {
//   return (
//     <div className="frame-square" onClick={() => setActive(image)}>
//       <div className="crop">
//         <img src={image.src} />
//       </div>
//     </div>
//   );
// };

const GalleryImage = ({ image, remove, setActive }) => {
  return (
    <div className="gallery-image" onClick={() => setActive(image)}>
      <img src={image.src} />
    </div>
  );
};

export default GalleryImage;

// <figcaption>
//   <div className="image-buttons">
//     <div className="btn" onClick={() => remove(image)}>
//       x
//     </div>
//   </div>
// </figcaption>
