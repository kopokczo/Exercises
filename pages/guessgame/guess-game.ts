const inputNumber = document.getElementById("inputtxt") as HTMLInputElement;
const outputText = document.getElementById("text") as HTMLInputElement;
const button = document.getElementById("submitbtn") as HTMLInputElement;

let randomNumber: number = Math.random() * (20 - 1) + 1;

function checkNumber(): void{
    if(randomNumber > Number(inputNumber.textContent)){
        outputText.textContent = "podana liczba jest za mala";
    }else if(randomNumber < Number(inputNumber.textContent)){
        outputText.textContent = "podana liczba jest za duza";
    }else if(randomNumber == Number(inputNumber.textContent)){
        outputText.textContent = "zgadles! ! !";
    }
}

button.addEventListener("click", checkNumber);