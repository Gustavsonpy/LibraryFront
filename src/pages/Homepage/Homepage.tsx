//Dependencies
import './Homepage.css';
import { Link } from 'react-router-dom'; 

//img
import Bible from '/bible.png'; 
import btf from '/beatiful_book.jpg'; 

//Components
import FamousBook from '../../components/FamousBook/FamousBook';
import ReadingBookContainer from '../../components/ReadingBookContainer/ReadingBookContainer';
import useBooks from '../../hooks/useBooks';

const Homepage = () => {
    
    const [books, loading] = useBooks("http://localhost:8080/book/v1/getBooks");
    
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
                    {
                        loading
                            ? <span>Loading...</span>
                            : books.map((book, index) => (
                                <FamousBook key={index} img={book.image} bookName={book.name} author={book.autor}/>
                            ))
                    }
                </div>
            </div>
            <ReadingBookContainer phrase='“Reading is an inexhaustible source of pleasure, but, surprisingly, almost everyone does not feel this thirst.”' author="- Carlos Drummond de Andrade"/>
        </div>
    );
}

export default Homepage;