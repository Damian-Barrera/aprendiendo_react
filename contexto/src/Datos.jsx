import { MiContexto } from "./MyContext"

const Datos = ({ children }) => {



    const informacion = {
        nombre: 'damian',
        ciudad: 'Unquillo',
        edad: 37
    }

    return (
        <>
            <MiContexto.Provider value={informacion} >
                {children}
            </MiContexto.Provider>
        </>
    )
}

export default Datos
