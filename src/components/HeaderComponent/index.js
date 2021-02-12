import React from 'react'
import './index.css'
import logo from '../../images/logo.svg'
import telegram from '../../images/telegram.svg'
import whatsup from '../../images/whatsup.svg'
import { Parallax } from 'react-scroll-parallax';
export default class HeaderComponent extends React.Component {
    render() {
        return (
            <div className="header" onScroll>
                <div className="container-fluid">
                    <div className="row justify-content-center pc">
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
                        <div className="dopinfo">
                            <div className="lang">En</div>
                            <a target="_blank" href="https://t.me/GlobixCashBot"><img src={telegram} draggable={false} alt="" /></a>
                            {/* <a href=""><img src={whatsup} draggable={false} alt="" /></a> */}
                        </div>
                    </div>
                    <div className="row justify-content-between mobile">
                        <div className="menuWrapper">
                            <input class="menu-btn" type="checkbox" id="menu-btn" />
                            <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
                            <div className="row mobile-menu">
                                <a href="#welcome">Кто я</a>
                                <a href="#possibility">Возможности</a>
                                <a href="#sofa">Переводы</a>
                                <a href="#forpeople">Поддержка</a>
                                <a href="#startbot">Контакты</a>
                            </div>
                        </div>
                        <div className="col header-item">
                            <img src={logo} draggable={false} alt="" />
                        </div>
                        <div className="dopinfo">
                            <a target="_blank" href="https://t.me/GlobixCashBot"><img src={telegram} draggable={false} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}