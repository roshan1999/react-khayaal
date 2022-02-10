import './SectionTwo.css';
import Collage1 from '../../assets/collage_1.svg';
import Collage2 from '../../assets/collage_2.svg';
import Collage3 from '../../assets/collage_3.svg';
import Collage4 from '../../assets/collage_4.svg';

export default function SectionTwo() {
    return (
        <div className="main-section-two">
            <div className="section-two">
                <div className="left-section-two">
                    <div className="column-aligned-1">
                        <img src={Collage4} />
                        <img src={Collage3} />
                    </div>
                    <div className='column-aligned-2'>
                        <img src={Collage1} />
                        <img src={Collage2} />
                    </div>
                </div>
                <div className="right-section-two">
                    <p className="inner-heading">What is Khayal?</p>
                    <p className="inner-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                </div>
            </div>
        </div>

    )
}