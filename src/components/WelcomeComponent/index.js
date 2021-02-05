import React from 'react'
import './index.css'
import iphone from "../../images/iphone.png"

export default class WelcomeComponent extends React.Component {
    render() {
        return (
            <div className="welcome">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-7">
                            <h1 className="extraBold">Привет, я <span className="littleCard extraBold">Globix</span><br />
                            кошелёк для<br />
                            людей</h1>
                            <h4><span className="extraBold eb">Globix Cash</span> — это простой и
                            надежный<br /> мультивалютный кошелёк <span className="bold">в Telegram</span></h4>
                            <a href="" className="button" target="_blank">Активировать</a>
                        </div>
                        <div className="col-md-5">
                            <img src={iphone} draggable={false} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}