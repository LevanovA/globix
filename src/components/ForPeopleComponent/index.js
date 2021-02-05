import React from 'react'
import './index.css'
import forpeopleImg from "../../images/forpeople.png"

export default class ForPeopleComponent extends React.Component {
    render() {
        return (
            <div className="forpeople">
                <div className="container-fluid section">
                    <div className="row">
                        <div className="col-md-6 column">
                            <h2 className="extraBold">Глобикс<br />
                            для людей</h2>
                            <h5>Наше сообщество растёт постоянно.<br />
                            Мы совершенствуем нашего бота и прислушиваемся<br />
                            к нашим пользователям. <span className="bold">Сделаем его лучше вместе!</span></h5>
                            <a href="" className="button" target="_blank">Изучить бота</a>
                        </div>
                        <div className="col-md-6 column">
                            <img src={forpeopleImg} draggable={false} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}