// 6. Warunki i zmienne:
// a) Podaj przykład i różnice między typem wartościowym, a referencyjnym? Czyli czym
// różnią się zmienne proste od złożonych?

//W skład typów prostych wchodzą : string, number, boolean, undefined,null.

const a = 3;
let b = a;
b = b + 5;
console.log(a)
console.log(b)

// Wartości w typach prostych znaczy tyle, że za każdym razem kiedy przypisuje się wartość do zmiennej, to jest tworzona kopia tej wartości.


//Obiektem (czyli typem złożonym),jest każdy typ który nie jest typem wartościowym i używamy gdy mamy większą ilość wartośći jak np.obiekt, tablice, funkcje

shoppingList = [
    'banana',
    'pizza',
    'beer',
    'butter',
    'cheese'
    ]


// b) Stwórz obiekt person zawierający dane takie jak imie, nazwisko, wiek, posiadanie prawa
// jazdy(true lub false) oraz czy osoba jest pijana(rowniez true false), następnie
// stwórz instrukcje warunkową która w zależnosci od tego jakie dane będą w zmiennych
// wypisze nam czy dana osoba może jechać autem czy nie, weź pod uwage wszystkie aspekty
// jak wiek, bycie pijanym oraz posiadanie prawa jazdy,

let person = {
    name: 'Piotrek',
    surname: 'Zmuda',
    age: 30,
    drivingLicence: true,
    drunk: false,
    }
    
    if(person.age < 18){
    console.log("Jesteś jeszcze zbyt młody by legalnie kierować autem i pić alkohol")
    } else if(person.age > 18 && person.drivingLicence == false){
    console.log("Możesz już legalnie sporzywać alkohol ale nie możesz kierować autem")
    } else if (person.age > 18 && person.drivingLicence == true, person.drunk == false){
    console.log("Możesz już legalnie sporzywać alkohol i kierować autem bo masz prawojazdy i jesteś trzeźwy!!!")
    } else {
    console.log("Nie możesz kierować pod wpływem alkoholu")
    }

// c) Znasz sposób jak zdestrukturyzować obiekt tak aby móc w bardzo łatwy sposób
// użyć kluczy w nim zawartych, np. majac obiekt: 
// const car = {
//   name: 'mustang',
//   productionYear: 2020,
//   color: 'red'
// }
// Chciałbym utworzyć następującą zmienną: 
// const result = `Moje auto to ${name} i zostało wyprodukowane w roku ${productionYear}` 
// Jak zrobić aby taka zmienna wyświetliła poprawne dane z obiektu, nie zmieniając treści zmiennej?


//Odp należy na początku klucza dodać nazwę obiektu i dodać . pomiędzy obiektem a kluczem  (tzw. dot notation)
const car = {
    name: 'mustang',
    productionYear: 2020,
    color: 'red'
  }
  const result = `Moje auto to ${car.name} i zostało wyprodukowane w roku ${car.productionYear}` 

  console.log(result)


// d) Skróć zapis kodu jak najbardziej się da bez usuwania zmiennej isAdult
// (zrób to na dwa sposoby, bez użycia ternary operatora i z uzyciem):
// const isAdult = true
// if(isAdult === true) {
//   return 'Możesz kupić alkohol
// } else if(isAdult === false) {
//   return 'Nie możesz kupić alkoholu, jesteś nieletni!'
// }

isAdult = false? console.log('Możesz kupić alkohol') : console.log('Nie możesz kupić alkoholu, jesteś nieletni')


//ternary operator
const isAdult = false? 'Możesz kupić alkohol' : 'Nie możesz kupić alkoholu, jesteś nieletni'

console.log(isAdult)