
import iconos from '../styles/iconos.module.css'
import { useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom';


const View = () => {



    const { view } = useParams(); //extrae view del objeto

    const detalles = {
        facebook: 'Esto es Facebook',
        instagram: 'Esto es Instagram',
        whatsapp: 'Esto es WhatsApp',
        telegram: 'Esto es Telegram',
        github: 'Esto es GitHub',
    };

    if (!detalles[view]) {
        return <Navigate to="/" />;
    }

     return (
        <div className={iconos.wrapper}>
            <p> {detalles[view]} </p>

            <span className={iconos[view]}>
                <i className={`bi bi-${view}`} title='Instagram' ></i>
            </span>
        </div>
    );
}

export default View;
