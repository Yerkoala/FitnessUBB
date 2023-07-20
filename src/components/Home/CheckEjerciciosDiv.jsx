import "../style.css"
import { useState, useEffect } from "react"
import moment from "moment"
import CronometroPantalla from "./CronometroPantalla"

const CheckEjerciciosDiv = ({ ejercicionombre }) => {
  const [abierto, setAbierto] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    const storedCheckedState = localStorage.getItem(ejercicionombre)
    if (storedCheckedState === "true") {
      setIsChecked(true)
    }
  }, [ejercicionombre])

  const abrirCerrar = () => {
    setAbierto(!abierto)
  };

  const marcarCheck = () => {
    setIsChecked(true)
    localStorage.setItem(ejercicionombre, "true")
  };

  useEffect(() => {
    const storedDate = localStorage.getItem("lastCheckedDate")
    const currentDate = moment().format("DD-MM-YYYY")

    if (storedDate !== currentDate) {
      setIsChecked(false);
      localStorage.setItem("lastCheckedDate", currentDate);
    }
  }, []);

  return (
    <div className="CheckEjerciciosDiv" onClick={abrirCerrar}>
      <input type="checkbox" checked={isChecked} readOnly />
      <p>{ejercicionombre}</p>
      <CronometroPantalla
        isOpen={abierto}
        abrirCerrar={abrirCerrar}
        marcarCheck={marcarCheck}
        ejercicionombre={ejercicionombre}
      />
    </div>
  );
};

export default CheckEjerciciosDiv
