import React from 'react'
import './index.css'
import iphoneRotate from "../../images/iphoneRotate.png"

export default class PrefooterComponent extends React.Component {
    render() {
        return (
            <div className="prefooter">
                <div className="container-fluid section">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Всё в твоих руках</h2>
                            <h5>простой доступ к активам из любой точки мира</h5>
                            <a href="" className="button" target="_blank">Начать использовать</a>
                        </div>
                        <div className="col-md-6">
                            <img src={iphoneRotate} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}