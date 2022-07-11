import './scss/main.css';
import Header from './components/layout/Header/Header';
import Hero from './components/hero/Hero';
import Story from './components/story/Story';
import Features from './components/features/Features';
import Pricing from './components/pricing/Pricing';
import Learn from './components/learn/Learn';
import Reviews from './components/reviews/Reviews';
import Questions from './components/questions/Questions';

function App() {
  return (
    <div className="App">
       <div className="header__wrapper">
        <Header />
        <Hero/>
       </div>
        <Story/>
        <Features/>
        <Pricing/>
        <Learn/>
        <Reviews/>
        <Questions/>
    </div>
  );
}

export default App;
