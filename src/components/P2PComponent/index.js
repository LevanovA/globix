import React from 'react'
import './index.css'
import p2p_1Img from "../../images/p2p_1.png"
import p2p_2Img from "../../images/p2p_2.png"

export default class P2PComponent extends React.Component {
    render() {
        return (
            <div className="p2p">
                <div className="container-fluid section">
                    <div className="row">
                        <div className="col">
                            <h2>P2P кредитование</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Преимущества для заемщика</h2>
                            <h3>Сохраняйте BTC</h3>
                            <div>
                                Не продавайте биткоин, чтобы получить деньги.
                                Используйте криптовалюту в качестве залога,
                                чтобы взять кредит и получите криптоактив
                                назад после погашения кредита.
                            </div>
                            <img src={p2p_1Img} alt="" />
                            <div className="greenCard">
                                <div className="greenCard_title">
                                    Без KYC
                                </div>
                            </div>
                            <div className="blackCard">
                                <div className="blackCard_title">
                                    Без кредитной истории
                                </div>
                                <div className="blackCard_text">
                                    Не нужно предоставлять сведения
                                    о кредитной истории и доказывать свою платежеспособность.
                                </div>
                            </div>
                            <div className="grayCard">
                                <div className="grayCard_title">
                                    Не переплачивайте
                                </div>
                                <div className="grayCard_text">
                                    Возьмите кредит в USDT на срок
                                    от 7 дней до 1 года.
                                    Погасите кредит досрочно и платите только за срок пользования деньгами.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <img src={p2p_2Img} alt="" />
                            <h2>Преимущества для кредитора</h2>
                            <h3>Сохраняйте BTC</h3>
                            <div>
                                Возможность заработать криптоактив не рискуя своим капиталом.
                                Если заемщик не закрыл кредит- вы получаете залоговую валюту (BTC).
                            </div>
                            <div>
                                Несколько вариантов кредитования.
                            </div>
                            <div>
                                Кредит можно выдать в USDT или GUSD
                            </div>
                            <div className="blackCard">
                                <div className="blackCard_title">
                                    Без KYC
                                </div>
                                <div className="blackCard_text">
                                    Никаких обязательных селфи
                                    и паспортов
                                </div>
                            </div>
                            <div className="greenCard">
                                <div className="greenCard_title">
                                    Заработать
                                    без рисков
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}