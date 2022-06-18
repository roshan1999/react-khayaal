import './LandingAbout.css';
import Collage1 from '../../../../assets/collage_1.svg';
import Collage2 from '../../../../assets/collage_2.svg';
import Collage3 from '../../../../assets/collage_3.svg';
import Collage4 from '../../../../assets/collage_4.svg';

export default function LandingAbout() {
    return (
        <div className="landing-about-container">
            <div className="landing-about-left-container">
                <div className="image-container">
                    <div className="column-aligned-1">
                        <img src={Collage4} width="70%" />
                        <img src={Collage3} width="50%" />
                    </div>
                    <div className='column-aligned-2'>
                        <img src={Collage1} width="70%" />
                        <img src={Collage2} width="70%" />
                    </div>
                </div>
            </div>
            <div className="landing-about-right-container">
                <div className="right-container">
                    <p className="inner-heading">What is <b>Khayaal</b>?</p>
                    <p className="inner-text"><b>Khayaal is a youth-based non-profit organization with the aim generate awareness and education. We truly believe that our youth has the power to change the world.</b></p> 
                    <br/>
                    <p className="inner-text" style={{marginTop:0, marginBottom: 0}}>Each day, we are creating an environment that gives back to society. Our primary goal is to teach children, especially the ones belonging to the underprivileged background.  We want to unlock every key to the potential of these sources of light who are the future of our society. We have a set of selfless volunteers and members who are giving in their hearts and soul to make our surrounding a better place.</p>
                </div>
            </div>
        </div>

    )
}