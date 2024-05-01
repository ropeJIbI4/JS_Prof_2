"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
    #books;
    
  constructor(books) {
    if (books.length > 0) {
      const uniqueBooks = new Set(books);
      if (uniqueBooks.size!== books.length) {
        throw new Error('Начальный список книг не должен содержать дубликатов');
      }
      this.#books = Array.from(uniqueBooks);
    } else {
      this.#books = [];
    }
  }

  get allBooks() {
    return this.#books;
  }

  addBook(title) {
    if (this.#books.some(book => book === title)) {
      throw new Error(`Книга с названием "${title}" уже существует в библиотеке`);
    }
    this.#books.push(title);
  }

  removeBook(title) {
    const index = this.#books.findIndex(book => book === title);
    if (index === -1) {
      throw new Error(`Книги с названием "${title}" не существует в библиотеке`);
    }
    this.#books.splice(index, 1);
  }

  hasBook(title) {
    return this.#books.includes(title);
  }
}

const library = new Library(['Война и мир', 'Анна Каренина', 'Мастер и Маргарита"']);

library.addBook('Золотой теленок');
// library.addBook('Золотой теленок');

console.log(library.allBooks);

library.removeBook('Золотой теленок');
// library.removeBook('Евгений Онегин');

console.log(library.allBooks);

console.log(library.hasBook('Война и мир'));
console.log(library.hasBook('Золотой теленок'));
