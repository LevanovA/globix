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
                        <h2 className="extraBold extraBold_modile">
                                Делимся<br />
                                знаниями</h2>
                            <img src={knowledgesImg} draggable={false} alt="" />
                        </div>
                        <div className="col-md-6 mobile_direction">
                            <h2 className="extraBold">
                                Делимся<br />
                                знаниями</h2>
                            <h5>
                                Подпишитесь на нас в социальных сетях,
                                чтобы первыми узнавать о новых возможностях,
                                мероприятиях и других активностях нашего бота
                            </h5>
                            <h3 className="bold">
                                227 365
                            </h3>
                            <h4 className="bold">
                                активных пользователей
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}