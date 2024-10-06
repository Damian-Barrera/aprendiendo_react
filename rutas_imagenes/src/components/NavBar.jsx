import { NavLink } from "react-router-dom"


export const NavBar = ({ setUrl}) => {

    const chicas = {
        estephania: 'https://img-9gag-fun.9cache.com/photo/axM987b_700bwp.webp',
        emily: ' https://images-cdn.ubuy.co.in/66a3ccb093f5fd442776359a-emily-sears-in-bikini-8x10-picture.jpg',
        riae: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/28f4b330882197.5637ad64a82c7.jpg ',
        jessica: ' https://www.maxim.com/wp-content/uploads/2021/05/coy-jessica-bartlett-1.jpg'
    }


    const changeImage = (e) => {
        let id = e.target.id

        if (id == 'estephania') {
            setUrl(chicas.estephania, id)
            
        }
        if (id == 'emily') {
            setUrl(chicas.emily, id)

        }
        if (id == 'riae') {
            setUrl(chicas.riae, id)
             
        }
        if (id == 'jessica') {
            setUrl(chicas.jessica, id)
            
        };


    }

    return (
        <>
            <nav className="nav">
                <NavLink className="chicas" onClick={changeImage} id="estephania" to="estephania" >Esthepania </NavLink>
                <NavLink className="chicas" onClick={changeImage} id="emily" to="emily" > Emily </NavLink>
                <NavLink className="chicas" onClick={changeImage} id="riae" to="riae" > Riae</NavLink>
                <NavLink className="chicas" onClick={changeImage} id="jessica" to="jessica"> Jessica </NavLink>
            </nav>
        </>
    )
}
