import React from 'react';

function Photo({ img, onClick }) {
  return(
    <img
      src={require(`../../assets/small/${img.category}/${img.id}.jpg`)}
      alt={img.name}
      onClick={onClick}
      className="img-thumbnail mx-1"
    /> 
  )
}

export default Photo;