import FamousBook from '../../components/FamousBook/FamousBook';
import useBooks from '../../hooks/useBooks';
import useCategory from '../../hooks/useCategory';
import './Books.css';

const Books = () => {
    
    const BOOKS_API = 'http://localhost:8080/book/v1/getBooks';
    const CATEGORY_API = 'http://localhost:8080/category/v1/getCategories'

    const [books, loading] = useBooks(BOOKS_API);
    const [categories] = useCategory(CATEGORY_API);
    
    const handleBookCategory = (name: string): number | null => {
        const category = categories.find((category) => category.name === name);
        console.log(`Category name: ${category?.name}`);
        return category ? category.id : null;
    }

    return(
        <div className="booksBody">
            <div className="banner">
                <h3>NEW BOOKS EVERY WEEK</h3>
            </div>
            <div className="booksContainer">
                {categories.map((category) => (
                    <div className={category.name && "categories"}>
                        <h3>{category.name}</h3>
                        <div className="books">
                            {books.map((book, index) => {
                                if(book.fk_category === handleBookCategory(category.name)){
                                    return <FamousBook key={index} img={book.image} bookName={book.name} author={book.autor}/>
                                }
                            })}  
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Books;