import React from 'react'
import './index.css'

export default class StartBotComponent extends React.Component {
    render() {

        const cards = [
            {
                title: `Как переводить`,
                text: `между пользователями телеграмм 
                без комиссии`,
                background: `#C4C4C4`
            },
            {
                title: `Как привязать карту`,
                text: `bitcoin, etherium, usdt пару кликов, 
                с минимальными комиссиями`,
                background: `#C4C4C4`
            },
            {
                title: `Какие бонусы?`,
                text: `всегда под рукой 
                и с любого устройства прямо в мессенджере`,
                background: `#D8D8D8`
            },
            {
                title: `Какой-то вопрос`,
                text: `между пользователями телеграмм 
                без комиссии`,
                background: `#A3FF5E`
            },
            {
                title: `Как привязать карту`,
                text: `bitcoin, etherium, usdt пару кликов, 
                с минимальными комиссиями`,
                background: `#C4C4C4`
            },
        ];

        return (
            <div className="startbot">
                <div className="container-fluid section">
                    <div className="row">
                        <h2>Как запустить бота</h2>
                        <h5>Подпишитесь на нас в социальных сетях,
                        чтобы первыми узнавать о новых возможностях,
                        мероприятиях и других активностях нашего бота</h5>
                    </div>
                    <div className="row">
                        <div className="col-md-12 cardsContainer">
                            {cards.map((card, index) => {
                                return (
                                    <div
                                        key={index}
                                        style={{ background: card.background }}
                                        className="sliderCard">
                                        <div className="sliderCard_title">
                                            {card.title}
                                        </div>
                                        <div className="sliderCard_text">
                                            {card.text}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}