import React from 'react'
import './index.css'
import sofa from "../../images/sofa.png"

export default class SofaComponent extends React.Component {
    render() {
        return (
            <div className="sofa">
                <div className="container-fluid section">
                    <div className="row">
                        <img src={sofa} className="sofaImg" alt="" />
                        <div className="sofaCircle">
                            <div className="sofaCircle_title">
                                Денежные переводы
                            </div>
                            <div className="sofaCircle_text">
                                напрямую в национальную валюту
                                с минимальными комиссиями.
                                <br />
                                <br />
                                <b>Доступно в более чем
                                100 стран мира</b>
                            </div>
                            <a href="" className="button" target="_blank">Начать сейчас</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}