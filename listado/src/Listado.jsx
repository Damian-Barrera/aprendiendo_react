import { useState } from "react"


const Items = ({ nombre, visto }) => {
    return (
        <li>
            {nombre} {visto ? "✔️" : "❌ "}     { /*Usando ternarios*/}
        </li>
    )
}

/*
export const Listado = () => {
    return (
        <>
            <h2>Listado de Temas </h2>
            <ol>
                <Items nombre="Instalaciones Necesarias" visto={true} > </Items>
                <Items nombre="Uso de Vite" visto={true} > </Items>
                <Items nombre="Componentes" visto={true} > </Items>
                <Items nombre="Variables JSX" visto={true} > </Items>
                <Items nombre="Props" visto={true} > </Items>
                <Items nombre="Eventos" visto={true} > </Items>
                <Items nombre="useState" visto={true} > </Items>
                <Items nombre="Redux" visto={false} > </Items>
                <Items nombre="CustomHooks" visto={false} > </Items>
            </ol>
        </>

    )
}
 */

//De igual manera esto anterior se puede hacer usando un map con useState



export const Listado = () => {

    let listadoApp = [
        { nombre: "Instalaciones Necesarias", visto : true },
        { nombre: "Uso de Vite", visto : true },
        { nombre: "Componentes", visto : true },
        { nombre: "Variables", visto :true },
        { nombre: "Props", visto : true },
        { nombre: "Eventos", visto : true },
        { nombre: "USeState", visto : true },
        { nombre: "IREdux", visto : false },
        { nombre: "Customs Hooks", visto : false },
    ]

    const [arreglo, setArreglo] = useState(listadoApp)

    return (
        <>
            <h2>Listado de temas</h2>
            <ol>
                { arreglo.map(item => <Items key={item.nombre} nombre={item.nombre} visto={item.visto}></Items> ) }
            </ol>
        </>
    )
}
