
export class QueryBuilder {
  static stringfy(queries) {
    console.log('Queries >>> ', queries)

    return queries
      ? Object
        .entries(queries)
        .map(entries => `${entries[0]}=${entries[1]}`)
        .join('&')
      : ''
  }
}
