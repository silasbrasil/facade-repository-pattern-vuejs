import { NiduuHttp } from '@/repositories/niduu-http'

describe('NiduuHttp Tests', () => {
  const url = 'http://dummy.restapiexample.com/api/v1/employees'
  const http = new NiduuHttp()

  it('Niduu Http simple Get', async () => {
    const result = await http.get(url)
    expect(result.data.length).toBeGreaterThan(3)
    console.log('------------------------------------')
  })

  it('Niduu Http simple with Queries', async () => {
    const queries = { company: 1 }
    const result = await http.get(url, { queries })
    expect(result.data.length).toBeGreaterThan(3)
    console.log('------------------------------------')
  })

  it('Niduu Http simple with Auth', async () => {
    const result = await http.get(url, { auth: true })
    expect(result.data.length).toBeGreaterThan(3)
    console.log('------------------------------------')
  })

  it('Niduu Http Get with Auth and query', async () => {
    const result = await http.get(url, { auth: true, queries: { company: 1 } })
    expect(result.data.length).toBeGreaterThan(3)
    console.log('------------------------------------')
  })

})
