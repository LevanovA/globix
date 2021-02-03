import React from 'react'
import './index.css'
import forpeopleImg from "../../images/forpeople.png"

export default class ForPeopleComponent extends React.Component {
    render() {
        return (
            <div className="forpeople">
                <div className="container-fluid section">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Глобикс
                            для людей,</h2>
                            <h5>Наше сообщество растёт постоянно.
                            Мы совершенствуем нашего бота и прислушиваемся
                            к нашим пользователям. Сделаем его лучше вместе!</h5>
                        </div>
                        <div className="col-md-6">
                            <img src={forpeopleImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}