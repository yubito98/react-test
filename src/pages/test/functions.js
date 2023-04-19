import axios from "axios";

const catFactUrl = 'https://catfact.ninja/fact';


const getFact = async (state)=>{
    const response = await axios.get(catFactUrl);
    const data = response.data;
    
    
     const phrase = phraseCatMap.join("");
     getGif(phrase)
     return state(data);
}

const getGif = async(phrase) =>{
    const gifUrl =`https://api.giphy.com/v1/gifs/search?api_key=zqIAta0tI3xnT63BqfCRC90on6dF2fg8&q=${phrase}&limit=25&offset=0&rating=g&lang=en`
    const response = await axios.get(gifUrl);
    const data = response.data;
    state(data)
}



export {getFact, getGif};