import { useCallback } from "react";
const auth_key = localStorage.getItem('auth_key');
// const myHeaders = new Headers();
//  myHeaders.append('Content-Type', 'application/json');
//  myHeaders.append('Authorization', auth_token);

export const useHttp = () => {
  const request = useCallback(async (url, method = "GET", body = null, headers= {'Content-Type': 'application/json','Authorization': auth_key }) => {
    try {
      const response = await fetch(url, { method, body, headers});
      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }
      //console.log(response)
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
