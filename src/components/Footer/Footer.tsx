import './Footer.css';
import { Link } from 'react-router-dom';

//images
import InstagramSvg from '../../icons/InstagramSvg';
import FacebookSvg from '../../icons/FacebookSvg';
import XSvg from '../../icons/XSvg';
import GithubSvg from '../../icons/GithubSvg';
import YoutubeSvg from '../../icons/YoutubeSvg';
import logo from '../../img/library_logo.png';

const Footer = () => {
    return(
        <footer>
            <div className="content">
                <div className="left_side">
                    <img id='logo' src={logo} alt="library_logo" />
                    <span className='link_text'>Enables thousands of readers to find their favorite books</span>
                    <div className="social_media">
                        <Link to='/'><FacebookSvg width={26} height={26}/></Link>
                        <Link to='/'><InstagramSvg width={26} height={26} /></Link>
                        <Link to='/'><XSvg width={26} height={26}/></Link>
                        <Link to='/'><GithubSvg height={26} width={26}/></Link>
                        <Link to='/'><YoutubeSvg height={26} width={26} poligo_color='black'/></Link>
                    </div>
                </div>
                <div className="right_side">
                    <div className="service">
                        <span className='title'>Service</span>
                        <Link to='/'><span className='link_text'>Loan</span></Link>
                        <Link to='/'><span className='link_text'>Buy</span></Link>
                        <Link to='/'><span className='link_text'>Books</span></Link>
                    </div>
                    <div className="company">
                        <span className='title'>Company</span>
                        <Link to='/'><span className='link_text'>About</span></Link>
                        <Link to='/'><span className='link_text'>Blog</span></Link>
                    </div>
                    <div className="legal">
                        <span className='title'>Legal</span>
                        <Link to='/'><span className='link_text'>Terms of service</span></Link>
                        <Link to='/'><span className='link_text'>Privacy policy</span></Link>
                        <Link to='/'><span className='link_text'>License</span></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;