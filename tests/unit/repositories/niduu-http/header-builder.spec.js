import { HeaderBuilder } from '@/repositories/helpers/header-builder'

describe('Teste HeaderBuilder', () => {
  it('Should return a simple header', () => {
    // arranges
    const header = {
      'Accept-Language': 'pt-Br',
      'App-Name': 'app'
    }
    
    // acts
    const result = HeaderBuilder.build()

    // asserts
    expect(result).toEqual(header)
  })

  it('Should return url with query { company: 1 }', async () => {
    // arranges
    const header = {
      'Accept-Language': 'pt-Br',
      'App-Name': 'app',
      'Authorization': 'jwt'
    }

    // acts
    const result = await HeaderBuilder.authorization()

    // asserts
    expect(result).toEqual(header)
  })
})
