var person = {
    name: "marcin",
    age: 30,
    city: "warszawa"
};
var array = [1, 4, 5, 77, 32, 10, 0, 33, 2, 65];
array.sort(function (a, b) { return b - a; });
function Marcin() {
    var link = document.createElement('a');
    link.href = 'https://google.com';
    link.textContent = 'Google';
    var personText = document.createElement('p');
    personText.textContent = person.name, person.age, person.city;
    document.createElement('ul');
    for (var i = 0; i < 10; i++) {
        document.createElement('li');
        var litxt = document.createElement('a');
        litxt.textContent = String(array[i]);
    }
}
Marcin();
