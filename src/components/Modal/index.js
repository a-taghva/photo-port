import React from 'react';

function Modal(props) {
  const { name, category, description, id } = props.currentPhoto;
  console.log(name, category, description, id);

  return(
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <img src={require(`../../assets/large/${category}/${id}.jpg`)} alt={category} />
        <p>{description}</p>
        <button type="button">
          Close this modal
        </button>
      </div>
    </div>
  )
}

export default Modal;