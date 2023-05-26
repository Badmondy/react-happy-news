import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {





    return (

        <ul className="navbar">
            <Link to='/' className='li-link'>Senaste nytt</Link>
            <Link to='/teknik' className='li-link'>Teknik</Link>
            <Link to='/ekonomi' className='li-link'>Ekonomi</Link>
            <Link to='/kultur' className='li-link'>Kultur</Link>
            <Link to='/admin' className='li-link-admin'><FontAwesomeIcon icon={faScrewdriverWrench} /></Link>
        </ul>

    )

}

export default NavBar