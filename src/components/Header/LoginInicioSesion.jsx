import React, { useState } from 'react'
import "../style.css"
import { loginUsuario } from '../../firebase'

const LoginInicioSesion = ({ inicioSesion, cerrarInicioSesion,abrirCrearCuenta,sesionIniciada }) => {
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')

    const iniciarSesion = () => {
        const user= loginUsuario(usuario,password)
        if(!user){
            sesionIniciada()
            console.log("Sesion iniciada")
            setUsuario('')
            setPassword('')
            cerrarInicioSesion()
        }
    }

    const volverAtras=()=>{
        cerrarInicioSesion()
        abrirCrearCuenta()
    }


    return (
        <div className={inicioSesion ? 'login' : 'loginCerrado'}>
            <div className="loginCuerpoModal">
                <h1>FitnessUBB</h1>
                <h3>Iniciar sesión</h3>
                <div className='loginFormulario'>
                    <p>Correo</p>
                    <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                    <p>Contraseña</p>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className='botonIniciarSesion' onClick={iniciarSesion}>Iniciar sesión</button>
                <button className='botonAtras' onClick={volverAtras}>Atras</button>
            </div>
        </div>
    )
}

export default LoginInicioSesion