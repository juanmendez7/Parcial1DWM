import './App.css'
import { useState } from 'react';

function SaludoHora()
{
    const[nombre, setNombre] = useState('');
    const [tiempo, setTiempo] = useState('');
    const [saludo, setSaludo] = useState('');



    const actualizarSaludo = (iniciarTiempo) => {
        const horaActual = parseInt(iniciarTiempo.split(':')[0]);

        if(horaActual >=6 && horaActual <12 )
        {
            setSaludo(`Buenos días, ${nombre}`);
        } else if(horaActual >= 12 && horaActual < 18)
        {
            setSaludo(`Buenas tardes, ${nombre}`);
        } else{
            setSaludo (`Buenas noche, ${nombre}`);
        } 
    };



    return(
        <div>
        <div>
            <h1>Saludo segun la hora</h1>
            <input
            type = "text"
            value = {nombre}
            placeholder='Ingrese su nombre'
            onChange={(e) => setNombre(e.target.value)}/>
        </div>
        <div>
            <input
            type = "text"
            value = {tiempo}
            placeholder='Ingrese una hora dentro de las 24H'
            onChange={(e) => setTiempo(e.target.value)}/>    
        </div>
        <button onClick={() => actualizarSaludo(tiempo)}>Obtener saludo</button>
        <p>{saludo}</p>
        </div>
    ); 
}

export default SaludoHora;