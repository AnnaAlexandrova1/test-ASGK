import { useCallback } from "react";
const auth_token = localStorage.getItem("auth_token");
// const myHeaders = new Headers();
//  myHeaders.append('Content-Type', 'application/json');
//  myHeaders.append('Authorization', auth_token);

export const useHttp = () => {
  const request = useCallback(async (url, method = "GET", body = null, headers= {'Content-Type': 'application/json','Authorization': auth_token }) => {
    try {
      const response = await fetch(url, { method, body, headers});
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
