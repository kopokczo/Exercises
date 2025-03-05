import React, { useRef, useState } from "react"

const GuessGame = () => {
    const [outputText, setOutputText] = useState<null|string>(null);
    const [inputValue, setInputValue] = useState<null|string>(null);
    const button = useRef(null);
    const randomNumber = useRef(Math.floor(Math.random() * 20) + 1);
    
    console.log(inputValue);
    console.log(randomNumber);
const checkNumber = () => {

        if(randomNumber.current > Number(inputValue)){ //przez to ze randomnumber to juz nie liczba tylko ref musi byc .current
            setOutputText("podana liczba jest za mala");
        }else if(randomNumber.current < Number(inputValue)){
            setOutputText("podana liczba jest za duza");
        }else if(randomNumber.current == Number(inputValue)){
            setOutputText("zgadles");
        }
    }
    return(
    <div>
    <h1>zgadnij liczbe (1-20)</h1>
    <input type="number" onChange={(event)=>setInputValue(event.target.value)}></input>
    <button type="button" onClick={checkNumber}>submit</button>
    <button type="button" onClick={() => {randomNumber.current = Math.floor(Math.random() * (20 - 1) + 1);}}>reset</button>
    <p>{outputText}</p>
    </div>
        )
}
export default GuessGame;
/*
DLACZEGO JAK DASZ SUBMIT TO LOSUJE NOWA LICZBE //// losowanie liczb powinno sie odpywac poza renderowaną przez useState funkcją
*/ 