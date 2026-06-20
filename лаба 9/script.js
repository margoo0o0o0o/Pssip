
// ВНЕШНИЙ ФАЙЛ: script.js


// Функция, вызываемая из HTML
function showExternalMessage() {
    alert("Привет! Это сообщение из внешнего файла script.js!");
}

// Функция с датой
function showDate() {
    let now = new Date();
    alert("Сегодня: " + now.toLocaleDateString() + "\nВремя: " + now.toLocaleTimeString());
}

// Функция с вычислениями
function calculateSquare(number) {
    return number * number;
}

// Функция с приветствием
function greetUser(name) {
    if (name) {
        return "Привет, " + name + "! Добро пожаловать!";
    } else {
        return "Привет, Гость!";
    }
}

// Автоматический вывод при загрузке
console.log("Внешний файл script.js загружен!");

// Дополнительный вывод на страницу
document.write("<p style='color: green; font-weight: bold;'>Этот текст добавлен из ВНЕШНЕГО файла script.js</p>");