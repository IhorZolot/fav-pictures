import React from 'react';

export const ImageCard = ({item}) => {
  const {src, alt, photographer, photographerId, onClose } = item
  return (
    <div>
      <img src={src.landscape} alt={alt} />
      
      <h3>{photographer}</h3>
      
      <p>{alt}</p>
    </div>
  );
};
