// 2. Za pomocą console.log wyświetl wyniki poniższych równań przypisując je do zmiennej:
// a) przypisz do zmiennej wynik reszty z dzielenia 10 przez 4

const a = 10
const b = 4
const c = a % b

console.log(c)

// b) utwórz i zrób console.log zmiennej zawierającej zdanie "Tomasz ma 33 lata" 
// gdzie 33 i "Tomasz" to również będą zmienne

const name = "Tomasz"
const age = 33

console.log(name + " ma " + age + " lata")
console.log(`Tomasz ma ${age} lata`)

// c) Utwórz string "jan kowalski" na dwa sposoby dodając przerwe między wyrazami, 
// które są nastepującymi stringami: const firstName = 'jan', const lastName = 'kowalski'
// (Podpowiedź: możesz użyć sposobu standardowego i z użyciem ``)

const firstName = 'jan'
const lastName = 'kowalski'

console.log(firstName + " " + lastName)  // sposób 1

console.log(`jan ${lastName}`)          // spodób 2

