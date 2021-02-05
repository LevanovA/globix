import React from 'react'
import './index.css'
import wavesImg from "../../images/wavyLine.svg"

export default class CardsComponent extends React.Component {
    render() {
        return (
            <div className="cards">
                <div className="container-fluid section">
                    <div className="row">
                        <div className="col-md-4 column">
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
                        </div>
                        <div className="col-md-4 column">
                            <div className="whiteCard">
                                <div className="whiteCard_title bold">
                                    Globix
                                </div>
                                <div className="whiteCard_text">
                                    Один из самых безопасных<br />
                                    и&nbsp;отказоустойчивых<br />
                                    современных кошельков
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 column">
                            <img src={wavesImg} alt="" draggable={false} />
                            <div className="greenCard card2">
                                <div className="greenCard_title bold">
                                    БОТ
                                </div>
                                <div className="greenCard_text">
                                    Простой и понятный<br />
                                    телеграмм бот
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}