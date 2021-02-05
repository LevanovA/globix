import React from 'react'
import './index.css'
import iphone from "../../images/iphone.png"
import ScrollAnimation from 'react-animate-on-scroll';
import { Parallax } from 'react-scroll-parallax';

export default class WelcomeComponent extends React.Component {
    render() {
        return (
            <div className="welcome">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-7">
                            <ScrollAnimation
                                animateOnce={true}
                                animateIn="slideInLeft">
                                <h1 className="extraBold">Привет, я <span className="littleCard extraBold">Globix</span><br />
                            кошелёк для<br />
                            людей</h1>
                            </ScrollAnimation>
                            <Parallax y={[-15, 15]} tagOuter="figure">
                                <h4><span className="extraBold eb">Globix Cash</span> — это простой и
                            надежный<br /> мультивалютный кошелёк <span className="bold">в Telegram</span></h4>
                                <a href="" className="button" target="_blank">Активировать</a>
                            </Parallax>
                        </div>
                        <div className="col-md-5">
                            <ScrollAnimation
                                offset={100}
                                animateOnce={true}
                                animateIn="slideInRight">
                                <img src={iphone} draggable={false} alt="" />
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}