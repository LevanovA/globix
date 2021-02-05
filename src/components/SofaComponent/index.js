import React from 'react'
import './index.css'
import sofa from "../../images/sofa.png"
import ScrollAnimation from 'react-animate-on-scroll';
import { Parallax } from 'react-scroll-parallax';

export default class SofaComponent extends React.Component {
    render() {
        return (
            <div className="sofa">
                <div className="container-fluid section">
                    <div className="row">
                        <div className="sofaCircle_title extraBold hide">
                            Денежные<br />
                            переводы
                        </div>
                        <ScrollAnimation
                            offset={-1000}
                            animateOnce={true}
                            animateIn="slideInLeft">
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
                            <a href="" className="button" target="_blank">Начать сейчас</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}