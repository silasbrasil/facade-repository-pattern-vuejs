import QueryBuilder from './query-builder'

export default class UrlBuilder {
  static build(path, queries = {}) {
    const queryString = QueryBuilder.stringfy(queries)
    const url = queryString
      ? `${path}?${queryString}`
      : `${path}`

    console.log('Url >>> ', url)
  
    return url
  }
}
