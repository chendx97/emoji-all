export const getReq = async (url: string, params?: { [key: string]: any }) => {
  const queryString = params ? new URLSearchParams(params).toString() : '';
  const fullUrl = queryString ? `${url}?${queryString}` : url;
  const res = await fetch(fullUrl, { method: 'GET' });
  const data = await res.json();
  return data;
};
