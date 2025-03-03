import { useState } from "react";

const Inputs = () => {
    const [inputs, setInputs] = useState([]);

    // Función para agregar un input
    const agregarInput = () => {
        setInputs([...inputs, ""]); // Añadimos un nuevo valor vacío a la lista de inputs
    };

    // Función para actualizar el valor de un input
    const manejarCambio = (index, valor) => {
        const nuevosInputs = [...inputs];
        nuevosInputs[index] = valor;
        setInputs(nuevosInputs);
    };

    return (
        <div>
            <form>
                {inputs.map((input, index) => (

                    <div key={index}>
                        <label>Input {index + 1}</label>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => manejarCambio(index, e.target.value)}
                        />
                    </div>
                ))}
                <button type="button" onClick={agregarInput}>
                    Agregar Input
                </button>
            </form>

        </div>
    );
}

export default Inputs
