# Тестовое задание   
[ Реализация GitHub-Pages](https://annaalexandrova1.github.io/test-ASGK/)

### Задача:
1. **Сделать страницу входа**  
Клиент вводит свой логин и пароль, в ответ приходит ключ авторизации, после чего происходит вход в личный кабинет  
2. **Страница с клиентами**  
 Создать страницу с таблицей, где можно посмотреть всех клиентов и отсортировать их по любому столбцу (минимум 10 переменных из доступных). Реализовать поиск.   
3. **Отправка PUSH**  
Реализовать возможность отправки определенным клиентам PUSH-сообщение через модальное окно.  
4. **Ограничить доступ к странице**  
Без авторизации доступ к странице должен быть закрыт.   
5. **Дополнительно**  
По желанию реализовать дополнительный функционал по API  

## Комментарии к реализации
1. Токен авторизации и ключ идентификации в localStorage.  
2. Состояние авторизации в state. Список клиентов не доступен если состояние "не авторизован"  
3. При нажатии на "выход" удаляются токены из localStorage, меняется state  
4. Поскольку тестовое API отдает только 10 карт, **сделала минимальный лимит - 5 карт**, чтобы продемонстрировать "показать еще"  
5. Сортировка  - нажать на заголовок.  
6. Поиск реализован **пока** только по одному столбцу.  
7. Отправка push-сообщение **пока** только одному пользователю. Видимо из-за того, что выдача тестовая, сервер возврашает ошибку 500. Оставила в ошибкой.  

## Что нужно улучшить
Поиск по нескольким столбцам сразу    
Отправка push-сообщений сразу группе пользователей  
При перезагрузке страницы состояние авторизации обнуляется, приходится заходить заново. Тянуть данные с localStorage

## Инструменты
React  
Bootstrap  
Redux  
Redix thunk  
react-table  
axios  

