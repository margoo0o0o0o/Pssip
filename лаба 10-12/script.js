
// ВНЕШНИЙ ФАЙЛ: script.js
// ЗАДАНИЕ 4: Работа с объектом Math (3 балла)
// 
// ФОРМУЛА: (b² - π) / |a - 4| + 7√(c + π)

// Пользовательская функция для расчета по формуле
function calculateFormula() {
    // Получаем значения a, b, c от пользователя
    let a = prompt("Введите значение a:");
    let b = prompt("Введите значение b:");
    let c = prompt("Введите значение c:");
    
    // Преобразуем в числа
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);
    
    // Проверяем, что введены корректные числа
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById('result4').innerHTML = 
            " Ошибка: Введите корректные числа!";
        return;
    }
    
    // Вычисляем по формуле
    let result = calculate(a, b, c);
    
    // Проверяем, не вернулась ли ошибка
    if (typeof result === 'string') {
        document.getElementById('result4').innerHTML = 
            " " + result;
        return;
    }
    
    // Выводим результат в теле HTML-документа
    let output = document.getElementById('result4');
    output.innerHTML = 
        "<b>Расчет по формуле: (b² - π) / |a - 4| + 7√(c + π)</b><br><br>" +
        " Исходные данные:<br>" +
        "a = " + a + "<br>" +
        "b = " + b + "<br>" +
        "c = " + c + "<br><br>" +
        " Пошаговый расчет:<br>" +
        "1. b² = " + Math.pow(b, 2) + "<br>" +
        "2. π = " + Math.PI + "<br>" +
        "3. b² - π = " + (Math.pow(b, 2) - Math.PI) + "<br>" +
        "4. |a - 4| = " + Math.abs(a - 4) + "<br>" +
        "5. (b² - π) / |a - 4| = " + ((Math.pow(b, 2) - Math.PI) / Math.abs(a - 4)) + "<br>" +
        "6. c + π = " + (c + Math.PI) + "<br>" +
        "7. √(c + π) = " + Math.sqrt(c + Math.PI) + "<br>" +
        "8. 7√(c + π) = " + (7 * Math.sqrt(c + Math.PI)) + "<br><br>" +
        " <b>РЕЗУЛЬТАТ = " + result + "</b>";
}

// Пользовательская функция с использованием return
function calculate(a, b, c) {
    // Проверяем деление на ноль
    let denominator = Math.abs(a - 4);
    
    if (denominator === 0) {
        return "Ошибка: деление на ноль! (a = 4)";
    }
    
    // Проверяем, что под корнем неотрицательное число
    let underRoot = c + Math.PI;
    if (underRoot < 0) {
        return "Ошибка: под корнем отрицательное число! (c + π < 0)";
    }
    
    // ============= ВЫЧИСЛЯЕМ ПО ФОРМУЛЕ =============
    
    // Первая часть: (b² - π) / |a - 4|
    let bSquared = Math.pow(b, 2);           // b²
    let numerator = bSquared - Math.PI;       // b² - π
    let denominatorValue = Math.abs(a - 4);   // |a - 4|
    let firstPart = numerator / denominatorValue;  // (b² - π) / |a - 4|
    
    // Вторая часть: 7√(c + π)
    let underRootValue = c + Math.PI;         // c + π
    let sqrtValue = Math.sqrt(underRootValue); // √(c + π)
    let secondPart = 7 * sqrtValue;           // 7√(c + π)
    
    // Итоговый результат
    let result = firstPart + secondPart;
    
    // Округляем до 4 знаков после запятой
    return Math.round(result * 10000) / 10000;
}

// Дополнительная функция для демонстрации формулы
function showFormulaInfo() {
    alert(
        "Формула: (b² - π) / |a - 4| + 7√(c + π)\n\n" +
        "Используемые методы Math:\n" +
        "- Math.pow(b, 2) - возведение в степень\n" +
        "- Math.PI - число π (3.14159...)\n" +
        "- Math.abs(a - 4) - модуль числа\n" +
        "- Math.sqrt(c + π) - квадратный корень\n" +
        "- Math.round() - округление\n\n" +
        "Пример:\n" +
        "a = 2, b = 3, c = 1\n" +
        "Результат = (9 - 3.14) / 2 + 7 * √(1 + 3.14)\n" +
        "Результат = 2.93 + 14.25 = 17.17"
    );
}

console.log("Внешний файл script.js для задания 4 загружен!");