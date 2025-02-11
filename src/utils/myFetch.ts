const baseUrl = 'https://fyzzz.cn';
export const getReq = async (url: string, params?: { [key: string]: any }) => {
  const queryString = params ? new URLSearchParams(params).toString() : '';
  const fullUrl = queryString ? `${url}?${queryString}` : url;
  const res = await fetch(`${baseUrl}${fullUrl}`, {
    method: 'GET',
    headers: {
      'token': import.meta.env.VITE_API_TOKEN
    }
  });
  const data = await res.json();
  return data;
};
