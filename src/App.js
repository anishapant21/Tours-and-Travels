import React, { useEffect, useState } from 'react';
import Loading from './components/Loading';
import Tours from './components/Tours'

const url='https://course-api.com/react-tours-project';

const App = () => {
    const [loading, setLoading] = useState(true);
    const [tours, setTours]= useState([]);

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
    return (
        <main>
            <Tours tours={tours} />
        </main>
    );
}

export default App;