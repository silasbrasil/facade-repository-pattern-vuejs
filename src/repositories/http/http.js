import {
  getRequest,
  postRequest,
  putRequest,
  patchRequest,
  deleteRequest
} from './facades/http-facade'


class Options {
  constructor(auth = false, queries = {}) {
    this.auth = auth
    this.queries = queries
  }
}

function makeOptions(options) {
  if (options) return new Options(options.auth, options.queries)
  else return new Options()
}

export class NiduuHttp {

  constructor(urlBuilder, headerBuilder) {
    this.__urlBuilder__ = function () { return urlBuilder }
    this.__headerBuilder__ = function () { return headerBuilder }
  }

  get urlBuilder() { return this.__urlBuilder__() }
  set urlBuilder(_) { throw new Error('Todo urlBuilder property is read only') }

  get headerBuilder() { return this.__headerBuilder__() }
  set headerBuilder(_) { throw new Error('Todo headerBuilder property is read only') }

  async makeHeaders(auth) {
    return auth
      ? await this.headerBuilder.authorization()
      : this.headerBuilder.build()
  }

  async get(path, options) {
    const opts = makeOptions(options)
    const url = this.urlBuilder.build(path, opts.queries)
    const headers = await this.makeHeaders(opts.auth)

    return getRequest(url, headers)
  }

  async post(path, body, options) {
    const opts = makeOptions(options)
    const url = this.urlBuilder.build(path, opts.queries)
    const headers = await this.makeHeaders(opts.auth)

    return postRequest(url, body, headers)
  }

  async put(path, body, options) {
    const opts = makeOptions(options)
    const url = this.urlBuilder.build(path, opts.queries)
    const headers = await this.makeHeaders(opts.auth)

    return putRequest(url, body, headers)
  }

  async patch(path, body, options) {
    const opts = makeOptions(options)
    const url = this.urlBuilder.build(path, opts.queries)
    const headers = await this.makeHeaders(opts.auth)

    return patchRequest(url, body, headers)
  }

  async delete(path, options) {
    const opts = makeOptions(options)
    const url = this.urlBuilder.build(path, opts.queries)
    const headers = await makeHeaders(opts.auth)

    return deleteRequest(url, body, headers)
  }
}
