import { useEffect, useState } from "react";
import axios from "axios";
//import {getFact, getGif} from './functions'

const test = () =>{
    const [fact, setfact] = useState(null);
    const [gif, setGif] = useState(null);

    const catFactUrl = 'https://catfact.ninja/fact';

    const getGif = async(phrase) =>{
        const gifUrl =`https://api.giphy.com/v1/gifs/search?api_key=zqIAta0tI3xnT63BqfCRC90on6dF2fg8&q=${phrase}&limit=25&offset=0&rating=g&lang=en`
        const response = await axios.get(gifUrl);
        const data = response.data.data;
        setGif(data)
        console.log(data)
    }

    const getFact = async ()=>{
        await axios.get(catFactUrl)
        .then((response) =>{
            setfact(response.data);
            const splitFact = response.data.fact.split(" ");
            const phraseCat = splitFact.filter((item, index) => index <= 2);
            const phraseCatMap = phraseCat.map((item,index) =>{
                if(index < 2){
                    item = item.concat("+");
                    return item;
                }else{
                    return item = item;
                }
            })
            const string = phraseCatMap.join("")
            getGif(string);
        })
    }
    
    

    useEffect(()=>{
        getFact();
        getGif();
    },[])


    return(
        
        <>
            <h1>Test Page</h1>
            <div style={{display:"flex"}} >
                {
                   gif ? (
                    <img src={gif[0].images.original.url} />
                   ):"there is no info"
                   }
                {
                fact ? (
                    <h2>{fact.fact}</h2>
                ) : "There is no facts"
            }

            </div>
        </>
    )
}


export default test