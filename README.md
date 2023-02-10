# Тестовое задание 

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
4. Таблица реализована с использованием react-table и хуков. Дизайн минимален(таблица Bootstrap)
5. Поскольку тестовое API отдает только 10 карт, **сделала минимальный лимит - 5 карт**, чтобы продемонстрировать "показать еще"
6. Сортировка  - нажать на заголовок.

## Инструменты
React  
Bootstrap  
Redux  
Redix thunk  
react-table  
axios  

