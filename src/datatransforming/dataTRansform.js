// переметры запроса (отсутп, лимит (установила 50), поиск(если он есть))
export const urlParams = (offset, limit, search) => {
  let params = new URLSearchParams();
  let value = "";
  params.append("offset", offset);
  params.append("limit", limit);
  for (let key in search) {
    if (search[key].length > 0) {
      // value.append(key, search[key].toString())
      value += `${key}=${search[key]}`;
    }
  }

  params.append("search", `${value}`);
  return `${params}`;
};

// Заголовки таблицы и заголовки поиска
export const tHeads = [
  { Header: "ФИО", accessor: "fio" },
  { Header: "ID Карты", accessor: "user_id" },
  { Header: "Макет карты", accessor: "template" },
  {
    Header: "Создана",
    accessor: "created_at",
    Cell: ({ cell: { value } }) => {
      const date = new Date(value);
      const year = date.getFullYear();
      const mounth = ("0" + date.getMonth() + 1).slice(-2);
      const day = ("0" + date.getDay()).slice(-2);
      return <>{`${day}.${mounth}.${year}`}</>;
    },
  },
  { Header: "Бонусы", accessor: "bonus" },
  { Header: "Скидка", accessor: "discount" },
  { Header: "Уровень лояльности", accessor: "loyalty_level" },
  { Header: "Сумма покупок за период", accessor: "summ" },
  { Header: "Общая сумма покупок", accessor: "summ_all" },
  { Header: "Последнее посещение", accessor: "date_last" },
  { Header: "Визиты за период", accessor: "visits" },
  { Header: "Всего визитов", accessor: "visits_all" },
  {
    Header: "Отправить PUSH",
      Cell: <i className="bi bi-send" style={{ margin: "10px" }}></i>
  },
];

export const tHeadsModify = (tHeads) => {
  return tHeads.map((item) => {
    return {
      Header: item.Header,
      colums: [item],
    };
  });
};
