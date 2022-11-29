
function Card({ img,imgicon,rating,number,para,para2}){
    
    return(
        <>
        <div className="card">
            <img src={img} alt="wedding" className='card-img' />
            <div className='card-stats'>
                <img src={imgicon} alt="rating star" />
                <span>{rating}</span>
                <span className='gray'>{number}</span>
                </div>
                <p>{para}</p>
                <p><span className='bold'>{para2}</span> / peroson</p>
            
        </div>
        </>
    )
}

export {Card};