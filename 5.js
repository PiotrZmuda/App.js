// 5. Stwórz obiekt:
// a) pusty obiekt,

const person = {}

// b) obiekt o nazwe person zawierający klucz name i jego wartość 'Iza'

const person ={
    name : 'Iza'
}


// c) obiekt o nazwe personDetails zawierający dane o osobie jak name, lastName, age, drivingLicence
// gdzie ten ostatni powinien być booleanem, w zależności od tego czy osoba ma prawo jazdy czy nie

const personDetails = {
    name: 'Piotrek',
    lastName: 'Paweł',
    age: 30,
    Licence:{
        drivingLicence: true
    },
}
// d) z obiektu personDetails zrób consol.log samego wieku,

console.log(personDetails.age)

// e) zrób console.log całego obiektu,

console.log(personDetails)

// f) stwórz obiekt, który zawiera marke, kolor, rok produkcji auta oraz tablicę z
// latami w których samochód był sprzedany innemu właścicielowi, możesz wpisać dowolny
// 3 daty zawierające tylko rok, chodzi tutaj o dodanie tablicy wewnątrz obiektu,

const car = {
    carName: 'ford',
    color: 'black',
    yearOfproduction: 1980,
    changeOfowner: [1990, 2000,2010]
    }
    

