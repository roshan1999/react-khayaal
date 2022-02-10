import "./SectionThree.css";
import Member1 from '../../assets/member1.svg';
import Member2 from '../../assets/member2.svg';
import Member3 from '../../assets/member3.svg';
import ForwardIcon from '../../assets/icon_forward.svg';
import BackwardIcon from '../../assets/icon_backward.svg';

export default function SectionThree() {
    return (
        <div className="main-section-three">
            <p>Meet our Team Members</p>
            <div className="team-members-card">
                <img className="icon" src={BackwardIcon} alt="" />
                <div className="card-1">
                    <img src={Member1} alt="Member1" id="card-member-1" />
                    <p>Name</p>
                    <p>Position</p>
                    <p>Quote</p>
                </div>
                <div className="card-master">
                    <img src={Member3} alt="Member3" id="card-member-2"/>
                    <p>Name</p>
                    <p>Position</p>
                    <p>Quote</p>
                </div>
                <div className="card-1">
                    <img src={Member2} alt="Member2" id="card-member-3"/>
                    <p>Name</p>
                    <p>Position</p>
                    <p>Quote</p>
                </div>
                <img className="icon" src={ForwardIcon} alt="" />
            </div>
        </div>
    );
}

