import "./SectionThree.css";
import { useState } from "react";
import Member1 from '../../assets/member1.svg';
import Member2 from '../../assets/member2.svg';
import Member3 from '../../assets/member3.svg';
import ForwardIcon from '../../assets/icon_forward.svg';
import BackwardIcon from '../../assets/icon_backward.svg';

export default function SectionThree() {

    return (
        <div className="main-section-three">
            <div className="container">
                <div className="heading-team">
                    <p>Meet our Team Members</p>
                </div>
                <div className="team-members-card">
                    <img className="icon" src={BackwardIcon} alt="" />
                    <div className="card-1-3">
                        <img src={Member1} alt="Member1" />
                        <p>Name</p>
                        <p>Position</p>
                    </div>
                    <div className="card-1-3" >
                        <img src={Member3} alt="Member3" />
                        <p>Name</p>
                        <p>Position</p>
                        <p>Quote</p>
                    </div>
                    <div className="card-1-3">
                        <img src={Member2} alt="Member2" />
                        <p>Name</p>
                        <p>Position</p>
                    </div>
                    <img className="icon" src={ForwardIcon} alt="" />
                </div>
            </div>
        </div>
    );
}

