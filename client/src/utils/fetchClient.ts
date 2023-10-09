const BASE_URL = 'http://localhost:3001';

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

function request<T>(
  url: string,
  method: RequestMethod = 'GET', 
  data: any = null,
): Promise<T> {
  const options: RequestInit = { method };

  if (data) {
    if (data instanceof FormData) {
      options.body = data;
    } else  {
      options.body = JSON.stringify(data);
      options.headers = {
        'Content-Type': 'application/json; charset=UTF-8',
      };
    }
  }

  return fetch(BASE_URL + url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    })
    .catch(err => console.log(err));
}

export const client = {
  get: <T>(url: string) => request<T>(url),
  post: <T>(url: string, data: any) => request<T>(url, 'POST', data),
  postFormData: <T>(url: string, data: FormData) => request<T>(url, 'POST', data),
  patchFormData: <T>(url: string, data: FormData) => request<T>(url, 'PUT', data),
  put: <T>(url: string, data: any) => request<T>(url, 'PUT',  data),
  delete: (url: string) => request(url, 'DELETE'),
};
