"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. 
На странице должны отображаться товары, под каждым товаром должен быть список 
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

Каждый отзыв, как и продукт, должен иметь уникальный id, для упрощения, используем 
функцию `uid()`, она нам будет возвращать случайный id в виде небольшой строки.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не 
делать, пока рано.
*/

function uid() {
  return Math.random().toString(36).slice(2);
}
const initialData = [
  {
    id: uid(),
    product: "Apple iPhone 13",
    reviews: [
      {
        id: uid(),
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: uid(),
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    id: uid(),
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: uid(),
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    id: uid(),
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: uid(),
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

        function createProductElement(product) {
            let productElement = document.createElement('div');
            productElement.innerHTML = `<h2>${product.product}</h2>`;

            let reviewList = document.createElement('ul');
            productElement.appendChild(reviewList);

            product.reviews.forEach(review => {
                let reviewItem = document.createElement('li');
                reviewItem.textContent = review.text;
                reviewList.appendChild(reviewItem);
            });

            let reviewForm = document.createElement('form');
            reviewForm.innerHTML = `
                <textarea name="review" placeholder="Оставьте отзыв..."></textarea>
                <button type="submit">Отправить</button>
            `;
            reviewForm.addEventListener('submit', e => {
                e.preventDefault();
                let reviewText = e.target.review.value;
                if (reviewText.length < 50 || reviewText.length > 500) {
                    alert('Отзыв должен быть от 50 до 500 символов');
                    return;
                }
                let newReview = { id: uid(), text: reviewText };
                product.reviews.push(newReview);
                createReviewElement(newReview).forEach(element => reviewList.appendChild(element));
                e.target.reset();
            });

            productElement.appendChild(reviewForm);

            return productElement;
        }


        function createReviewElement(review) {
            let reviewElement = document.createElement('li');
            reviewElement.textContent = review.text;
            return [reviewElement];
        }

        let productList = document.querySelector('#product_list');
        initialData.forEach(product => {
            let productElement = createProductElement(product);
            productList.appendChild(productElement);
        });


console.log(initialData);