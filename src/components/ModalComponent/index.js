import React from 'react'
import './index.css'
import exitImg from "../../images/exit.svg"
import { Parallax } from 'react-scroll-parallax';

export default class ModalComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`modalComponent ${this.props.hideClass ? 'hide' : ''}`}>
                <div className="modalBackground" />
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
                        </div>}
                </div>
            </div>
        )
    }
}