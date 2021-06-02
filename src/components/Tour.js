import React from 'react';

const Tour = ({id, image, info, price, name}) => {
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
                        <a className="header">
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
                        {info}
                    </div>
                    
                </div>

                
                <button class="ui negative basic button">Not interested</button>
                
                
            </div>

        

                </div>
            
            
            
        </article>
    );
}

export default Tour;