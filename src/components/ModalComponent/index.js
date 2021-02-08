import React from 'react'
import './index.css'
import exitImg from "../../images/exit.svg"
import { Parallax } from 'react-scroll-parallax';
import popupImg1 from "../../images/popupImg1.png";
import popupImg2 from "../../images/popupImg2.png";
import popupImg3 from "../../images/popupImg3.png";

export default class ModalComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`modalComponent ${this.props.hideClass ? 'hide' : ''}`}>
                <div className="modalBackground" onClick={() => this.props.onClose()} />
                <div className="modalWrapper">
                    <img
                        alt=""
                        src={exitImg}
                        onClick={() => this.props.onClose()}
                        draggable={false} />
                    {this.props.isModalAForm ?
                        <div>
                            <div className="row justify-content-center">
                                <div className="title bold">
                                    Есть вопросы?
                        </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="subtitle">
                                    Задать или пообщаться в чате?
                        </div>
                            </div>
                            <div className="row justify-content-center">
                                <form>
                                    <div className="row justify-content-between">
                                        <div className="col-md-6">
                                            <h5>Ваше имя</h5>
                                            <input type="text" />
                                        </div>
                                        <div className="col-md-6">
                                            <h5>Ваш e-mail</h5>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="row justify-content-between">
                                        <div className="col-md-12">
                                            <h5>Ваш вопрос</h5>
                                            <textarea />
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col d-flex justify-content-center">
                                            <input type="submit" className="bold" value="Отправить" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        :
                        <div>
                            <div className="infomodal_wrapp">
                                <div className="infomodal_imgBox">
                                    <img src={popupImg1} draggable={false} alt="" />
                                    <img src={popupImg2} draggable={false} alt="" />
                                    <img src={popupImg3} draggable={false} alt="" />
                                </div>
                                <div className="infomodal_textBox">
                                    <div className="infomodal_header">
                                        <span className="infomodal_title">Как переводить?</span>
                                        <span className="infomodal_subtitle">между пользователями</span>
                                    </div>
                                    <div className="infomodal_descr">
                                        Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст
                                    </div>
                                    <div className="infomodal_imgBox infomodal_imgBox_mobile">
                                        <img src={popupImg1} draggable={false} alt="" />
                                        <img src={popupImg2} draggable={false} alt="" />
                                        <img src={popupImg3} draggable={false} alt="" />
                                    </div>
                                    <div className="infomodal_btn">Попробовать</div>
                                </div>
                            </div>
                        </div>}
                </div>
            </div>
        )
    }
}