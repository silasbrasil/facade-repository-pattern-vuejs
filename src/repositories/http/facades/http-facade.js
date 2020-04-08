import axios from 'axios'

class HttpFacade {
  get(url, headers = {}) {
    return axios
      .get(url, { headers })
      .then(({ data }) => data)
  }

  post(url, body, headers) {
    return axios
      .post(url, body, { headers })
      .then(({ data }) => data)
  }

  put(url, body, headers) {
    return axios
      .put(url, body, { headers })
      .then(({ data }) => data)
  }

  patch(url, body, headers) {
    return axios
      .path(url, body, { headers })
      .then(({ data }) => data)
  }

  delete(url, headers) {
    return axios
      .delete(url, { headers })
      .then(({ data }) => data)
  }
}

const httpFacade = new HttpFacade()
Object.freeze(httpFacade)

export default httpFacade