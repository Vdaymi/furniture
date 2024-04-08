// Функція "Діалог з користувачем"
function userDialog() {
    let userInput = prompt("Оцініть наш веб-сайт каталогу меблів! (0-10)", 0);
    if (userInput === null)
        alert('Ви не оцінили веб-сайт');
    while (isNaN(+userInput) || +userInput < 0 || +userInput > 10  || +userInput == ''){
        userInput = prompt('Оцінка має бути в межах 0-10. Спробуйте ще раз!', 0);
        if (userInput === null){
            alert('Ви не оцінили веб-сайт');
            break;
        }
    }
    let result = confirm("Чи хочете ви перейти на сторінку магазину меблів?");
    if (result == true) 
    {
        window.location.href = "https://rozetka.com.ua/ua/mebel/c152458/"; 
    } 
    else 
    {
    alert("Дякуємо, що залишились на нашій сторінці!");
    }
}

// Функція виводу інформації про розробника
function showDeveloperInfo(lastName, firstName, position = "Студент") {
    alert("Прізвище: " + lastName + "\nІм'я: " + firstName + "\nПосада: " + position);
}

// Функція порівняння двох рядків
function compareStrings(str1, str2) {
    if (str1 > str2) {
        alert("рядок: " + str1 + " > за рядок: " + str2);
    } else if (str2 > str1) {
        alert("рядок: " + str1 + " < за рядок: " + str2);
    } else {
        alert("Рядки рівні між собою.");
    }
}

showDeveloperInfo("Філь", "Вадим");
compareStrings("Студент", "Привіт");
userDialog();


