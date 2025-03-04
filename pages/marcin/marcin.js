var person = {
    name: "marcin",
    age: 30,
    city: "warszawa"
};
function Marcin() {
    var link = document.createElement('a');
    link.href = 'https://google.com';
    link.textContent = 'Google';
    
    var personText = document.createElement('p');
    personText.textContent = person.name, person.age, person.city;
}


Marcin();