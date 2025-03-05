import React, { useRef, useState } from "react"

const randomNumber = Math.floor(Math.random() * (20 - 1) + 1);
const GuessGame = () => {
    const [outputText, setOutputText] = useState<null|string>(null);
    const [inputValue, setInputValue] = useState<null|string>(null);
    const button = useRef(null);
    
    console.log(inputValue);
    console.log(randomNumber);
const checkNumber = () => {

        if(randomNumber > Number(inputValue)){
            setOutputText("podana liczba jest za mala");
        }else if(randomNumber < Number(inputValue)){
            setOutputText("podana liczba jest za duza");
        }else if(randomNumber == Number(inputValue)){
            setOutputText("zgadles");
        }
    }
    return(
    <div>
    <h1>zgadnij liczbe (1-20)</h1>
    <input type="number" onChange={(event)=>setInputValue(event.target.value)}></input>
    <button type="button" onClick={checkNumber}>submit</button>
    <p>{outputText}</p>
    </div>
        )
}
export default GuessGame;
/*
DLACZEGO JAK DASZ SUBMIT TO LOSUJE NOWA LICZBE //// losowanie liczb powinno sie odpywac poza renderowaną przez useState funkcją
*/ 