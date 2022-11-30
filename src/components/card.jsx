


function Card(props){
    
    return(
        <>
        <div className="card">
            <img src={props.img} alt="wedding" className='card-img' />
            <div className='card-stats'>
                <img src={props.imgicon} alt="rating star" />
                <span>{props.rating}</span>
                <span className='gray'>{props.number}</span>
                </div>
                <p>{props.para}</p>
                <p><span className='bold'>{props.para2}</span> / peroson</p>
            
        </div>
        </>
    )
}

export default Card;