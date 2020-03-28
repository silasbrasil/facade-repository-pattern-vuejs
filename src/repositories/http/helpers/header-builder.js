export class HeaderBuilder {
  static build() {
    const headers = {
      'Accept-Language': 'pt-Br',
      'App-Name': 'app'
    }
    console.log('Header >>> ', headers)

    return headers
  }

  static async authorization() {
    const token = await Promise.resolve('jwt')
    const headers = {
      'Accept-Language': 'pt-Br',
      'App-Name': 'app',
      'Authorization': token
    }
    console.log('Header >>> ', headers)

    return headers
  }
}