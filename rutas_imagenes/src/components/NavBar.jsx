import { NavLink } from "react-router-dom"


export const NavBar = ({ setImagenUrl }) => {

    const cambiando = ( info ) => {
        console.log( info)
    }

    const changeImage = (e) => {

        const imageName = e.target.id
        const url = {
            estephania: ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPbuLTWAgvNnsUR8Iwi29xFsBVRyN-DuJg7g&s',
            emily: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrIk-uY0R_RsyFcG-yDM6HcXhBL11O10ABpw&s',
            riae: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtIUpRPwDYyfQ34-j0PT7QYqJHwVDHgBuPA&s',
            Jessica: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT9f2gFpHJkldO0n5uVu6Myv70b1_mrSk_uCQY5fE4uGMzKzto8NUhd2790uL-vxWXYKo&usqp=CAU'
        }

        setImagenUrl(ulr[imageName])

    }

    return (
        <>
            <nav className="nav">
                <NavLink className="chicas" onClick={cambiando} id="estephania" to="estephania" >Esthepania Ha</NavLink>
                <NavLink className="chicas" onClick={changeImage} id="emily" to="emily" > Emily Sears</NavLink>
                <NavLink className="chicas" onClick={changeImage} id="riae" to="riae" > Riae</NavLink>
                <NavLink className="chicas" onClick={changeImage} id="jessica" to="jessica"> Jessica Barlett</NavLink>
            </nav>
        </>
    )
}
