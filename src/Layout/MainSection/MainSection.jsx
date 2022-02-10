import { ReactComponent as SloganImg } from '../../assets/sloganimg.svg';
import './MainSection.css';

import FilledButton from '../../Components/FilledButton/FilledButton';

export default function MainSection() {
    return (
        <div className="main-section">
            <div className="left-section">
                <div className="slogan-desc">
                    <span id="short-slogan">Short Slogan</span>
                    <span id="about-img">About the picture</span>
                    <div className="action-items">
                        <FilledButton>Donate Now</FilledButton>
                        <button className='simple-button'>Join us</button>
                    </div>
                </div>
            </div>
            <SloganImg className="right-section" />
        </div>
    )
}