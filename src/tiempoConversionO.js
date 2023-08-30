import './App.css'
import { useState } from 'react';

function TiempoComponent()
{
    const [segundosEntrada,setSegundosEntrada] = useState('');
    const [conversion,setConversion] = useState('');

    const ConversionReal = () => {
        if(!isNaN(segundosEntrada))
        {
            const tiempo = parseInt(segundosEntrada);
            const horas = Math.floor(tiempo/3600);
            const minutos = Math.floor((tiempo % 3600) / 60);
            const segundos = tiempo % 60;
            setConversion (`La conversion es igual a ${horas} horas, ${minutos} minutos y ${segundos} segundos`)
        }else
        {
            setConversion(`Ingrese un valor numerico`)
        }
    };

    return(
        <div>
            <h1>Conversion de tiempo</h1>
            <input
            type = "text"
            placeholder='Ingrese los segundos'
            value={segundosEntrada}
            onChange={(e) => setSegundosEntrada(e.target.value)}/>
            <button onClick={ConversionReal}>Convertir</button>
            <p>{conversion}</p>
        </div>
    )
}

export default TiempoComponent;