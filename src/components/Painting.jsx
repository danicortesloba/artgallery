import Navigation from "./Navigation"
import { useParams } from 'react-router-dom';
import paintings from "./paintings";
const Painting = () => {
    const { paintingindex} = useParams();
    const painting = paintings.find((painting) => painting.index === paintingindex);

    return (
        <div className="container">
            <h1>{painting.name}</h1>
            <img src={painting.url} alt={painting.name} className="image" />
            <Navigation index={parseInt(paintingindex)}/>
        </div>
   
    )
}

export default Painting