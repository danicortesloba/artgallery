
import { Link } from 'react-router-dom';
import paintings from './paintings';
const Home = () => {

    return (
        <div className="container">
            <h1>Art Gallery</h1>
            {paintings.map((painting, index) => (
                <Link className='homelink' key={index} to={`/painting/${painting.index}`}>
                    {painting.name}
                </Link>
            ))}
        </div>
    )
}

export default Home