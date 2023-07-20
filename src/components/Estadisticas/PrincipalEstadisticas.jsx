import React, { useEffect, useState,useCallback } from 'react'
import moment from 'moment'
import MANCUERNA from "../../images/mancuerna.png"
import { useEstadisticasContext } from '../../provider/EstadisticasProvider'
import "./PrincipalEstadisticas.css"
import "../style.css"
import GraficoLineal from './GraficoLineal'


const PrincipalEstadisticas = () => {
  // VARIABLES DE LOS STATS
  const [progresoGrafico, setProgresoGrafico] = useState([])
  const [pesoMaximo, setPesoMaximo] = useState(0)
  const [repeticionesMaximo, setRepeticionesMaximo] = useState(0)
  const [fechaInicio, setFechaInicio] = useState('')
  const [promedioPeso, setPromedioPeso] = useState(0)
  const [promedioRepeticiones, setPromedioRepeticiones] = useState(0)
  const [mesesTranscurridos, setMesesTranscurridos] = useState(0)
  const [semanasTranscurridos, setSemanasTranscurridos] = useState(0)
  const [ultimoPeso, setUltimoPeso] = useState(0)
  const [ultimoRepeticiones, setUltimoRepeticiones] = useState(0)
  const [ultimaFecha, setUltimaFecha] = useState('')

  const estadisticasObjeto = useEstadisticasContext()

  const [opcionesSelect, setOpcionesSelect] = useState([])

  const actualizarDatos = useCallback((nombreEjercicioSeleccionado) => {
    const progreso = estadisticasObjeto[nombreEjercicioSeleccionado]

    let maxPeso = 0
    let maxRepeticiones = 0
    let sumPeso = 0
    let sumRepeticiones = 0

    if (progreso && progreso.length > 0) {
      for (const item of progreso) {
        const pesoNumerico = parseFloat(item.peso)
        const repeticionesNumerico = parseFloat(item.repeticiones)
        sumPeso += pesoNumerico
        sumRepeticiones += repeticionesNumerico

        if (pesoNumerico > maxPeso) {
          maxPeso = pesoNumerico
          maxRepeticiones = repeticionesNumerico
        } else if (pesoNumerico === maxPeso && repeticionesNumerico > maxRepeticiones) {
          maxRepeticiones = repeticionesNumerico
        }
      }

      const fechaInicioSeleccionada = moment(estadisticasObjeto[nombreEjercicioSeleccionado][0].fecha, 'DD/MM/YYYY')
      const fechaActual = moment()
      const mesesTranscurridos = fechaActual.diff(fechaInicioSeleccionada, 'months', true)
      const semanasTranscurridos = fechaActual.diff(fechaInicioSeleccionada, 'weeks', true)

      const promedio = progreso && progreso.length > 0 ? sumPeso / progreso.length : 0
      const promedioTruncado = promedio.toFixed(1)
      const promedioRepeticiones = progreso && progreso.length > 0 ? sumRepeticiones / progreso.length : 0
      const promedioRepeticionesTruncado = promedioRepeticiones.toFixed(1)

      if (estadisticasObjeto[nombreEjercicioSeleccionado][0]) {
        setPesoMaximo(maxPeso)
        setRepeticionesMaximo(maxRepeticiones)
        setFechaInicio(estadisticasObjeto[nombreEjercicioSeleccionado][0].fecha)
        setPromedioPeso(promedioTruncado)
        setPromedioRepeticiones(promedioRepeticionesTruncado)
        setMesesTranscurridos(mesesTranscurridos)
        setSemanasTranscurridos(semanasTranscurridos)
        setProgresoGrafico(progreso)
        setUltimoPeso(estadisticasObjeto[nombreEjercicioSeleccionado][estadisticasObjeto[nombreEjercicioSeleccionado].length - 1].peso)
        setUltimoRepeticiones(estadisticasObjeto[nombreEjercicioSeleccionado][estadisticasObjeto[nombreEjercicioSeleccionado].length - 1].repeticiones)
        setUltimaFecha(estadisticasObjeto[nombreEjercicioSeleccionado][estadisticasObjeto[nombreEjercicioSeleccionado].length - 1].fecha)
      }
    }
  }, [estadisticasObjeto])

  useEffect(() => {
    const nombresEjercicio = Object.keys(estadisticasObjeto)
    if (nombresEjercicio.length === 0) {
      setOpcionesSelect([
        <option key="noEjercicios" value="">
          No hay ejercicios disponibles
        </option>
      ]);
    } else {
      const opciones = nombresEjercicio.map((nombreEjercicio) => (
        <option key={nombreEjercicio} value={nombreEjercicio}>
          {nombreEjercicio}
        </option>
      ));
      setOpcionesSelect(opciones)
      actualizarDatos(nombresEjercicio[0])
    }
  }, [estadisticasObjeto]);

  const handleSelectChange = (event) => {
    const nombreEjercicioSeleccionado = event.target.value
    actualizarDatos(nombreEjercicioSeleccionado)
  };



  return (
    <div className='principalPantallaEstadisticas'>
      <h1 className='estadisticasTitulo'>Estadísticas</h1>
      <select name="ejercicios" id="selectEjercicios" onChange={handleSelectChange} style={{ maxWidth: "300px", textAlign: "center" }}>
        {opcionesSelect}
      </select>
      {Object.keys(estadisticasObjeto).length === 0 ? (
        <h1 className='probando'>Comienza a realizar alguna rutina para ver los datos estadísticos de tu progreso</h1>
      ) : (
        <>
          <div className='graficoStats'>
            <GraficoLineal datosGrafico={progresoGrafico} />
          </div>
          <div className="infoStats">
            <div className="generalStats">
              <div className='especificoStats'>
                <h4>Inicio</h4>
                <h6>{fechaInicio}</h6>
              </div>
              <div className="especificoStats">
                <h4>Transcurrido</h4>
                <select id="selectOption" className="fechaTranscurrida">
                  <option value="semanas">{`${Math.floor(semanasTranscurridos)} ${Math.floor(semanasTranscurridos) === 1 ? 'Semana' : 'Semanas'}`}</option>
                  <option value="meses">{`${Math.floor(mesesTranscurridos)} ${Math.floor(mesesTranscurridos) === 1 ? 'Mes' : 'Meses'}`}</option>
                </select>

              </div>
            </div>
            <div className="generalStats">
              <div className="especificoStats">
                <h4>Máximo <br /> peso</h4>
                <h6>{pesoMaximo}kg</h6>
              </div>
              <div className="especificoStats">
                <h4>Máximo <br /> repeticiones</h4>
                <h6>{repeticionesMaximo}</h6>
              </div>
            </div>
            <div className="generalStats">
              <div className='especificoStats'>
                <h4>Promedio <br /> peso</h4>
                <h6>{promedioPeso}kg</h6>
              </div>
              <div className='especificoStats'>
                <h4>Promedio <br /> repeticiones</h4>
                <h6>{Math.floor(promedioRepeticiones)}</h6>
              </div>
            </div>
            <div className="generalStatsTresSeries">
              <p>Última serie reaelizada</p>
              <div className="generalStats">
                <div className='especificoStats'>
                  <h4>Peso</h4>
                  <h6>{ultimoPeso}kg</h6>
                </div>
                <div className='especificoStats'>
                  <h4>Repeticiones</h4>
                  <h6>{ultimoRepeticiones}</h6>
                </div>
                <div className='especificoStats'>
                  <h4>Fecha</h4>
                  <h6>{ultimaFecha}</h6>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <img className='mancuernaFondo' src={MANCUERNA} alt="" />
    </div>
  );
};

export default PrincipalEstadisticas;
