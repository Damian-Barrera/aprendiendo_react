import { NavLink } from "react-router-dom"


export const NavBar = ({ setUrl }) => {

    const chicas = {
        estephania: 'https://img-9gag-fun.9cache.com/photo/axM987b_700bwp.webp',
        emily: ' https://images-cdn.ubuy.co.in/66a3ccb093f5fd442776359a-emily-sears-in-bikini-8x10-picture.jpg',
        riae: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/28f4b330882197.5637ad64a82c7.jpg',
        jessica: 'https://www.maxim.com/wp-content/uploads/2021/05/coy-jessica-bartlett-1.jpg',
        beppler: 'https://c.wallhere.com/photos/ee/ce/Jessica_Beppler_model_women_underwear_pink_underwear_lingerie_tattoo_inked_girls-1216191.jpg!d',
        genesis: 'https://i.pinimg.com/736x/6c/5f/23/6c5f23767e813cf18012c89045aefce4.jpg',
        marie: 'https://iv1.lisimg.com/image/28381421/675full-marie-dee.jpg',
        laura: 'https://i.dailymail.co.uk/1s/2023/07/20/04/73412345-12317747-One_of_Australia_s_most_successful_OnlyFans_models_Laura_Lux_pic-a-12_1689823987533.jpg',
    }


    const changeImage = (e) => {
        // let id = e.target.id

        const id = e.target.id;
        setUrl(chicas[id], id);
    }

    return (
        <>
            <nav className="nav">
                {
                    Object.keys(chicas).map((nombre, index) =>
                        <NavLink key={index} className='chicas' onClick={changeImage} id={nombre} to={nombre} > {nombre} </NavLink>
                    )
                }
            </nav>
        </>
    )
}
