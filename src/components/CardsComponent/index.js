import React from 'react'
import './index.css'

export default class CardsComponent extends React.Component {
    render() {
        return (
            <div className="cards">
                <div className="container-fluid section">
                    <div className="row">
                        <div className="col-md-4 column">
                            <div className="blueCard">
                                <div className="blueCard_title">
                                    24/7
                                    поддержка
                                </div>
                                <div className="blueCard_text">
                                    Наши операторы всегда придут на помощь
                                </div>
                            </div>
                            <div className="greenCard">
                                <div className="greenCard_title">
                                    Обновления
                                    и дополнительные инструменты
                                </div>
                                <div className="greenCard_text">
                                    для удобной работы
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 column">
                            <div className="whiteCard">
                                <div className="whiteCard_title">
                                    Globix
                                </div>
                                <div className="whiteCard_text">
                                    Один из самых безопасных
                                    и отказоустойчивых
                                    современных кошельков
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 column">
                            <div className="greenCard">
                                <div className="greenCard_title">
                                    БОТ
                                </div>
                                <div className="greenCard_text">
                                    Простой и понятный телеграмм бот
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}