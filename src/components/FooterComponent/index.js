import React from 'react'
import './index.css'
import logo from '../../images/logo.svg'

export default class FooterComponent extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="container-fluid section">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row justify-content-space-between">
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
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="row">
                                <a href="" target="_blank">Раскрытие информации</a>
                            </div>
                            <div className="row">
                                <a href="" target="_blank">Документы</a>
                            </div>
                            <div className="row">
                                <a href="" target="_blank">Политика обработки cookies</a>
                            </div>
                        </div>
                        <div className="col-md-12">
                            © 2020 «Globix» Все права защищены
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}