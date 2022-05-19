import { ReactComponent as SloganImg } from '../../assets/sloganimg.svg';
import FilledButton from '../../Components/FilledButton/FilledButton';
import './MainSection.css';

export default function MainSection() {
    return (
        <div className="main-section">
            <div className="left-section">
                <div className="slogan-desc">
                    <span id="short-slogan">Short Slogan</span>
                    <span className="about-img">About the picture</span>
                    <div className="action-items">
                        <FilledButton>Donate Now</FilledButton>
                        <button className='simple-button'>Join us</button>
                    </div>
                </div>
            </div>
            <div className="right-section">
                <SloganImg className="right-img" />
                <div className="slogan-desc">
                    <span className="about-img">About the picture</span>
                    <div className="action-items">
                        <FilledButton>Donate Now</FilledButton>
                        <button className='simple-button'>Join us</button>
                    </div>
                </div>
            </div>
        </div>
    )
}