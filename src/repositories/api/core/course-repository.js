import { baseUrl } from './config'
import { NiduuHttp } from '../../http/http'
import { UrlBuilder } from '../../http/helpers/url-builder'
import { HeaderBuilder } from '../../http/helpers/header-builder'


function makeQueries(id) {
  const num = Number(id)
  if (Number.isInteger(num))
    return { company: id }
  else
    throw Error('Company id is not a number')
}

export default class CourseRepository {
  path = 'courses'

  constructor(company) {
    this.options = {
      auth: true,
      queries: makeQueries(company.id)
    }
    this.http = new NiduuHttp(
      UrlBuilder,
      HeaderBuilder
    )
  }

  getAllCourses() {
    const url = `${baseUrl}/${this.path}`
    return this.http.get(url, this.options)
    // return { url, ...this.options }
  }

  getCourseById(id) {
    if (!Number.isInteger(Number(id))) throw new Error('Course id is not a number')
    
    const url = `${baseUrl}/${this.path}/${id}`

    return this.http.get(url, this.options)
    // return { url, ...this.options }
  }

  getEmployeeById(id) {
    const url = `${baseUrl}/employee/${id}`

    return this.http.get(url, this.options)
  }
}
