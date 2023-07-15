export class Expense {
    constructor (title, price, date) {
        this.title = title;
        this.price = price;
        this.date = new Date(date.split('.')[0], date.split('.')[1] - 1, date.split('.')[2]);
    }
}

export const expenseArr = [
    new Expense("Macbook", 2500, "2019.08.27"),
    new Expense("Headphones", 100, "2020.02.14"),
    new Expense("Gaming Mouse", 50, "2021.06.10"),
    new Expense("Smart TV", 800, "2020.11.30"),
    new Expense("Fitness Tracker", 150, "2019.12.03"),
    new Expense("Portable Speaker", 70, "2022.03.22"),
    new Expense("Coffee Machine", 200, "2021.09.18"),
    new Expense("External Hard Drive", 120, "2020.07.07"),
    new Expense("Camera Lens", 300, "2022.05.05"),
    new Expense("Wireless Keyboard", 80, "2023.01.29")
]