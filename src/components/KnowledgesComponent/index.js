import React from 'react'
import './index.css'
import knowledgesImg from "../../images/knowledges.png"

export default class KnowledgesComponent extends React.Component {
    render() {
        return (
            <div className="knowledges">
                <div className="container-fluid section">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={knowledgesImg} alt="" />
                        </div>
                        <div className="col-md-6">
                            <h2>Делимся знаниями</h2>
                            <h5>
                                Подпишитесь на нас в социальных сетях,
                                чтобы первыми узнавать о новых возможностях,
                                мероприятиях и других активностях нашего бота
                            </h5>
                            <h5>
                                227 365
                                активных пользователей
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}