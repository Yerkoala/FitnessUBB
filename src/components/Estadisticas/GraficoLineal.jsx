import { Line } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto"

const GraficoLineal = ({ datosGrafico }) => {
    // Validar si datosGrafico existe y es un arreglo
    if (!Array.isArray(datosGrafico)) {
        return null
    }

    // Obtener los datos de peso y repeticiones del arreglo datosGrafico
    const pesos = datosGrafico.map(dato => dato.peso)
    const repeticiones = datosGrafico.map(dato => dato.repeticiones)

    // Crear el arreglo de labels basado en los índices
    const series = datosGrafico.map((_, index) => index + 1)

    return (
        <div>
            <Line
                data={{
                    labels: series,
                    datasets: [
                        {
                            label: 'Peso',
                            data: pesos,
                            tension: 0,
                            fill: false,
                            borderColor: '#DF0101',
                            backgroundColor: 'rgba(223, 1, 1, 0.5)',
                            pointRadius: 2,
                            pointBorderColor: '#DF0101',
                            pointBackgroundColor: '#DF0101',
                        },
                        {
                            label: 'Repeticiones',
                            data: repeticiones,
                            tension: 0,
                            fill: false,
                            borderColor: '#0000FF',
                            backgroundColor: 'rgba(0, 0, 255, 0.5)',
                            pointRadius: 2,
                            pointBorderColor: '#0000FF',
                            pointBackgroundColor: '#0000FF',
                        },
                    ]
                }}
            />
        </div>
    )
}

export default GraficoLineal
