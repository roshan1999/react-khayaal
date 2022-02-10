import './SectionFour.css'
import SectionImg from '../../assets/img_section_4.svg';
import FilledButton from '../../Components/FilledButton/FilledButton';

export default function SectionFour() {
    return (
        <div className='main-section-four'>
            <div className="section-four">
                <img src={SectionImg} alt="simple-image" />
                <div className="action-items">
                    <button >Join Us</button>
                    <button>Donate Now</button>
                </div>
            </div>
        </div>
    );
}
