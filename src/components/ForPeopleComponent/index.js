import React from 'react'
import './index.css'
import forpeopleImg from "../../images/forpeople.png"
import ScrollAnimation from 'react-animate-on-scroll';
import { Parallax } from 'react-scroll-parallax';
import ModalComponent from '../ModalComponent'
import coin1 from "./img/coin1.png"

export default class ForPeopleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hideClass: true,
            isModalAForm: true
        }
    }

    onClose() {
        this.setState({ hideClass: true });
    }

    openModal() {
        this.setState({
            hideClass: false,
            isModalAForm: true
        })
    }

    render() {
        return (
            <>
                <div className="forpeople">
                    <img src={coin1} className="coin1" alt="" draggable={false} />
                    <div className="container-fluid section">
                        <div className="row">
                            <div className="col-md-6 column">
                                <h2 className="extraBold">Глобикс<br />
                            для людей</h2>
                                <h5>Наше сообщество растёт постоянно.<br />
                            Мы совершенствуем нашего бота и прислушиваемся<br />
                            к нашим пользователям. <span className="bold">Сделаем его лучше вместе!</span>
                                </h5>
                                <a onClick={() => this.openModal()} className="button" target="_blank">Изучить бота</a>
                            </div>
                            <div className="col-md-6 column">
                                <ScrollAnimation
                                    // offset={600}
                                    animateOnce={true}
                                    animateIn="fadeInRight">
                                    <img src={forpeopleImg} className="img1" draggable={false} alt="" />
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
                <ModalComponent
                    isModalAForm={this.state.isModalAForm}
                    hideClass={this.state.hideClass}
                    onClose={() => this.onClose()} />
            </>
        )
    }
}