import NiduuHttp from '@/repositories/http/http'
import UrlBuilder from '@/repositories/http/helpers/url-builder'
import HeaderBuilder from '@/repositories/http/helpers/header-builder'
// import HeaderBuilderMock from '../../../__mock__/__header-builder__'

describe('NiduuHttp suit test', () => {
  // const baseUrl = 'http://core.api.niduu.test'
  // const path = 'campaigns'
  const url = 'http://dummy.restapiexample.com/api/v1'
  const options = {
    auth: true,
    company: 1
  }

  const niduuHttp = new NiduuHttp(
    UrlBuilder,
    HeaderBuilder
  )

  it('Simple GET - Campaign route', async () => {
    // arrange
    const result = await niduuHttp.get(url, options)

    expect(result.data.length).toBeGreaterThan(3)
  })

  it('Niduu Http simple with Queries', async () => {
    const queries = { company: 1 }
    const result = await niduuHttp.get(url, { queries })
    expect(result.data.length).toBeGreaterThan(3)
    console.log('------------------------------------')
  })

  it('Niduu Http simple with Auth', async () => {
    const result = await niduuHttp.get(url, { auth: true })
    expect(result.data.length).toBeGreaterThan(3)
    console.log('------------------------------------')
  })

  it('Niduu Http Get with Auth and query', async () => {
    const result = await niduuHttp.get(url, { auth: true, queries: { company: 1 } })
    expect(result.data.length).toBeGreaterThan(3)
    console.log('------------------------------------')
  })

})
