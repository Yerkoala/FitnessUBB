import React, { useState } from 'react'

const CartaRutinaPropias = ({ titulo, nombres }) => {
  const [expanded, setExpanded] = useState(false);


  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`box ${expanded ? 'expanded' : ''}`}
      onClick={handleClick}
    >
      <h1 className='tituloCartaRutinaPropia'>{titulo}</h1>
      {nombres.map((e, index) =>
        <button key={index}>{e}</button>
      )}
    </div>
  )
}

export default CartaRutinaPropias