import React from 'react'
import './index.css'
import sofa from "../../images/sofa.png"
import ScrollAnimation from 'react-animate-on-scroll';
import { Parallax } from 'react-scroll-parallax';

import coin1 from "./img/coin1.png"
import coin2 from "./img/coin2.png"
import coin3 from "./img/coin3.png"
import coin4 from "./img/coin4.png"
import coin5 from "./img/coin5.png"
import coin6 from "./img/coin6.png"
import coin7 from "./img/coin7.png"
import coin8 from "./img/coin8.png"
import coin9 from "./img/coin9.png"

export default class SofaComponent extends React.Component {
    
    render() {
        return (
            <>
                <div id="sofa" className="sofa">
                    <div className="coinContainer">
                        <img src={coin1} className="coin1" alt="" draggable={false} />
                        <img src={coin2} className="coin2" alt="" draggable={false} />
                        <img src={coin3} className="coin3" alt="" draggable={false} />
                        <img src={coin4} className="coin4" alt="" draggable={false} />
                        <img src={coin5} className="coin5" alt="" draggable={false} />
                        <img src={coin6} className="coin6" alt="" draggable={false} />
                        <img src={coin7} className="coin7" alt="" draggable={false} />
                        <img src={coin8} className="coin8" alt="" draggable={false} />
                        <img src={coin9} className="coin9" alt="" draggable={false} />
                    </div>
                    <div className="container-fluid section">
                        <div className="row">
                            <div className="sofaCircle_title extraBold hide">
                                Денежные<br />
                                переводы
                            </div>
                            <ScrollAnimation
                                offset={500}
                                animateOnce={true}
                                animateIn="fadeInLeft">
                                <img src={sofa} className="sofaImg" draggable={false} alt="" />
                            </ScrollAnimation>
                            <div className="sofaCircle">
                                <div className="sofaCircle_title extraBold">
                                    Денежные<br />
                                переводы
                            </div>
                                <div className="sofaCircle_text">
                                    напрямую в национальную валюту<br />
                                с минимальными комиссиями.
                                <br />
                                    <br />
                                    <span className="bold">Доступно в более чем<br />
                                100 стран мира</span>
                                </div>
                                <a href="https://t.me/GlobixCashBot" className="button" target="_blank">Начать сейчас</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}