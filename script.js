//Условия

//Способ №1
let num = 50;

if (num <49) {
    console.log('Неверно!')
} else if (num >100) {
    console.log('Много!')
} else {
    console.log('Верно')
};

//Способ №2
//Тернарный оператор, когда используются 3 аргумента
(num==50) ? console.log('Верно') : console.log('Неверно!');
//Бинарный оператор, когда используются 2 аргумента, например 2*2
//Унарный оператор, когда используются 1 аргумент, например инкремент/декремент

//Способ №3
//Конструктор switch, это модификация которая поддерживает сразу несколько if()
let num = 50;

switch (num) {
    case num < 49:
        console.log('Неверно!');
        break;
    case num > 100:
        console.log('Много!');
        break;
    case 50:
    console.log('Верно');
        break;
    default:
    console.log('Что то пошло не так!'); 
        break;      
}

//Циклы
//while
let num = 50;
// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do
do {
    console.log(num);
    num++;
}
while (num <55);

//for

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        // break
        continue
    }
    console.log(i);
}