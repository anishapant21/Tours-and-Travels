import React, { useState } from 'react';

const Tour = ({id, image, info, price, name, removeTour}) => {
    const [readMore, setReadMore] = useState(false)
    return (
        <article>
            <br />
            <div className="ui raised very padded text container segment">
                
            
                <div className="ui raised fluid card">
                <div className="ui image">
                    <img style={{maxHeight:'550px'}} src={image} alt={name} />
                </div>
                <div className="content">
                    <div className="ui two column very relaxed grid">
                        <div className="column">
                        <a href='/' className="header">
                        <b>{name} </b>
                    </a>

                        </div>
                        <div className="column">
                        <div className="ui right floated meta">
                        ${price}
                    </div>
                        </div>
                    </div>
                    <br />
                    
                   
                    <div className='description'>
                    <p>{readMore? info:`${info.substring(0, 200)}...`}
                        <span style={{color:'blue', cursor:'pointer'}} href='/' onClick={()=>setReadMore(!readMore)}> {readMore? ' Show less' : ' Read more'}
                        </span> </p>
                    </div>
                    
                </div>

                
                <button className="ui negative basic button" onClick={()=> removeTour(id)}>Not interested</button>
                
                
            </div>

        

                </div>
            
            
            
        </article>
    );
}

export default Tour;