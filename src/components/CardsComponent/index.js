import React from 'react'
import './index.css'
import wavesImg from "../../images/wavyLine.svg"
import ScrollAnimation from 'react-animate-on-scroll';
// import { Parallax } from 'react-scroll-parallax';
import coin1 from "./img/coin1.png"

export default class CardsComponent extends React.Component {
    render() {
        return (
            <div className="cards">
                <img src={coin1} className="coin1" alt="" draggable={false} />
                <div className="container-fluid section">
                    <div className="row">
                        <div className="col-md-4 column">
                            <ScrollAnimation
                                offset={10}
                                animateOnce={true}
                                animateIn="fadeInUp">
                                <div className="blueCard">
                                    <div className="blueCard_title bold">
                                        24/7<br />
                                        поддержка
                                    </div>
                                    <div className="blueCard_text">
                                        Наши операторы всегда<br />
                                        придут на помощь
                                    </div>
                                </div>
                            </ScrollAnimation>
                            <ScrollAnimation
                                animateOnce={true}
                                animateIn="fadeInUp">
                                <div className="greenCard card1">
                                    <div className="greenCard_title bold">
                                        Обновления<br />
                                        и&nbsp;дополнительные<br />
                                        инструменты
                                    </div>
                                    <div className="greenCard_text">
                                        для удобной работы
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                        <div className="col-md-4 column">
                            <ScrollAnimation
                                animateOnce={true}
                                animateIn="fadeInUp">
                                <div className="whiteCard">
                                    <div className="whiteCard_title bold">
                                        Bittix
                                    </div>
                                    <div className="whiteCard_text">
                                        Один из самых безопасных<br />
                                        и&nbsp;отказоустойчивых<br />
                                        современных кошельков
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                        <div className="col-md-4 column">
                            <ScrollAnimation
                                animateOnce={true}
                                animateIn="fadeInUp">
                                <img src={wavesImg} className="waves" alt="" draggable={false} />
                                <div className="greenCard card2">
                                    <div className="greenCard_title bold">
                                        БОТ
                                    </div>
                                    <div className="greenCard_text">
                                        Простой и понятный<br />
                                        телеграмм бот
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}