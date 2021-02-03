import React from 'react'
import './index.css'
import logo from '../../images/logo.svg'
import telegram from '../../images/telegram.svg'
import whatsup from '../../images/whatsup.svg'

export default class HeaderComponent extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col header-item">
                            <img src={logo} alt="" />
                        </div>
                        <div className="col header-item">
                            <a href="">Кто я</a>
                        </div>
                        <div className="col header-item">
                            <a href="">Возможности</a>
                        </div>
                        <div className="col header-item">
                            <a href="">Переводы</a>
                        </div>
                        <div className="col header-item">
                            <a href="">Поддержка</a>
                        </div>
                        <div className="col header-item">
                            <a href="">Контакты</a>
                        </div>
                        <div className="dopinfo">
                            <div className="lang">En</div>
                            <a href=""><img src={telegram} alt="" /></a>
                            <a href=""><img src={whatsup} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}