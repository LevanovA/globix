import React from 'react'
import './index.css'
import p2p_1Img from "../../images/p2p_1.png"
import p2p_2Img from "../../images/p2p_2.png"
import ScrollAnimation from 'react-animate-on-scroll';
// import { Parallax } from 'react-scroll-parallax';

export default class P2PComponent extends React.Component {
    render() {
        return (
            <div className="p2p">
                <div className="container-fluid section">
                    <div className="row">
                        <div className="col">
                            <h2 className="extraBold">P2P кредитование</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="extraBold">Преимущества для заемщика</h3>
                            <img src={p2p_1Img} className="img1 img1_mobile" draggable={false} alt="" />
                            <h4 className="text1">Сохраняйте BTC</h4>
                            <h5 className="text1">
                                Не продавайте биткоин, чтобы получить деньги.
                                Используйте криптовалюту в качестве залога,
                                чтобы взять кредит и получите криптоактив
                                назад после погашения кредита.
                            </h5>
                            <img src={p2p_1Img} className="img1" draggable={false} alt="" />
                            <div className="cardsWrapper wrapper1">
                                <div className="card_wrapp">
                                    <ScrollAnimation
                                        delay={150}
                                        animateOnce={true}
                                        animateIn="fadeInUp">
                                        <div className="greenCard card1">
                                            <div className="greenCard_title bold">
                                                Без KYC
                                            </div>
                                        </div>
                                    </ScrollAnimation>
                                </div>
                                <div className="card_wrapp">
                                    <ScrollAnimation
                                        delay={0}
                                        animateOnce={true}
                                        animateIn="fadeInUp">
                                        <div className="blackCard card1">
                                            <div className="blackCard_title bold">
                                                Без кредитной<br />истории
                                            </div>
                                            <div className="blackCard_text">
                                                Не нужно предоставлять сведения<br />
                                                о кредитной истории и доказывать<br />
                                                свою платежеспособность.
                                            </div>
                                        </div>
                                    </ScrollAnimation>
                                </div>
                                <div className="card_wrapp">
                                    <ScrollAnimation
                                        delay={300}
                                        animateOnce={true}
                                        animateIn="fadeInUp">
                                        <div className="grayCard">
                                            <div className="grayCard_title bold">
                                                Не переплачивайте
                                            </div>
                                            <div className="grayCard_text">
                                                Возьмите кредит в USDT на срок
                                                от 7 дней до 1 года.<br />
                                                Погасите кредит досрочно и платите только за срок пользования деньгами.
                                            </div>
                                        </div>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row row2">
                        <div className="col-md-7">
                            <img src={p2p_2Img} className="img2" draggable={false} alt="" />
                            <h3 className="extraBold text2">Преимущества для кредитора</h3>
                            <img src={p2p_2Img} className="img2 img2_mobile" draggable={false} alt="" />
                            <h5 className="text2">
                                Возможность заработать криптоактив не рискуя своим капиталом.
                                Если заемщик не закрыл кредит- вы получаете залоговую валюту (BTC).
                            </h5>
                            <h4 className="text2">
                                Несколько вариантов кредитования.
                            </h4>
                            <h5 className="text2">
                                Кредит можно выдать в USDT или GUSD
                            </h5>
                            <div className="cardsWrapper wrapper2">
                                <div className="card_wrapp2">
                                    <ScrollAnimation
                                        delay={200}
                                        animateOnce={true}
                                        animateIn="fadeInLeft">
                                        <div className="blackCard card2">
                                            <div className="blackCard_title bold">
                                                Без KYC
                                            </div>
                                            <div className="blackCard_text">
                                                Никаких обязательных селфи
                                                и паспортов
                                            </div>
                                        </div>
                                    </ScrollAnimation>
                                </div>
                                <div className="card_wrapp2">
                                    <ScrollAnimation
                                        animateOnce={true}
                                        animateIn="fadeInRight">
                                        <div className="greenCard card2">
                                            <div className="greenCard_title bold">
                                                Заработать
                                                без рисков
                                            </div>
                                        </div>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}