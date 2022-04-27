import React from "react";
import "../css/grid.css";
export default function Hero(){
    return(
        <section>
            <div className="image--grid">
                <img src="../images/img1.jpg" className="first--image"/>
                <div className="col1">
                    <img src="../images/img2.jpg" className="image"/>
                    <img src="../images/img3.jpg" className="image"/>
                </div>
                <div className="col2">
                    <img src="../images/img4.jpg" className="image"/>
                    <img src="../images/img5.jpg" className="image"/>
                </div>
                <div className="col3">
                    <img src="../images/img6.jpg" className="image"/>
                    <img src="../images/img7.jpg" className="image"/>
                </div>
                <div className="col4">
                    <img src="../images/img8.jpg" className="image"/>
                    <img src="../images/img9.jpg" className="image"/>
                </div>
            </div>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}