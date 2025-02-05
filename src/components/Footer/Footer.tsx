import './Footer.css';
import { Link } from 'react-router-dom';

//images
import InstagramSvg from '../../icons/InstagramSvg';
import FacebookSvg from '../../icons/FacebookSvg';
import XSvg from '../../icons/XSvg';
import GithubSvg from '../../icons/GithubSvg';
import YoutubeSvg from '../../icons/YoutubeSvg';

const Footer = () => {
    return(
        <footer>
            <div className="content">
                <div className="left_side">
                    <img src="" alt="library_logo" />
                    <span>Making the world a better place through constructing elegant hierarchies</span>
                    <div className="social_media">
                        <FacebookSvg fill='#000000' width={32} height={32}/>
                        <InstagramSvg fill="#000000" width={32} height={32} />
                        <XSvg fill='red' width={32} height={32}/>
                        <GithubSvg fill='black' height={32} width={32}/>
                        <YoutubeSvg fill='red' height={32} width={32}/>
                    </div>
                </div>
                <div className="links">
                    <div className="solution">
                        <span className='title'>Solution</span>
                        <Link to='/'><span>Marketing</span></Link>
                        <Link to='/'><span>Analytics</span></Link>
                        <Link to='/'><span>Automation</span></Link>
                        <Link to='/'><span>Commerce</span></Link>
                        <Link to='/'><span>Insights</span></Link>
                    </div>
                    <div className="support">
                        <span className='title'>Support</span>
                        <Link to='/'><span>Submit ticket</span></Link>
                        <Link to='/'><span>Documentation</span></Link>
                        <Link to='/'><span>Guide</span></Link>
                    </div>
                    <div className="company">
                        <span className='title'>Company</span>
                        <Link to='/'><span>About</span></Link>
                        <Link to='/'><span>Blog</span></Link>
                        <Link to='/'><span>Jobs</span></Link>
                        <Link to='/'><span>Press</span></Link>
                    </div>
                    <div className="legal">
                        <span className='title'>Legal</span>
                        <Link to='/'><span>Terms of service</span></Link>
                        <Link to='/'><span>Privacy policy</span></Link>
                        <Link to='/'><span>License</span></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;