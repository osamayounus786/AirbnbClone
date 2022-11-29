
import './App.css';
import {NavImg} from './components/navbar';
import {Hero} from './components/hero';
import {Card} from './components/card';
import card1 from './assets/images/Card1.png'
import img from './assets/images/Card2.png'
import card3 from './assets/images/Card3.png'
import imgicon from './assets/images/star.png'
import {data} from './components/carddata'
function App() {
  console.log(data);
  return (
    <>
    <NavImg />
    <Hero />
    <div className='card-parent'>

    <Card img= {card1}
          imgicon = {imgicon}
          rating= '5.0'
          number= '(6) ●USA'
          para= 'Life lesson with Kattie Zeferes'
          para2= 'From $126'
            />

    <Card img= {img}
          imgicon = {imgicon}
          rating= '5.0'
          number= '(30) ●USA'
          para= 'Learn wedding photography'
          para2= 'From $125'
            />
     <Card img= {card1}
          imgicon = {imgicon}
          rating= '4.8'
          number= '(2) ●USA'
          para= 'Group Mountain Biking'
          para2= 'From $50'
          />       
          </div>
    </>
  
  );
}

export default App;
