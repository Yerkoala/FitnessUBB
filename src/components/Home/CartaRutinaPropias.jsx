import React,{useState} from 'react'

const CartaRutinaPropias = ({titulo}) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
    console.log(expanded)
  };

  return (
    <div
      className="box"
      style={{ height: expanded ? 'auto' : '80px' }}
      onClick={handleClick}
    >
      <h1 className='tituloCartaRutinaPropia'>{titulo}</h1>
      {expanded && (
        <>
          <button>Botón 1</button>
          <button>Botón 2</button>
          <button>Botón 3</button>
        </>
      )}
    </div>
  )
}

export default CartaRutinaPropias