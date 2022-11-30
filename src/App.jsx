
import './App.css';
import {NavImg} from './components/navbar';
import {Hero} from './components/hero';
import Card from './components/card';
import {data} from './components/carddata'
function App() {
  const mapping = data.map((item)=>{
    
      return(<Card 
        key= {item.id}
        img={item.img}
        imgicon= {item.imgicon}
        rating= {item.rating}
        number= {item.number}
        para={item.para}
        para2= {item.para2}
        openSpots= {item.openSpots}
      />) 
  })
  return (
    <>
    <NavImg />
    <Hero />
    <div className='card-parent'>
    
    {mapping}
    
          </div>
    </>
  
  );
}

export default App;
