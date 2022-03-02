// 4. Stwórz tablicę:
// a) 3 elementową z cyframi od 1 do 3

const arryOfNumbers = [1,2,3]

// b) 3 elementową z markami aut,

const arryOfCars = ["ford", "bmw", "dodge"]

// c) 3 elementową składającą się z wartości true, false i true

const isBoolean = [true, false, true]


// d) pustą tablicę,

const emptyAryy = []

// e) składającą się z 5 dowolonych wartości z pomieszanymi typami,

const mixedArry = ["Piotrek", 5, "Magda", 4, 10]

// f) zrób console.loga w którym z powyższej tablicy wyświetlasz wartość która jest
// druga w kolejności od początku,

console.log(mixedArry[1])


// g) *** Jaka właściwość i jak użyta słuzy do wyświetlenia długości tablicy? Stwórz własną tablicę
// z 3 elementami i wyświetl za pomocą consol.log jej długość,

const arryOfCars = ["ford", "bmw", "dodge"]

console.log(arryOfCars.length)           //właściwość length użyta w konsole po. pokazuje nam ile elementów mamy w tablicy


// h) *** Czy wiesz jak stworzyć pustę tablicę ? dodać do niej losową wartość i wyświetlić za pomocą
// console.loga już zmienioną tablicę?

let shoppingList = [];
shoppingList.push("juice", "pasta")     // dodaje element na koniec tablicy za pomocą .push lub .unshift na początek tablicy
console.log(shoppingList)


// i) *** Stwórz tablicę z obiektami, które będą zawierały imię, nazwisko i wiek osoby,
// tablica powinna zawierać 3 takie obiekty i wyświetl imię drugiej osoby z tej tablicy,
// j) *** stwórz zmienną z wartością = 2 i powiedz czy da sie tą zmienną umieścić w 
// deklaracji tablicy tak aby uzyskać tablicę const arr = [2] ? 