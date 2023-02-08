import { useCallback } from "react";

// поскольку гугл-таблица не ждет в запросе токен, на данном этапе просто проверяем его наличие
// в другом случае его необходимо было передать в запрос 

export const useHttp = () => {
  const request = useCallback(async (url, method = "GET", body = null) => {
    const auth_token = localStorage.getItem("auth_token");
    if (!auth_token) {
      return;
    }
    try {
      const response = await fetch(url, { method, body });
      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }

      const data = await response.json();

      return data;
    } catch (e) {
      throw e;
    }
  }, []);

  return {
    request,
  };
};
