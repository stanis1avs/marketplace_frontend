# marketplace


Миграция приложения с React на Next 


## Технологии frontend

1. React
2. Next.js
3. Redux Toolkit
4. Redux Thunk
5. localstorage

## Технологии backend

1. Koa
2. PostgreSQL

Приложение содержит следующие страницы:

1. Главная
2. Каталог товаров
3. Информационные
4. Страница товара
5. Корзина
6. 404

## Основные функции приложения:

1. Фиксированное количество отображения товаров каталога
2. Категоризация товаров каталога
3. Подгрузка следующих товаров каталога (в том числе внутри конкретной категории)
4. Поиск товара в каталоге
5. Добавление и сохранение товара в корзине
6. Оформление заказа и его отправка 


## Варианты запуска приложения:
1. [vercel](https://bosanoga-marketplace.vercel.app/)
2. При наличии NodeJS
- ```git clone https://github.com/stanis1avs/marketplace_frontend.git```
- ```cd marketplace_frontend && npm install && npm run build && npm run start:full```
- либо ```cd marketplace_frontend && npm install && npm run dev```
- Откройте в браузере ```http://localhost:3000```