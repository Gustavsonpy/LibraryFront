//Dependencies
import './Homepage.css';
import { Link } from 'react-router-dom'; 

//img
import Bible from '/bible.png'; 
import btf from '/beatiful_book.jpg'; 

//Components
import FamousBook from '../../components/FamousBook/FamousBook';
import ReadingBookContainer from '../../components/ReadingBookContainer/ReadingBookContainer';

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
            <ReadingBookContainer phrase='“Reading is an inexhaustible source of pleasure, but, surprisingly, almost everyone does not feel this thirst.”' author="- Carlos Drummond de Andrade"/>
        </div>
    );
}

export default Homepage;