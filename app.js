// Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

// Страница добавления отзыва:

// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

// Страница просмотра отзывов:

// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).

function saveReview() {
  const productName = document.getElementById("productName").value;
  const reviewText = document.getElementById("reviewText").value;
  if (productName && reviewText) {
    const review = {
      productName,
      reviewText,
    };
    let reviews = localStorage.getItem("reviews");
    reviews = reviews ? JSON.parse(reviews) : [];
    reviews.push(review);
    localStorage.setItem("reviews", JSON.stringify(reviews));
    console.log("Отзыв успешно добавлен!");
    document.getElementById("productName").value = "";
    document.getElementById("reviewText").value = "";
  } else {
    alert("Пожалуйста, заполните все поля");
  }
}
