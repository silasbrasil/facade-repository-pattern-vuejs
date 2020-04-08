import HttpFacade from './facades/http-facade'


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
    this.urlBuilder = urlBuilder
    this.headerBuilder = headerBuilder
  }

  async makeHeaders(auth) {
    return auth
      ? this.headerBuilder.authorization()
      : this.headerBuilder.build()
  }

  async get(path, options) {
    const opts = makeOptions(options)
    const url = this.urlBuilder.build(path, opts.queries)
    const headers = await this.makeHeaders(opts.auth)

    return HttpFacade.get(url, headers)
  }

  async post(path, body, options) {
    const opts = makeOptions(options)
    const url = this.urlBuilder.build(path, opts.queries)
    const headers = await this.makeHeaders(opts.auth)

    return HttpFacade.post(url, body, headers)
  }

  async put(path, body, options) {
    const opts = makeOptions(options)
    const url = this.urlBuilder.build(path, opts.queries)
    const headers = await this.makeHeaders(opts.auth)

    return HttpFacade.put(url, body, headers)
  }

  async patch(path, body, options) {
    const opts = makeOptions(options)
    const url = this.urlBuilder.build(path, opts.queries)
    const headers = await this.makeHeaders(opts.auth)

    return HttpFacade.patch(url, body, headers)
  }

  async delete(path, options) {
    const opts = makeOptions(options)
    const url = this.urlBuilder.build(path, opts.queries)
    const headers = await this.makeHeaders(opts.auth)

    return HttpFacade.delete(url, body, headers)
  }
}
