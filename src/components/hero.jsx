 import heroimg from '../assets/images/hero2.png'
 function Hero(){
    return(
        <section className="hero-sec">
            <img src={heroimg} alt="hero section" className='hero-img'/>
            <h2 className='hero-header'>Online Experience</h2>
            <p className='hero-text'>Join unique interactive activities lead by <br /> one of a kind hosts-all leaving without <br />home.</p>
        </section>

        
    );
 }
 export {Hero};