import React from 'react'
import './index.css'
import logo from '../../images/logo.svg'
import { Parallax } from 'react-scroll-parallax';

export default class FooterComponent extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="container-fluid section">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row justify-content-space-between header">
                                <div className="col header-item">
                                    <img src={logo} draggable={false} alt="" />
                                </div>
                                <div className="col header-item">
                                    <a href="#welcome">Кто я</a>
                                </div>
                                <div className="col header-item">
                                    <a href="#possibility">Возможности</a>
                                </div>
                                <div className="col header-item">
                                    <a href="#sofa">Переводы</a>
                                </div>
                                <div className="col header-item">
                                    <a href="#forpeople">Поддержка</a>
                                </div>
                                <div className="col header-item">
                                    <a href="#startbot">Контакты</a>
                                </div>
                                    </div>
                            </div>
                        <div className="col-md-12 politics">
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
                        <div className="col-md-12 rights">
                            © 2020 «Globix» Все права защищены
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}