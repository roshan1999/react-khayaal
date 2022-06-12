import LastImg from '../../../../assets/LandingLast/landing-last-image.png';
import './LandingLast.css';

const LandingLast = () => {
    return (
        <div className="landing-last-container">
            <div className="left-container">
                <img src={LastImg} alt="last-container-img" />
            </div>
            <div className="right-container">
                <div className="action-items">
                    <button>Join Us</button>
                    <button>Donate Now</button>
                </div>
            </div>
        </div>)
}

export default LandingLast;