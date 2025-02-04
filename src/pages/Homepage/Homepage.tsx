//Dependencies
import './Homepage.css';
import { Link } from 'react-router-dom'; 

//img
import Bible from '../../../public/bible.png'; 
import btf from '../../../public/beatiful_book.jpg'; 

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
                <h1 id='famous_book_title'>Most famous books of the month</h1>
                <div className="famous-book">
                    <FamousBook img={Bible} bookName='The Holy Bible' author='Fulano de Tal'/>
                    <FamousBook img={btf} bookName='beatiful_book' author='Ciclano de Tal'/>
                    <FamousBook img={Bible} bookName='The Holy Bible' author='Fulano de Tal'/>
                    <FamousBook img={btf} bookName='beatiful_book' author='Ciclano de Tal'/>
                    <FamousBook img={Bible} bookName='The Holy Bible' author='Fulano de Tal'/>
                </div>
            </div>
        </div>
    );
}

export default Homepage;