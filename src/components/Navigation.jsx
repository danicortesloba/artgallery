import { Link } from 'react-router-dom';
import proptypes from 'prop-types';


const Navigation = ({index}) => {
    return (
        <nav className="navigation">
                <button className="link"><Link to={index === 1 ? `/home` : `/painting/${index - 1}`}>Atrás</Link></button>
                <button className="link"><Link to="/home">Home</Link></button>
                <button className="link" ><Link to={index === 4 ? `/home` : `/painting/${index + 1}`}>Adelante</Link></button>   
        </nav>
    )
}

Navigation.propTypes = {
    index: proptypes.number
}

export default Navigation