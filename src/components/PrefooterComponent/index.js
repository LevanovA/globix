import React from 'react'
import './index.css'
import iphoneRotate from "../../images/iphoneRotate.png"
import ScrollAnimation from 'react-animate-on-scroll';
import { Parallax } from 'react-scroll-parallax';
import ModalComponent from '../ModalComponent'

export default class PrefooterComponent extends React.Component {
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
                <div className="prefooter">
                    <div className="container-fluid section">
                        <div className="row">
                            <div className="col-md-6 column">
                                <h2 className="extraBold">Всё в твоих<br /> руках</h2>
                                <h5>простой доступ к активам из любой точки мира</h5>
                                <a onClick={() => this.openModal()} className="button" target="_blank">Начать использовать</a>
                            </div>
                            <div className="col-md-6 column">
                                <ScrollAnimation
                                    offset={600}
                                    animateOnce={true}
                                    animateIn="fadeInRight">
                                    <img src={iphoneRotate} draggable={false} alt="" />
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