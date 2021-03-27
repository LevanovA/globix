import React from 'react'
import './index.css'
import knowledgesImg from "../../images/knowledges.png"
import ScrollAnimation from 'react-animate-on-scroll';
// import { Parallax } from 'react-scroll-parallax';
import $ from 'jquery'

export default class KnowledgesComponent extends React.Component {

    componentDidMount() {
        var counterNum = 227365;

        $(document).ready(function () {
            counterControl($('.userNumBar'), counterNum);

            counterControl($('.userImgNumBar'), counterNum, {
                isDigitBg: true,
                comma: true
            });
        });

        function counterControl(target, number, config) {
            var _target = target;
            var number = number.toString();
            var numArray = number.split("");
            // var isBg = false;
            var defaults = {
                speed: 3000,
                isDigitBg: false,
                comma: true
            }
            $.extend(defaults, config);

            _target.empty();
            _target.html('<span class="pplNum"></span>');

            for (var i = 0; i < numArray.length; i++) {
                var html = '';
                numArray[i] = parseInt(numArray[i], 10);
                if (defaults.isDigitBg) {
                    html = '<span class="digit-con"><span class="digit' + i + '"></span></span>';
                } else {
                    html = '<span class="digit-con"><span class="digit' + i + '">0<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>0<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br></span></span>';
                }
                _target.find('.pplNum').append(html);
            }

            if (defaults.comma) {
                _target.find(".digit-con:nth-last-child(3n+4)").after("<span class='comma'>&nbsp;</a>");
            }

            checkScroll();

            $(window).bind('scroll', function () {
                checkScroll();
            });

            function checkScroll() {
                if (_target.offset().top < $(window).scrollTop() + $(window).height()) {
                    for (var i = 0; i < numArray.length; i++) {
                        var increment = _target.find('.digit-con').outerHeight();
                        _target.find('.digit' + i).delay(i * 300).animate({ top: -((increment * numArray[i]) + (increment * 10)) }, defaults.speed, 'linear');
                    }
                }
            }

        }
    }

    render() {
        return (
            <div className="knowledges">
                <div className="container-fluid section">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="extraBold extraBold_modile">
                                Делимся<br />
                                знаниями</h2>
                            <ScrollAnimation
                                offset={600}
                                animateOnce={true}
                                animateIn="fadeInLeft">
                                <img src={knowledgesImg} draggable={false} alt="" />
                            </ScrollAnimation>
                        </div>
                        <div className="col-md-6 mobile_direction">
                            <h2 className="extraBold">
                                Делимся<br />
                                знаниями</h2>
                            <h5>
                                Подпишитесь на нас в социальных сетях,
                                чтобы первыми узнавать о новых возможностях,
                                мероприятиях и других активностях нашего бота
                            </h5>
                            <div>
                                <div class="userNumBar"></div>
                                <div class="userImgNumBar"></div>
                            </div>
                            <h4 className="bold">
                                активных пользователей
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}