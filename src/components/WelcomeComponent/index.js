import React from 'react'
import './index.css'
import iphone from "../../images/iphone.png"
import ScrollAnimation from 'react-animate-on-scroll';
import { Parallax } from 'react-scroll-parallax';
import ModalComponent from '../ModalComponent'
import coin1 from "./img/coin1.png"
import coin2 from "./img/coin2.png"

export default class WelcomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hideClass: true,
            isModalAForm: true
        }
    }

    onClose() {
        this.setState({ hideClass: true });
    }

    openModal() {
        this.setState({
            hideClass: false,
            isModalAForm: true
        })
    }

    render() {
        return (
            <>
                <div className="welcome">
                    <img src={coin1} className="coin1" alt="" draggable={false} />
                    <img src={coin2} className="coin2" alt="" draggable={false} />
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-md-7 column">
                                <ScrollAnimation
                                    duration={2}
                                    animateOnce={true}
                                    animateIn="fadeInLeft">
                                    <h1 className="extraBold">Привет, я <span className="littleCard extraBold">Globix</span><br />
                                    кошелёк для<br />
                                    людей
                                </h1>
                                </ScrollAnimation>
                                <Parallax y={[-15, 15]}>
                                    <h4><span className="extraBold eb">Globix Cash</span> — это простой и
                            надежный<br /> мультивалютный кошелёк <span className="bold">в Telegram</span></h4>
                                    <a onClick={() => this.openModal()} className="button" target="_blank">Активировать</a>
                                </Parallax>
                            </div>
                            <div className="col-md-5 column">
                                <ScrollAnimation
                                    offset={1}
                                    duration={2}
                                    animateOnce={true}
                                    animateIn="fadeInRight">
                                    <img src={iphone} draggable={false} alt="" />
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
                <ModalComponent
                    isModalAForm={this.state.isModalAForm}
                    hideClass={this.state.hideClass}
                    onClose={() => this.onClose()} />
            </>
        )
    }
}