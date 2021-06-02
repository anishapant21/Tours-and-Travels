import React from 'react';
import Tour from './Tour';

const Tours = ({tours}) => {
    return (
        <section>
            <div>
                <br />
                <h1 className="ui center aligned header">
                <i class="plane icon"></i>
                    Our tours  
                </h1>
            </div>
            
            <div>
                {tours.map((tour)=>{
                    return <Tour key={tour.id} {...tour} />
                })}
            </div>
        </section>
    );
}

export default Tours;