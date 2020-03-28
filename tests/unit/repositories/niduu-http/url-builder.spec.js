import { UrlBuilder } from '@/repositories/helpers/url-builder'

describe('Teste UrlBuilder', () => {
  it('Should return a simple url', () => {
    // arranges
    const url =  'api.niduu.com'

    // acts
    const result = UrlBuilder.build(url)

    // asserts
    expect(result).toEqual(url)
  })

  it('Should return url with query { company: 1 }', () => {
    // arranges
    const url = 'api.niduu.com'
    const queries = { company: 1 }

    // acts
    const result = UrlBuilder.build(url, queries)

    // asserts
    expect(result).toEqual('api.niduu.com?company=1')
  })

  it('Should return url with many queries', () => {
    // arranges
    const url = 'api.niduu.com'
    const queries = { company: 1, finished: true }

    // acts
    const result = UrlBuilder.build(url, queries)

    // asserts
    expect(result).toEqual('api.niduu.com?company=1&finished=true')
  })
})
