import React from 'react';

function Photo({ img }) {
  return(
    <img
      src={require(`../../assets/small/${img.category}/${img.id}.jpg`)}
      alt={img.name}
      className="img-thumbnail mx-1"
    /> 
  )
}

export default Photo;