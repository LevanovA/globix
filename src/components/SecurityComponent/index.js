import React from 'react'
import './index.css'
import securityImg from "../../images/security.png"
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

export default class SecurityComponent extends React.Component {
    
    render() {
        return (
            <>
                <div className="security">
                    <img src={coin2} className="coin2" alt="" draggable={false} />
                    <img src={coin3} className="coin3" alt="" draggable={false} />
                    <img src={coin4} className="coin4" alt="" draggable={false} />
                    <img src={coin5} className="coin5" alt="" draggable={false} />
                    <img src={coin1} className="coin1" alt="" draggable={false} />
                    <div className="container-fluid section">
                        <div className="row">
                            <div className="col-md-6">
                                <h2 className="extraBold extraBold--modile">Безопасность</h2>
                                <ScrollAnimation
                                    offset={600}
                                    animateOnce={true}
                                    animateIn="fadeInLeft">
                                    <img src={securityImg} className="img1" draggable={false} alt="" />
                                </ScrollAnimation>
                                <ScrollAnimation
                                    offset={200}
                                    animateOnce={true}
                                    animateIn="fadeInLeft">
                                    <div className="blackCard">
                                        <div className="blackCard_title">
                                            Нужна<br />
                                        возможность<br />
                                        в БОТЕ?
                                    </div>
                                        <div className="blackCard_text">
                                            Отправь нам сообщение,<br />
                                        что тебе необходимо!
                                    </div>
                                    </div>
                                </ScrollAnimation>
                            </div>
                            <div className="col-md-6 mobile_direction">
                                <h2 className="extraBold">Безопасность</h2>
                                <h5>
                                    Безопасность — это в первую очередь
                                    стабильность работы кошелька. Именно это
                                    важно для успешной работы и коммуникации.
                                    Мы знаем, что работа с ботом должна приносить
                                    прибыль, стремимся создать все условия для
                                    этого и быть открытыми к новому.
                            </h5>
                                <h5>
                                    - Не передавайте никому данные для входа в систему<br />
                                    - Не показывайте никому одноразовые пароли<br />
                                    - Используйте сложные пароли<br />
                                    - Всегда проверяйте правильность суммы и получателя<br />
                                </h5>
                                <a href="https://t.me/GlobixCashBot" className="button" target="_blank">Начать использовать</a>
                            </div>
                            <ScrollAnimation
                                offset={600}
                                animateOnce={true}
                                animateIn="fadeInLeft">
                                <div className="col-md-6 blackCard_wrapp">
                                    <div className="blackCard blackCard_mobile">
                                        <div className="blackCard_title">
                                            Нужна<br />
                                            возможность<br />
                                            в БОТЕ?
                                        </div>
                                        <div className="blackCard_text">
                                            Отправь нам сообщение,<br />
                                        что тебе необходимо!
                                    </div>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}