import React, { useRef, useState } from "react"

const GuessGame = () => {
    const [outputText, setOutputText] = useState<null|string>(null);
    const [inputValue, setInputValue] = useState<null|string>(null);
    const button = useRef(null);
    
    console.log(inputValue);
    const randomNumber = Math.floor(Math.random() * (20 - 1) + 1);
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
JAK DZIALA USESTATE ,USEREF
DLACZEGO JAK DASZ SUBMIT TO LOSUJE NOWA LICZBE
*/ 