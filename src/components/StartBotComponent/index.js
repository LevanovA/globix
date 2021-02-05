import React from 'react'
import './index.css'
import ModalComponent from '../ModalComponent'

export default class StartBotComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hideClass: true,
            isModalAForm: true
        }
    }

    onClose() {
        this.setState({ hideClass: true });
    }

    questionHandler() {
        this.setState({
            hideClass: false,
            isModalAForm: true
        })
    }

    cardHandler() {
        this.setState({
            hideClass: false,
            isModalAForm: false
        })
    }

    render() {
        const cards = [
            {
                title: `Как<br/>переводить`,
                text: `между пользователями телеграмм 
                без комиссии`,
                background: `#C4C4C4`
            },
            {
                title: `Как<br/>привязать<br/>карту`,
                text: `bitcoin, etherium, usdt пару кликов, 
                с минимальными комиссиями`,
                background: `#C4C4C4`
            },
            {
                title: `Какие<br/>бонусы?`,
                text: `всегда под рукой 
                и с любого устройства прямо в мессенджере`,
                background: `#D8D8D8`
            },
            {
                title: `Какой-то<br/>вопрос`,
                text: `между пользователями телеграмм 
                без комиссии`,
                background: `#A3FF5E`
            },
            {
                title: `Как<br/>привязать<br/>карту`,
                text: `bitcoin, etherium, usdt пару кликов, 
                с минимальными комиссиями`,
                background: `#C4C4C4`
            },
        ];

        return (
            <>
                <div className="startbot">
                    <div className="container-fluid container-fluid--startbot section">
                        <div className="row justify-content-center">
                            <h2 className="extraBold">Как запустить бота</h2>
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
                                            onClick={() => this.cardHandler()}
                                            style={{ background: card.background }}
                                            className="sliderCard">
                                            <div
                                                className="sliderCard_title bold"
                                                dangerouslySetInnerHTML={{ __html: card.title }}>
                                            </div>
                                            <div
                                                className="sliderCard_text"
                                                dangerouslySetInnerHTML={{ __html: card.text }}>
                                            </div>
                                        </div>
                                    )
                                })}
                                <div className="sliderCard question" onClick={() => this.questionHandler()}>
                                    <div className="sliderCard_title bold">
                                        Задать вопрос
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ModalComponent
                    isModalAForm={this.state.isModalAForm}
                    hideClass={this.state.hideClass}
                    onClose={() => this.onClose()} />
            </>
        )
    }
}