//Dependencies
import './FamousBook.css';
import { Link } from 'react-router-dom';

interface FamousBookProps{
    img: string,
    bookName: string,
    author: string
}

const FamousBook = ({img, bookName, author}: FamousBookProps) => {
    
    return(
        <div className="fmBook">
            <img className='imgBook' src={img} alt={bookName} />
            <span className='name'>{bookName}</span>
            <span>{author}</span>
            <Link to={'/'}><button>Loan</button></Link>
        </div>
    );
}

export default FamousBook;