import "../style.css"

const TarjetaEjercicio = ({ nombre, img, agregarEjercicio }) => {
  return (
    <div className='TarjetaEjercicioCuerpo' onClick={() => agregarEjercicio(nombre)}>
      <div className="divImagen">
        <img src={img} alt="Imagen del ejercicio" />
      </div>
      <div className="divTexto">
        <p>{nombre}</p>
      </div>
    </div>
  )
}

export default TarjetaEjercicio