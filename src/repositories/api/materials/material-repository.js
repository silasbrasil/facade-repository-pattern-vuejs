// import NiduuHttp from '../../niduu-http'
// import HeaderBuilder from '../../http/helpers/header-builder'
// import UrlBuilder from '../../http/helpers/url-builder'

const baseUrl = process.env.VUE_APP_MATERIALS_API
const path = 'materials'

export default class MaterialRepository {
  constructor (http, company) {
    this.url = `${baseUrl}/${path}`

    this.http = http

    this.options = {
      auth: true,
      queries: { id: company.id }
    }

    // this.http = new NiduuHttp(
    //   UrlBuilder,
    //   HeaderBuilder
    // )
  }

  getAll () {
    return this.http.get(this.url, this.options)
  }

  search (queryString) {
    const searchUrl = `${this.url}/autocomplete`
    const options = { ...this.options, search: queryString }

    return this.http.get(searchUrl, options)
  }

  getMaterial (id) {
    const options = { ...this.options, release: id }

    return this.http.get(this.url, options)
  }

  getMaterialCard (id) {
    const cardUrl = `${this.url}/cards/${id}`
    const options = { ...this.options, release: id }

    return this.http.get(cardUrl, options)
  }
}