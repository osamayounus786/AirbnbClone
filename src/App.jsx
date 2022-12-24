
import './App.css';
import {NavImg} from './components/navbar';
import {Hero} from './components/hero';
import Card from './components/card';
import {data} from './components/carddata'
function App() {
  const mapping = data.map((item)=>{
    
      return(<Card 
        key= {item.id}
        {...item}
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


//