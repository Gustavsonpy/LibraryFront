//Dependencies
import './Homepage.css';
import { Link } from 'react-router-dom'; 

//img
import Bible from '../../../../../images/bible.png'; 
import btf from '../../../../../images/beatiful_book.jpg'; 

//Components
import FamousBook from '../../components/FamousBook/FamousBook';

const Homepage = () => {
    return(
        <div className="home">
            <div className="introduction">
                <div className="content">
                    <div className="text-and-btn">
                        <h1>Want to read a book today?</h1>
                        <Link to="/"><button className='introduction-btn'>Explore</button></Link>
                    </div>
                    <div className="images">
                        <img src={Bible} alt="Bible" />
                        <img src={btf} alt="Beatiful book" />
                    </div>
                </div>
            </div>
            <div className="books">
                <h1>Most famous books of the month</h1>
                <div className="famous-book">
                    <FamousBook img={Bible} bookName='The Holy Bible' author='Fulano de Tal'/>
                </div>
            </div>
        </div>
    );
}

export default Homepage;