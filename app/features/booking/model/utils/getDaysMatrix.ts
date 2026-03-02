export const getDaysMatrix = (
    year: number, 
    month: number
    ): (number | null)[][] => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // JS: 0 = воскресенье, делаем 7
    const firstDayOfWeek = new Date(year, month, 1).getDay();
    const firstDay = firstDayOfWeek === 0 ? 7 : firstDayOfWeek;

    const cells: (number | null)[] = [];

    //Пустые участки до 1 дня
    for (let i = 1; i < firstDay; i++) {
        cells.push(null);
    }

    //Дни месяца
    for (let day = 1; day <= daysInMonth; day++) {
        cells.push(day);
    }

    //Добираем до полной недели
    while (cells.length % 7 !== 0) {
        cells.push(null);
    }

    //Бьем на строки
    const matrix: (number | null)[][] = [];
    for (let i = 0; i < cells.length; i += 7) {
        matrix.push(cells.slice(i, i + 7));
    }

    return matrix;
}