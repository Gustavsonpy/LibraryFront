import './ReadingBookContainer.css';

interface containerProps{
    phrase: string,
    author: string
}

const ReadingBookContainer = ({phrase, author}: containerProps) => {
    return(
        <div className="phraseContainer">
            <span id='phrase'>{phrase}</span>
            <span id='author'>{author}</span>
        </div>
    );
}

export default ReadingBookContainer;