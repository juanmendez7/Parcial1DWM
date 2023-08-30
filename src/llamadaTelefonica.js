import './App.css'
import { useState } from 'react';

function LlamadaTelefono()
{
    const [costoTotal, setCostoTotal] = useState(0);
    const [duracionLlamada, setDuracionLlamada] = useState(0);

    const calcularCosto = () => {
        let costo = 0;

        if(duracionLlamada < 3)
        {
            costo = 100;
        }else{
            costo = 100 + 50 * (duracionLlamada - 3);
        }

        setCostoTotal(costo);
    }

    return(
        <div>
            <h1>Llamada telefonica</h1>
          <input
          type = "number"
          value = {duracionLlamada}
          onChange={(e) => setDuracionLlamada(parseInt(e.target.value))}
          />
          <button onClick={calcularCosto}>calcular costo</button>
          <p>total a pagar: {costoTotal}</p>
        </div>
    )
}

export default LlamadaTelefono;