import React from 'react';
import HeaderComponent from './components/HeaderComponent'
import WelcomeComponent from './components/WelcomeComponent'
import SliderComponent from './components/SliderComponent'
import PossibilityComponent from './components/PossibilityComponent'
import SofaComponent from './components/SofaComponent'
import CardsComponent from './components/CardsComponent'
import ForPeopleComponent from './components/ForPeopleComponent'
import SecurityComponent from './components/SecurityComponent'
import KnowledgesComponent from './components/KnowledgesComponent'
import P2PComponent from './components/P2PComponent'
import StartBotComponent from './components/StartBotComponent'
import PrefooterComponent from './components/PrefooterComponent'
import FooterComponent from './components/FooterComponent'

import './css/main.css'
import './css/mobile.css'

import { Parallax } from 'react-scroll-parallax';

class App extends React.Component {
  render() {
    return (
      <div className="content">
        <HeaderComponent />
        <WelcomeComponent />
        <SliderComponent />
        <PossibilityComponent />
        <SofaComponent />
        <CardsComponent />
        <ForPeopleComponent />
        <SecurityComponent />
        <KnowledgesComponent />
        <P2PComponent />
        <StartBotComponent />
        <PrefooterComponent />
        <FooterComponent />
      </div>
    );
  }
}

export default App;