// 6. Warunki i zmienne:
// a) Podaj przykład i różnice między typem wartościowym, a referencyjnym? Czyli czym
// różnią się zmienne proste od złożonych?

//W skład typów prostych wchodzą : string, number, boolean, undefined,null.

const a = 3;
let b = a;
b = b + 5;
console.log(a)
console.log(b)

// Pomimo że do zmiennej b jest przypisana wartość zmiennej a, to nie mają ze sobą związku, co przedstawia rysunek. Przekazanie wartości w typach prostych znaczy tyle,
// że za każdym razem kiedy przypisuje się wartość do zmiennej, to jest tworzona
// kopia tej wartości.


//Obiektem (czyli typem złożonym),jest każdy typ który nie jest typem wartościowym i używamy gdy mamy większą ilość wartośći jak np.obiekt, tablice, funkcje

shoppingList = [
    'banana',
    'pizza',
    'beer',
    'butter',
    'cheese'
    ]
    