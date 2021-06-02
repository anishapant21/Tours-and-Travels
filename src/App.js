import React, { useEffect, useState } from 'react';
import Loading from './components/Loading';
import Tours from './components/Tours'

const url='https://course-api.com/react-tours-project';

const App = () => {
    const [loading, setLoading] = useState(true);
    const [tours, setTours]= useState([]);

    const removeTour = (id) => {
        const newTours = tours.filter((tour)=> tour.id !==id);
        setTours(newTours);
    }

    //fetch the data
    const fetchTours = async () => {
        setLoading(true);

        try{
            const response = await fetch(url);
            const tours = await response.json();
            setLoading(false);
            setTours(tours);

        } catch (error) {
            setLoading(false);
            console.log(error);

        }
       
    };

    useEffect(()=>{
        fetchTours();
    }, []);

    if(loading){
        return(
            <Loading />
        );
    }

    if(tours.length === 0){
        return (
            <main>
                <br />
                <div className="ui header">
                    <h1 className="ui center aligned header">No tours left <br /> <br />
                    <button className="ui blue button" onClick={()=> fetchTours()}>Refresh</button>
                    
                    </h1>
                    
                </div>
                
            </main>

        );
    }
    return (
        <main>
            <Tours tours={tours} removeTour={removeTour} />
        </main>
    );
}

export default App;