import React from 'react'
import './index.css'
import securityImg from "../../images/security.png"

export default class SecurityComponent extends React.Component {
    render() {
        return (
            <div className="security">
                <div className="container-fluid section">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={securityImg} alt="" />
                            <div className="blackCard">
                                <div className="blackCard_title">
                                    Нужна
                                    возможность
                                    в БОТЕ?
                                </div>
                                <div className="blackCard_text">
                                    Отправь нам сообщение,
                                    что тебе необходимо!
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h2>Безопасность</h2>
                            <h5>
                                Безопасность — это в первую очередь
                                стабильность работы кошелька. Именно это
                                важно для успешной работы и коммуникации.
                                Мы знаем, что работа с ботом должна приносить
                                прибыль, стремимся создать все условия для
                                этого и быть открытыми к новому.
                            </h5>
                            <h5>
                                - Не передавайте никому данные для входа в систему
                                - Не показывайте никому одноразовые пароли
                                - Используйте сложные пароли
                                - Всегда проверяйте правильность суммы и получателя
                            </h5>
                            <a href="" className="button" target="_blank">Начать использовать</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}