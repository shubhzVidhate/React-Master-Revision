import { useEffect, useState } from "react";
import axios from 'axios';


const useFetch = (url) => {
    const [items, setItems] = useState([]);

    useEffect( () => {

        axios.get(url).then( ( res )=>{

            setItems(res.data.meals);

        } )

    }, [url] );

    return items;

}

export default useFetch;