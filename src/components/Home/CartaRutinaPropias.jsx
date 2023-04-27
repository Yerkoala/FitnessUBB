import { useState } from 'react'
import TarjetaRutina from './TarjetaRutina';


const CartaRutinaPropias = ({ titulo, nombreRutinas }) => {
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
      {nombreRutinas.map((e, index) =>
        <TarjetaRutina key={index} titulo={e} categoria={titulo}/>
      )}
    </div>
  )
}

export default CartaRutinaPropias