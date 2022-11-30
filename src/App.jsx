
import './App.css';
import {NavImg} from './components/navbar';
import {Hero} from './components/hero';
import Card from './components/card';
import {data} from './components/carddata'
console.log(data)
function App() {
  const mapping = data.map((item)=>{
    console.log(item.img)
      return(<Card 
        img={item.img}
        imgicon= {item.imgicon}
        rating= {item.rating}
        number= {item.number}
        para={item.para}
        para2= {item.para2}
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
