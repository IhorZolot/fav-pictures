import React from 'react';

export const ImageCard = ({ src, alt, photographer, photographerId, onClose }) => {
  return (
    <div>
      <img src={src} alt={alt} />
      <h3>{photographer}</h3>
      <p>ID: {photographerId}</p>
      <p>{alt}</p>
      <button onClick={onClose}>Open Modal</button>
    </div>
  );
};
