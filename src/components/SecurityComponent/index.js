import React from 'react'
import './index.css'
import securityImg from "../../images/security.png"
import ScrollAnimation from 'react-animate-on-scroll';
import { Parallax } from 'react-scroll-parallax';

export default class SecurityComponent extends React.Component {
    render() {
        return (
            <div className="security">
                <div className="container-fluid section">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="extraBold extraBold--modile">Безопасность</h2>
                            <ScrollAnimation
                                offset={600}
                                animateOnce={true}
                                animateIn="fadeInLeft">
                                <img src={securityImg} draggable={false} alt="" />
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
                            <a href="" className="button" target="_blank">Начать использовать</a>
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
        )
    }
}