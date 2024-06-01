//------------WPROWADZENIE--------------------------------

// Zadanie 2
// Przy użyciu JS wyświetl w tzw. konsoli przeglądarki tekst "Witaj świecie!".

// console.log("Witaj świecie!");
// ---------------------------------

//Zadanie 3
// Zdefiniuj zmienną tekst o wartości "Witaj świecie!". Wyświetl w konsoli wartość zmiennej.
// const tekst = "Witaj świecie!";
// console.log(tekst);
//------------------------------------

// Zadanie 4
// Zdefniuj stałą o nazwie e i wartości liczby Eulera czyli 2.718228. Stałą e wyświetl przy użyciu wyskakującego okienka.

// const e = 2.718228;
// alert(e);
//----------------------------------------------

// Zadanie 5
// Przypisz zmiennej o nazwie zmienna najpierw wartość liczbową 12, wyświetl typ w konsoli, następnie wartość tekstową "Język Java Script" i znowu wyświetl typ w konsoli.

// let zmienna = 12;
// console.log(typeof zmienna);

// zmienna = "Język Java Script";
// console.log(typeof zmienna);
//-------------------------------------------------

// Zadanie 6
// Zdefiniuj zmienną o nazwie opis i wartości "JavaScript to język programowania.". Wypisz do konsoli tekst Informacja: i treść zmiennej opis.

// const opis = "JavaScirpt to język programowania";
// console.log("Informacja: " + opis);
//-----------------------------------------------------------

// Zadanie 7
// Zdefiniuj zmienną a o wartości 21 i b o wartości 17. W oknie alert() wypisz działanie dodawania tych zmiennych tj. np 2 + 5 = 7.

// const a = 21;
// const b = 17;

// alert(a + " + " + b + " = " + (a + b));
//--------------------------------------------------------------

// Zadanie 8
// Pobierz za pomocą instrukcji prompt() wartość liczbową i wyświetl w konsoli komunikat Pobrana wartość: pobrana liczba. W razie problemu odśwież stronę.
// let number = prompt("Wpisz liczbę");
// console.log("Pobrana wartość: " + number);

//---------"Wstrzykiwanie" kodu HTML do wybranego elementu----------------------------------------

// Zadanie 1
// Do treści strony wstaw div-a z id="wynik". Zdefiniuj dwie zmienne a o wartości 15 i b o wartości 5. Tekst wynik: i wynik dodawanie zmiennych wstrzyknij do div-a z id="wynik".
// const a = 15;
// const b = 5;

// const suma = a + b;
// const wynik = document.getElementById("wynik");

// wynik.innerHTML = "Wynik: " + suma;
//---------------------------------------------------------------------

// Zadanie 2
// Do treści strony wstaw div-a z id="wynik". Zdefiniuj dwie zmienne a o wartości 75 i b o wartości 123. Do div-a zid="wynik" wstrzyknij działanie dodawania zmiennych jako nagłówek 1 stopnia.

// const a = 75;
// const b = 123;

// const suma = a + b;
// const wynik = document.getElementById("wynik");

// wynik.innerHTML = "<h1>" + a + " + " + b + " = " + suma + "</h1>";
//----------------------------------------------------------------------------

// Zadanie 3
// Użyj konstrukcji ${zmienna} i odwróconych apostrofów ` (na klawiszu ~) są to tzw. template strings. Zdefiniuj dwie zmienne a o wartości 75 i b o wartości 123. Do div-a zid="wynik" wstrzyknij działanie dodawania zmiennych jako nagłówek 1 stopnia.

// const a = 75;
// const b = 123;

// const suma = a + b;
// const wynik = document.getElementById("wynik");

// wynik.innerHTML = `<h1>${a} + ${b} = ${suma}</h1>`;

// ------------------Pętle-------------------------------------------------------------------------

// Zadanie 1
// Napisz kod JS który w div-ie z id=wynik wyświetli liczby od 1 do 100 rozdzielone przecinkami.

// for (let i = 1; i < 101; i++) {
//   const liczby = document.getElementById("wynik");
//   liczby.innerHTML = liczby.innerHTML + i + ", ";
// }
//-----------------------------------------------------------------

// Zadanie 2
// Skorzystaj z operatora += by uprościć kod. Napisz kod JS który w div-ie z id=wynik wyświetli liczby od 1 do 100 rozdzielone przecinkami.

// for (let i = 1; i <= 100; i++) {
//   const wynik = document.getElementById("wynik");
//   wynik.innerHTML += i + ", ";
// }
//-----------------------------------------------------------------

// Zadanie 3
// Napisz kod HTML, który wyświetli tabelę z dwoma kolumnami. W pierwszej kolumnie mają być liczby od 0 do 9. W drugiej kolumnie mają się znajdować drugie potęgi liczb z pierwszej kolumny. Napisz, kod CSS, który wyświetli krawędzie.

// let table = document.getElementById("table");
// let liczby = "Liczby";
// let potegaLiczby = "Potęga liczby";
// let list = "<table>";
// for (let i = 0; i <= 9; i++) {
//   list += `<tr><td>${i}</td><td>${i * i}</td></tr>`;
// }

// list += "</table>";

// table.innerHTML = list;
//--------------------------------------------------------------------

// Zadanie 4
// Zapoznaj się z przykładem przedstawiającym działanie pętli do while i do. Choć podobne różnie je kluczowy szczegół.
// Odpowiedź:
// Pętla DO WHILE - wykona się raz przed sprawdzeniem warunku.
// Pętla DO - wykona się tylko, jeśli warunek będzie spełniony.

//-----------------Instrukcje warunkowe---------------------------------------------------------

// Zadanie 1
// Zdefiniuj zmienną nazwij ją liczba. Jeśli będzie dodatnia w div-ie z id="opis"ma się wyświetlić np. tekst "21 - Liczba większa od zera."napisany jako nagłówek 1 stopnia. Jeśli nie ma się pokazać np. tekst: "-3 - Zero lub liczba ujemna.".

// let number = -3;
// let answer = document.getElementById("opis");
// if (number > 0) {
//   answer.innerHTML = `<h1>${number} - liczba większa od zera.</h1>`;
// } else {
//   answer.innerHTML = `<h1>${number} - Zero lub liczba ujemna.</h1>`;
// }
//----------------------------------------------------------------------------------

// Zadanie 2
// Zdefiniuj zmienną nazwij ją liczba. Jeśli będzie dodatnia w div-ie z id="opis"ma się wyświetlić np. tekst "dodatnia". Jeśli nie ma się pokazać np. tekst: "0/ujemna". Wykorzystaj instrukcję warunkową if ze składnią wykorzystującą symbole ? :.

// let number = 0;

// opis.innerHTML =
//   number > 0
//     ? "<h1>liczba większa od 0</h1>"
//     : "<h1>liczba mniejsza bądź równa 0</h1>";
//--------------------------------------------------------------------------

// Zadanie 3
// Zdefiniuj zmienną nazwij ją liczba. Jeśli będzie dodatnia w div-ie z id="opis"ma się wyświetlić np. tekst "21 - Liczba większa od zera."napisany jako nagłówek 1 stopnia. Dla liczb ujemnych ma się pokazać np. tekst: "-3 - Liczba ujemna.". Dla zera ma się wyświetlać tekst "- Zero".. Skorzystaj z instrukcji if - else if.

// let number = 2837;

// if (number > 0) {
//   opis.innerHTML = `<h1>${number} - liczba większa od zera</h1>`;
// } else if (number < 0) {
//   opis.innerHTML = `<h1>${number} - liczba ujemna</h1>`;
// } else {
//   opis.innerHTML = `<h1>${number} - zero</h1>`;
// }
//---------------------------------------------------------------------

// Zadanie 4
// Napisz kod, który dla zdefiniowanej szkolnej oceny (1,2,3,4,5,6) - zmienna ocena - wypisze jej opis słowny np. dostateczny. Informacja ma być wypisana w div-ie id="opisoceny".

// let ocena = 3;

// switch (ocena) {
//   case 1:
//     opisoceny.innerHTML = "niedostateczny";
//     break;
//   case 2:
//     opisoceny.innerHTML = "dopuszczający";
//     break;
//   case 3:
//     opisoceny.innerHTML = "dostateczny";
//     break;
//   case 4:
//     opisoceny.innerHTML = "dobry";
//     break;
//   case 5:
//     opisoceny.innerHTML = "bardzo dobry";
//     break;
//   case 6:
//     opisoceny.innerHTML = "celujący";
//     break;
//   default:
//     opisoceny.innerHTML = "brak oceny";
// }
//-----------------------------------------------------------------------

// Zadanie 5
// Zbadaj wartość logiczną wyrażeń: "",0,null,undefined,"abc"," ",7,-45

// console.log(`"" - ` + !!"");
// console.log(`0 - ` + !!0);
// console.log(`null - ` + !!null);
// console.log(`undefined - ` + !!undefined);
// console.log(`abc - ` + !!"abc");
// console.log(`  - ` + !!" ");
// console.log(`7 - ` + !!7);
// console.log(` -45 - ` + !!-45);
//--------------------------------------------------------------------------

// Zadnie 6
// Napisz skrypt, który dla 0, wypisze w konsoli tekst "Zero", dla innych liczb tekst "Liczba różna od zera".

// let number = 0;

// if (number === 0) {
//   console.log("Zero");
// } else {
//   console.log("Liczba różna od zera");
// }
//----------------------------------------------------------------------------

// ---------------------Obsługa zdarzeń cz. I--------------------------------------------------------------------------------------------------------------

// Zadanie 1
// Napisz kod, który po naciśnięciu przycisku z podpisem Powitaj!. wyświetli tekst - nagłówek 1 stopnia - "Witaj świecie!" a sam przycisk zniknie.

// let button = document.querySelector("button");
// let text = document.getElementById("text");

// button.addEventListener("click", handleEvent);

// function handleEvent() {
//   text.innerHTML = "<h1>Witaj świecie</h1>";
// }
//-------------------------------------------------------------

// Zadanie 2
// Napisz kod, wstawi suwak o zakresie 0 do 100 z id="suwak" wartość domyślna 0. Pod suwakiem w div id="liczba" ma się wyświetlać aktualnie ustawiona wartość.

// let suwak = document.getElementById("suwak");
// let liczba = document.getElementById("liczba");

// suwak.addEventListener("input", handleInput);

// function handleInput() {
//   liczba.innerHTML = suwak.value;
// }
//-----------------------------------------------------

//------------------------------this, metoda .querySelectorAll(), pętla for-of------------------------------------------------------

// Zadanie 1
// Napisz kod, który wyświetli trzy przyciski, podpisane jeden, dwa, trzy. Kliknięcie na każdy z nich ma wyświetlić napis, kliknąłeś na przycisk.

// let przyciski = document.querySelectorAll("button");

// for (const value of przyciski) {
//   value.addEventListener("click", function handleEvent() {
//     switch (value.id) {

//       case "jeden":
//         alert("Kliknąłeś przycisk 1");
//         break;
//       case "dwa":
//         alert("KLiknąłeś przycisk 2");
//         break;
//       case "trzy":
//         alert("Kliknąłeś przycisk 3");
//         break;
//     }
//   });
// }
//--------------------------------------------------------

// Zadanie 2
// Utwórz 3 elementy, przycisk z id="przycisk", div-a z id="element_div" i span z id="element_span". Kliknięcie na którykolwiek z nich ma wypisywać identyfikator klikniętego elementu do utworzonego div-a z id="opis". Użyj this.

// const przyciski = document.querySelectorAll(".elements");
// const opis = document.getElementById("opis");

// for (const value of przyciski) {
//   value.addEventListener("click", function () {
//     opis.innerHTML = this.id;
//   });
// }

//........................................Obsługa zdarzeń cz. II, elementy formularzy---------------------------
// Zadanie 1
// Napisz kod, który po naciśnięciu przycisku z podpisem Pokaż. Przepisze wartość z pola tekstowego type="number" do div id="wynik". Liczbę wypisz jako nagłówek 1 stopnia. Sprawdź w konsoli typ odczytanej wartości.

// const button = document.getElementById("button");
// const wynik = document.getElementById("wynik");
// button.addEventListener("click", handleEvent);

// function handleEvent() {
//   const number = document.getElementById("liczba").value;
//   wynik.innerHTML = `<h1>${number}</h1>`;
//   console.log(typeof number);
// }
//---------------------------------------------

// Zadanie 2
// Jak wyżej. Zmodyfikuj kod tak by wypisywała się 2 potęga wpisanej liczby.

// const numer = document.getElementById("numer");
// const przycisk = document.getElementById("przycisk");
// const wynik = document.getElementById("wynik");

// przycisk.addEventListener("click", handleEvent);

// function handleEvent() {
//   console.log(typeof numer.value);
//   const potegaLiczby = numer.value * numer.value;
//   wynik.innerHTML = `<h1>${Number(potegaLiczby)}</h1>`;
//   console.log(typeof potegaLiczby);
// }
//-------------------------------------------------------------

// Zadanie 3
// Utwórz prosty "dodawacz" liczb, który będzie wyglądał w sposób następujący:
// const numer1 = document.getElementById("numer1");
// const numer2 = document.getElementById("numer2");
// const rownaSie = document.getElementById("rownaSie");
// const wynik = document.getElementById("wynik");

// rownaSie.addEventListener("click", handleEvent);

// function handleEvent() {
//   wynik.innerHTML = parseFloat(numer1.value) + parseFloat(numer2.value);
// }
// --------------------------------------------------------------

// Zadanie 4
//Utwórz listę select z nazwami pasm górskich, wybranie danego pasma ma wyswietlać nazwę i wysokość najwyższego szczytu.

// const opcja = document.getElementsByClassName("opcja");
// const wynik = document.getElementById("wynik");

// const szczyty = document.getElementById("szczyty");

// szczyty.addEventListener("input", handleEvent);

// function handleEvent() {
//   wynik.innerHTML = `Najwyższy szczyt: ${szczyty.value}`;
// }
//-------------------------------------------------------------------

// Zadanie 5
// Utwórz listę select z nazwami pasm górskich i ich najwyższych, szczytów. Wybranie danego pasma ma wyswietlać zdjęcie danego pliku. Są to pliki: babia.jpg, rysy.jpg, sniezka.jpg i wybierz.jpg.
// const szczyty = document.getElementById("szczyty");
// const wynik = document.getElementById("wynik");

// szczyty.addEventListener("input", handleEvent);

// function handleEvent() {
//   wynik.innerHTML = `<img src="${szczyty.value}">`;
// }
