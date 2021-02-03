import React from 'react'
import './index.css'
import iphone from "../../images/iphone.png"

export default class WelcomeComponent extends React.Component {
    render() {
        return (
            <div className="welcome">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <h1 className="extraBold">Привет, я Globix<br />
                            кошелёк для<br />
                            людей</h1>
                            <div className="greenCard">
                                <div className="greenCard_title bold">
                                    Отказоустойчивый
                                </div>
                            </div>
                            <h4><span className="extraBold">Globix Cash</span> — это простой и
                            надежный<br /> мультивалютный кошелёк <span className="bold">в Telegram</span></h4>
                            <a href="" className="button" target="_blank">Активировать</a>
                        </div>
                        <div className="col-md-6">
                            <img src={iphone} draggable={false} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}