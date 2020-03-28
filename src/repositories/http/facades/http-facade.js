import axios from 'axios'

export function getRequest(url, headers = {}) {
  return axios
    .get(url, { headers })
    .then(({ data }) => data)
}

export function postRequest(url, body, headers) {
  return axios
    .post(url, body, { headers })
    .then(({ data }) => data)
}

export function putRequest(url, body, headers) {
  return axios
    .put(url, body, { headers })
    .then(({ data }) => data)
}

export function patchRequest(url, body, headers) {
  return axios
    .path(url, body, { headers })
    .then(({ data }) => data)
}

export function deleteRequest(url, headers) {
  return axios
    .delete(url, { headers })
    .then(({ data }) => data)
};