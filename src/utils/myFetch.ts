const baseUrl = import.meta.env.PROD ? 'http://fyzzz.cn:9100' : '';
export const getReq = async (url: string, params?: { [key: string]: any }) => {
  const queryString = params ? new URLSearchParams(params).toString() : '';
  const fullUrl = queryString ? `${url}?${queryString}` : url;
  const res = await fetch(`${baseUrl}${fullUrl}`, { method: 'GET' });
  const data = await res.json();
  return data;
};
