import React from 'react'
import './index.css'
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export default class SliderComponent extends React.Component {
    render() {

        const cards = [
            {
                title: `Быстрые переводы`,
                text: `между пользователями телеграмм<br />
                без комиссии`,
                background: `#A6A6A6`,
                textColor: `#FFFFFF`,
            },
            {
                title: `Быстрые переводы`,
                text: `между пользователями телеграмм<br />
                без комиссии`,
                background: `#F35421`,
                textColor: `#FFFFFF`,
            },
            {
                title: `Покупка и продажа`,
                text: `bitcoin, etherium, usdt пару кликов,<br />
                с минимальными комиссиями`,
                background: `#FEBD44`,
                textColor: `#FFFFFF`,
            },
            {
                title: `Храни активы`,
                text: `всегда под рукой и с любого устройства<br />
                прямо в мессенджере`,
                background: `#A3FF5E`,
                textColor: `#000000`,
            },
            {
                title: `Надежность`,
                text: `лучшего мессенджера<br />
                в мире`,
                background: `#EB001B`,
                textColor: `#FFFFFF`,
            },
        ];

        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            centerMode: true,
            slidesToScroll: 1,
            centerPadding: '50px',
            responsive: [
                {
                    breakpoint: 1450,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 1150,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        };

        return (
            <div className="sliderComponent">
                <div className="container-fluid section">
                    <div className="row">
                        <div className="col-md-12">
                            <Slider {...settings}>
                                {cards.map((card, index) => {
                                    return (
                                        <div key={index}>
                                            <div
                                                style={{ background: `${card.background}` }}
                                                className="sliderCard">
                                                <div
                                                    style={{ color: card.textColor }}
                                                    className="sliderCard_title bold"
                                                    dangerouslySetInnerHTML={{ __html: card.title }}>
                                                </div>
                                                <div
                                                    style={{ color: card.textColor }}
                                                    className="sliderCard_text"
                                                    dangerouslySetInnerHTML={{ __html: card.text }}>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}